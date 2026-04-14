/**
 * After `vite build`, captures fully rendered HTML per route so crawlers and
 * "View Source" see real content + SeoHead meta (not an empty #root).
 *
 * Set `VITE_SITE_URL` at build time for correct canonical/og:url in the bundle.
 * Optionally set `PRERENDER_ORIGIN` (same value) to rewrite preview URLs in saved HTML.
 *
 * Linux: uses @sparticuz/chromium + playwright-core.
 * Vercel’s build VM is not AWS Lambda, so @sparticuz/chromium would skip extracting
 * bundled NSS libs unless we set AWS_LAMBDA_JS_RUNTIME before loading the package
 * (see helper.js: isRunningInAwsLambdaNode20 + al2023.tar.br).
 * macOS/Windows: uses the `playwright` package — run `npx playwright install chromium` once.
 */

import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

async function launchChromium() {
  if (process.platform === 'linux') {
    if (process.env.VERCEL === '1' || process.env.PRERENDER_USE_SPARTICUZ_LAMBDA_BUNDLE === '1') {
      process.env.AWS_LAMBDA_JS_RUNTIME ??= 'nodejs22.x';
    }
    const { chromium } = await import('playwright-core');
    const sparticuz = (await import('@sparticuz/chromium')).default;
    return chromium.launch({
      args: sparticuz.args,
      executablePath: await sparticuz.executablePath(),
      headless: true,
    });
  }
  const { chromium } = await import('playwright');
  return chromium.launch({ headless: true });
}

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const dist = join(root, 'dist');

const PORT = Number(process.env.PRERENDER_PORT) || 4173;
const PREVIEW_HOST = process.env.PRERENDER_HOST || '127.0.0.1';
const base = `http://${PREVIEW_HOST}:${PORT}`;

/** Keep in sync with `src/app/App.tsx` and `src/app/seo/seoConfig.ts`. */
const ROUTES = [
  '/',
  '/about',
  '/contact',
  '/privacy',
  '/terms',
  '/ai-workflow-audit',
  '/lead-automation',
  '/team-coordination',
  '/analytics',
  '/home-services',
  '/professional-services',
  '/operations',
  '/process',
  '/booked-and-busy',
  '/custom-plan',
  '/your-plan',
  '/local-lift',
  '/local-lift/free-design',
  '/local-lift/junk-removal',
  '/local-lift/onboarding',
  '/local-lift/demo',
];

/** Vercel + cleanUrls: `about.html` is served at `/about` before SPA rewrites. `about/index.html` is unreliable. */
function outPathForRoute(routePath) {
  if (routePath === '/') return join(dist, 'index.html');
  const clean = routePath.replace(/^\/+/, '');
  const segments = clean.split('/');
  const leaf = segments.pop();
  return join(dist, ...segments, `${leaf}.html`);
}

function patchPreviewOrigin(html) {
  const origin = (process.env.PRERENDER_ORIGIN || process.env.VITE_SITE_URL || '').trim().replace(/\/+$/, '');
  if (!origin || !/^https?:\/\//i.test(origin)) return html;
  let out = html;
  const previewPattern = new RegExp(`https?://${PREVIEW_HOST.replace(/\./g, '\\.')}:${PORT}`, 'g');
  out = out.replace(previewPattern, origin);
  out = out.replace(new RegExp(`http://localhost:${PORT}`, 'g'), origin);
  return out;
}

async function waitForPreviewOk() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(`${base}/`, { redirect: 'follow' });
      if (r.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error(`Preview server at ${base} did not respond in time.`);
}

function startPreview() {
  const viteBin = join(root, 'node_modules', 'vite', 'bin', 'vite.js');
  const proc = spawn(process.execPath, [viteBin, 'preview', '--port', String(PORT), '--strictPort', '--host', PREVIEW_HOST], {
    cwd: root,
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  return proc;
}

async function main() {
  const preview = startPreview();
  preview.on('error', (err) => {
    console.error('vite preview spawn error:', err);
  });

  try {
    await waitForPreviewOk();

    const browser = await launchChromium();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.route('**/*', (route) => {
      const u = route.request().url();
      if (
        u.includes('googletagmanager.com') ||
        u.includes('google-analytics.com') ||
        u.includes('connect.facebook.net') ||
        u.includes('facebook.com/tr') ||
        u.includes('redditstatic.com/ads')
      ) {
        return route.abort();
      }
      return route.continue();
    });

    try {
      for (const path of ROUTES) {
        const url = path === '/' ? `${base}/` : `${base}${path}`;
        await page.goto(url, { waitUntil: 'load', timeout: 60000 });
        await page.waitForFunction(
          () => {
            const m = document.querySelector('meta[property="og:url"]');
            if (!m || !(m.getAttribute('content') || '').length) return false;
            const root = document.getElementById('root');
            return !!(root && root.innerHTML.trim().length > 200);
          },
          { timeout: 30000 },
        );
        await new Promise((r) => setTimeout(r, 300));

        let html = await page.content();
        html = patchPreviewOrigin(html);

        const out = outPathForRoute(path);
        await mkdir(dirname(out), { recursive: true });
        await writeFile(out, html, 'utf8');
        process.stdout.write(`prerender: ${path} -> ${relative(root, out)}\n`);
      }
    } finally {
      await browser.close();
    }
  } finally {
    preview.kill('SIGTERM');
    await new Promise((r) => setTimeout(r, 500));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
