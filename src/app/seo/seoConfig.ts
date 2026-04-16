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
  /** Shown as og:site_name */
  ogSiteName?: string;
  /** meta name="keywords" — omit on most pages */
  keywords?: string;
  /** meta name="theme-color" (browser UI) */
  themeColor?: string;
};

const BRAND = 'My Task Labs';

const DEFAULT: SeoMeta = {
  title: `${BRAND} | AI Automation Consulting`,
  description:
    'My Task Labs helps businesses streamline workflows, convert more leads, and scale efficiently through intelligent AI automation—workflow audits, lead automation, and custom solutions.',
  ogSiteName: BRAND,
  themeColor: '#4f46e5',
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
    title: 'LocalLift — Websites, Local SEO & AI Lead Booking for Home Services',
    description:
      'LocalLift (by My Task Labs) is built for contractors and local service businesses: a professional website, Google Maps and local SEO, visibility in AI search, and 24/7 automated lead response that books jobs straight into your calendar.',
    ogSiteName: 'LocalLift',
    keywords:
      'LocalLift, local service business marketing, home services website, Google Business Profile, local SEO, Google Maps SEO, AI search visibility, automated lead response, missed call text, appointment booking, contractor marketing, HVAC plumbing electrical landscaping',
    themeColor: '#2D6A4F',
  },
  '/local-lift/free-design': {
    title: 'Free Website Design for Your Local Business — LocalLift',
    description:
      'Tell LocalLift about your trade, service area, and brand style—we’ll prepare a free custom website design concept and follow up with next steps. No obligation.',
    ogSiteName: 'LocalLift',
    keywords:
      'free website design, local business website, contractor website mockup, home services branding, LocalLift, local SEO website',
    themeColor: '#2D6A4F',
  },
  '/local-lift/onboarding': {
    title: 'Client Guide — How LocalLift Works | LocalLift',
    description:
      'Plain-language onboarding for LocalLift clients: what we need from you, Google Calendar sharing, how SMS booking works, follow-ups, pricing overview, and your dashboard.',
    ogSiteName: 'LocalLift',
    keywords:
      'LocalLift onboarding, junk removal SMS, Google Calendar booking, client dashboard, LocalLift guide',
    themeColor: '#2D6A4F',
  },
  '/local-lift/junk-removal': {
    title: 'LocalLift for Junk Haulers — AI Lead Response That Books Jobs While You Work',
    description:
      'AI SMS lead response for junk removal: reply in under 60 seconds, qualify loads, quote with your pricing rules, and book into Google Calendar—built for haulers who are on the truck.',
    ogSiteName: 'LocalLift',
    keywords:
      'junk removal lead automation, hauler SMS AI, junk hauling quotes, LocalLift, Google Calendar booking, local junk removal marketing, missed text leads',
    themeColor: '#2D6A4F',
  },
  '/local-lift/demo': {
    title: 'See LocalLift in Action — Live SMS Demo | LocalLift',
    description:
      'Watch a sample text conversation: how LocalLift responds to inbound SMS, qualifies leads, and moves customers toward a booked job—then book a short call to talk about your business.',
    ogSiteName: 'LocalLift',
    keywords:
      'LocalLift demo, AI SMS booking, local business lead response, automated text reply, Google Calendar booking, home services',
    themeColor: '#2D6A4F',
  },
};

function normalizePathname(pathname: string): string {
  if (pathname === '/' || pathname === '') return '/';
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed === '' ? '/' : trimmed;
}

export function getSeoForPathname(pathname: string): SeoMeta {
  const key = normalizePathname(pathname.split('?')[0] ?? pathname);
  const found = ROUTES[key];
  if (found) return { ...DEFAULT, ...found };
  return DEFAULT;
}

/** Canonical and og:url base; prefers VITE_SITE_URL when set. */
export function getSiteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL;
  if (raw && /^https?:\/\//i.test(raw.trim())) {
    return raw.replace(/\/+$/, '');
  }
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return '';
}

export function buildCanonicalUrl(pathname: string): string {
  const origin = getSiteOrigin();
  const path = normalizePathname(pathname.split('?')[0] ?? pathname);
  if (path === '/') return `${origin}/`;
  return `${origin}${path}`;
}
