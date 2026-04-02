/**
 * Per-route SEO for the SPA. `index.html` still holds a sensible default for first paint;
 * SeoHead updates title, description, Open Graph, Twitter, and canonical on navigation.
 *
 * Optional: set `VITE_SITE_URL` (e.g. https://www.mytasklabs.com) for stable canonical/og:url
 * when the app is served from multiple hosts.
 */

export type SeoMeta = {
  title: string;
  description: string;
  /** Defaults to index, follow when omitted */
  robots?: string;
  ogImage?: string;
};

const BRAND = 'My Task Labs';

const DEFAULT: SeoMeta = {
  title: `${BRAND} | AI Automation Consulting`,
  description:
    'My Task Labs helps businesses streamline workflows, convert more leads, and scale efficiently through intelligent AI automation—workflow audits, lead automation, and custom solutions.',
};

/**
 * Longest-prefix match: register specific paths before their parents where needed.
 * Keys use normalized paths (no trailing slash except root is '/').
 */
const ROUTES: Record<string, SeoMeta> = {
  '/': {
    title: DEFAULT.title,
    description: DEFAULT.description,
  },
  '/about': {
    title: `About ${BRAND} | Team & How We Work`,
    description:
      'Meet the My Task Labs team and how we approach AI automation: workflow mapping, lead systems, team coordination, and reporting—built around tools you already use.',
  },
  '/contact': {
    title: `Contact ${BRAND} | Schedule a Consultation`,
    description:
      'Book a consultation with My Task Labs. Tell us about your workflows and leads—we’ll map next steps for AI automation that fits your business.',
  },
  '/privacy': {
    title: `Privacy Policy | ${BRAND}`,
    description: 'How My Task Labs collects, uses, and protects your information.',
  },
  '/terms': {
    title: `Terms of Service | ${BRAND}`,
    description: 'Terms governing use of My Task Labs websites and services.',
  },
  '/ai-workflow-audit': {
    title: `AI Workflow Audit | ${BRAND}`,
    description:
      'Map how work really moves through your business and find automation wins—reduce manual steps and free your team for higher-value work.',
  },
  '/lead-automation': {
    title: `Lead Automation | ${BRAND}`,
    description:
      'Faster follow-up, cleaner handoffs, and automation so prospects don’t go cold—integrated with your CRM and scheduling tools.',
  },
  '/team-coordination': {
    title: `Team Coordination Automation | ${BRAND}`,
    description:
      'Keep calendars, assignments, and notifications in sync so nothing depends on one person forwarding an email.',
  },
  '/analytics': {
    title: `Analytics & Reporting | ${BRAND}`,
    description:
      'Dashboards and pipelines that reflect what’s actually happening—so you can decide with confidence, not last week’s spreadsheet.',
  },
  '/home-services': {
    title: `AI Automation for Home Services | ${BRAND}`,
    description:
      'Automation for contractors and home service businesses: scheduling, follow-up, dispatch handoffs, and visibility across the job pipeline.',
  },
  '/professional-services': {
    title: `AI Automation for Professional Services | ${BRAND}`,
    description:
      'Workflow and lead automation for consultants, agencies, and professional firms—fewer bottlenecks, clearer handoffs, better client experience.',
  },
  '/operations': {
    title: `Operations & Back-Office Automation | ${BRAND}`,
    description:
      'Streamline inventory, vendor workflows, and internal ops with automation that fits how your team already works.',
  },
  '/process': {
    title: `Our Process | ${BRAND}`,
    description:
      'How My Task Labs delivers automation: identify opportunities, design the system, implement, and optimize—with clear milestones along the way.',
  },
  '/booked-and-busy': {
    title: `Booked & Busy — Never Miss a Lead | ${BRAND}`,
    description:
      'A practical system to capture, respond, and book more leads—built for businesses that are already busy but losing opportunities in the cracks.',
  },
  '/custom-plan': {
    title: `Custom Automation Plan Quiz | ${BRAND}`,
    description:
      'Answer a few questions and get a tailored automation plan outline for your business—respond, follow-up, show rate, and next steps.',
  },
  '/your-plan': {
    title: `Your Automation Plan | ${BRAND}`,
    description:
      'Your personalized automation plan from My Task Labs—priorities, scores, and a 60-day target based on your quiz results.',
  },
  '/local-lift': {
    title: 'LocalLift by My Task Labs — More Customers. Less Chaos.',
    description:
      'LocalLift: free website design, local SEO, AI search visibility, and automated lead response that books jobs into your calendar—built for local service businesses.',
  },
  '/local-lift/free-design': {
    title: 'Get Your Free Website Design — LocalLift',
    description:
      'Request your free website design from LocalLift: tell us about your business, style, and goals—we’ll follow up with a tailored mockup.',
  },
};

function normalizePathname(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function getSeoForPathname(pathname: string): SeoMeta {
  const key = normalizePathname(pathname.split('?')[0] ?? pathname);
  if (ROUTES[key]) return ROUTES[key];
  return DEFAULT;
}

/** Canonical and og:url base; prefers VITE_SITE_URL when set. */
export function getSiteOrigin(): string {
  if (typeof window === 'undefined') return '';
  const raw = import.meta.env.VITE_SITE_URL as string | undefined;
  if (raw && /^https?:\/\//i.test(raw.trim())) {
    return raw.replace(/\/+$/, '');
  }
  return window.location.origin;
}

export function buildCanonicalUrl(pathname: string): string {
  const origin = getSiteOrigin();
  const path = normalizePathname(pathname.split('?')[0] ?? pathname);
  if (path === '/') return `${origin}/`;
  return `${origin}${path}`;
}
