import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

/**
 * Runs after `vite build` finishes writing `dist/`, even when the deploy * platform invokes `vite build` directly (skipping `npm run build`).
 */
function staticPrerenderPlugin(): Plugin {
  let ran = false
  return {
    name: 'static-prerender',
    apply: 'build',
    enforce: 'post',
    async closeBundle() {
      if (ran) return
      ran = true
      if (process.env.SKIP_PRERENDER === '1') {
        console.log('[prerender] SKIP_PRERENDER=1 — skipping static HTML generation.')
        return
      }
      console.log('[prerender] Generating static HTML for crawlers (Playwright)…')
      const script = path.join(rootDir, 'scripts', 'prerender.mjs')
      await new Promise<void>((resolve, reject) => {
        const child = spawn(process.execPath, [script], {
          cwd: rootDir,
          stdio: 'inherit',
          env: process.env,
        })
        child.on('error', reject)
        child.on('exit', (code) => {
          if (code === 0) resolve()
          else reject(new Error(`prerender exited with code ${code}`))
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    staticPrerenderPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(rootDir, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
