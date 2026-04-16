import type { GetServerSideProps } from 'next';
import Head from 'next/head';
import type { ReactElement } from 'react';
import { Footer } from '../src/app/components/Footer';
import { Header } from '../src/app/components/Header';
import { SalesFooter } from '../src/app/components/sales/SalesFooter';
import { SalesHeader } from '../src/app/components/sales/SalesHeader';
import { getSeoForPathname } from '../src/app/seo/seoConfig';
import type { SeoMeta } from '../src/app/seo/seoConfig';
import { AboutPage } from '../src/app/pages/AboutPage';
import { AIWorkflowAuditPage } from '../src/app/pages/AIWorkflowAuditPage';
import { AnalyticsPage } from '../src/app/pages/AnalyticsPage';
import { BookedAndBusyPage } from '../src/app/pages/BookedAndBusyPage';
import { ContactPage } from '../src/app/pages/ContactPage';
import { CustomPlanQuizPage } from '../src/app/pages/CustomPlanQuizPage';
import { HomePage } from '../src/app/pages/HomePage';
import { HomeServicesPage } from '../src/app/pages/HomeServicesPage';
import { LeadAutomationPage } from '../src/app/pages/LeadAutomationPage';
import { OperationsPage } from '../src/app/pages/OperationsPage';
import { PrivacyPage } from '../src/app/pages/PrivacyPage';
import { ProcessPage } from '../src/app/pages/ProcessPage';
import { ProfessionalServicesPage } from '../src/app/pages/ProfessionalServicesPage';
import { TeamCoordinationPage } from '../src/app/pages/TeamCoordinationPage';
import { TermsPage } from '../src/app/pages/TermsPage';
import { YourPlanPage } from '../src/app/pages/YourPlanPage';
import { LocalLiftClientOnboardingPage } from '../src/app/pages/local-lift/LocalLiftClientOnboardingPage';
import { LocalLiftDemoPage } from '../src/app/pages/local-lift/LocalLiftDemoPage';
import { LocalLiftFreeDesignPage } from '../src/app/pages/local-lift/LocalLiftFreeDesignPage';
import { LocalLiftJunkRemovalPage } from '../src/app/pages/local-lift/LocalLiftJunkRemovalPage';
import { LocalLiftPage } from '../src/app/pages/local-lift';

type Props = {
  pathname: string;
  seo: SeoMeta;
  found: boolean;
};

type Route = {
  component: () => ReactElement;
  shell: 'site' | 'sales' | 'local-lift';
};

const ROUTES: Record<string, Route> = {
  '/': { component: HomePage, shell: 'site' },
  '/about': { component: AboutPage, shell: 'site' },
  '/contact': { component: ContactPage, shell: 'site' },
  '/privacy': { component: PrivacyPage, shell: 'site' },
  '/terms': { component: TermsPage, shell: 'site' },
  '/ai-workflow-audit': { component: AIWorkflowAuditPage, shell: 'site' },
  '/lead-automation': { component: LeadAutomationPage, shell: 'site' },
  '/team-coordination': { component: TeamCoordinationPage, shell: 'site' },
  '/analytics': { component: AnalyticsPage, shell: 'site' },
  '/home-services': { component: HomeServicesPage, shell: 'site' },
  '/professional-services': { component: ProfessionalServicesPage, shell: 'site' },
  '/operations': { component: OperationsPage, shell: 'site' },
  '/process': { component: ProcessPage, shell: 'site' },
  '/booked-and-busy': { component: BookedAndBusyPage, shell: 'sales' },
  '/custom-plan': { component: CustomPlanQuizPage, shell: 'sales' },
  '/your-plan': { component: YourPlanPage, shell: 'sales' },
  '/local-lift': { component: LocalLiftPage, shell: 'local-lift' },
  '/local-lift/free-design': { component: LocalLiftFreeDesignPage, shell: 'local-lift' },
  '/local-lift/junk-removal': { component: LocalLiftJunkRemovalPage, shell: 'local-lift' },
  '/local-lift/onboarding': { component: LocalLiftClientOnboardingPage, shell: 'local-lift' },
  '/local-lift/demo': { component: LocalLiftDemoPage, shell: 'local-lift' },
};

function toCanonical(pathname: string): string {
  const origin = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, '') ?? '';
  if (!origin) return '';
  return pathname === '/' ? `${origin}/` : `${origin}${pathname}`;
}

export default function RoutePage({ pathname, seo, found }: Props) {
  const route = ROUTES[pathname];
  const canonical = toCanonical(pathname);

  if (!found || !route) {
    return (
      <>
        <Head>
          <title>Page Not Found | My Task Labs</title>
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <main className="min-h-screen bg-white flex items-center justify-center px-6">
          <p className="text-gray-600">Page not found.</p>
        </main>
      </>
    );
  }

  const PageComponent = route.component;

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content={seo.robots ?? 'index, follow'} />
        <meta name="theme-color" content={seo.themeColor ?? '#4f46e5'} />
        {seo.keywords ? <meta name="keywords" content={seo.keywords} /> : null}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:site_name" content={seo.ogSiteName ?? 'My Task Labs'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        {canonical ? (
          <>
            <meta property="og:url" content={canonical} />
            <link rel="canonical" href={canonical} />
          </>
        ) : null}
        {seo.ogImage ? (
          <>
            <meta property="og:image" content={seo.ogImage} />
            <meta name="twitter:image" content={seo.ogImage} />
          </>
        ) : null}
      </Head>

      {route.shell === 'site' ? (
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-1">
            <PageComponent />
          </main>
          <Footer />
        </div>
      ) : null}

      {route.shell === 'sales' ? (
        <div className="min-h-screen bg-white flex flex-col">
          <SalesHeader />
          <main className="flex-1">
            <PageComponent />
          </main>
          <SalesFooter />
        </div>
      ) : null}

      {route.shell === 'local-lift' ? <PageComponent /> : null}
    </>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async ({ params, res }) => {
  const slug = params?.slug;
  const parts = Array.isArray(slug) ? slug : [];
  const pathname = parts.length === 0 ? '/' : `/${parts.join('/')}`;
  const found = Boolean(ROUTES[pathname]);

  if (!found) {
    res.statusCode = 404;
  }

  return {
    props: {
      pathname,
      seo: getSeoForPathname(pathname),
      found,
    },
  };
};
