import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { Layout } from './components/Layout';
import { GoogleAnalyticsTracker } from './components/GoogleAnalyticsTracker';
import { MetaPixelTracker } from './components/MetaPixelTracker';
import { RedditPixelTracker } from './components/RedditPixelTracker';
import { SalesLayout } from './components/sales/SalesLayout';
import { HomePage } from './pages/HomePage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { AIWorkflowAuditPage } from './pages/AIWorkflowAuditPage';
import { LeadAutomationPage } from './pages/LeadAutomationPage';
import { TeamCoordinationPage } from './pages/TeamCoordinationPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { HomeServicesPage } from './pages/HomeServicesPage';
import { ProfessionalServicesPage } from './pages/ProfessionalServicesPage';
import { OperationsPage } from './pages/OperationsPage';
import { ProcessPage } from './pages/ProcessPage';
import { AboutPage } from './pages/AboutPage';
import { BookedAndBusyPage } from './pages/BookedAndBusyPage';
import { CustomPlanQuizPage } from './pages/CustomPlanQuizPage';
import { YourPlanPage } from './pages/YourPlanPage';
import { ScrollToTop } from './components/ScrollToTop';
import { LocalLiftPage } from './pages/local-lift';
import { LocalLiftFreeDesignPage } from './pages/local-lift/LocalLiftFreeDesignPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <GoogleAnalyticsTracker />
        <MetaPixelTracker />
        <RedditPixelTracker />
        <Outlet />
      </>
    ),
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
          { path: 'privacy', element: <PrivacyPage /> },
          { path: 'terms', element: <TermsPage /> },
          { path: 'ai-workflow-audit', element: <AIWorkflowAuditPage /> },
          { path: 'lead-automation', element: <LeadAutomationPage /> },
          { path: 'team-coordination', element: <TeamCoordinationPage /> },
          { path: 'analytics', element: <AnalyticsPage /> },
          { path: 'home-services', element: <HomeServicesPage /> },
          { path: 'professional-services', element: <ProfessionalServicesPage /> },
          { path: 'operations', element: <OperationsPage /> },
          { path: 'process', element: <ProcessPage /> },
        ],
      },
      {
        path: 'booked-and-busy',
        element: <SalesLayout />,
        children: [
          { index: true, element: <BookedAndBusyPage /> },
        ],
      },
      {
        path: 'custom-plan',
        element: <SalesLayout />,
        children: [
          { index: true, element: <CustomPlanQuizPage /> },
        ],
      },
      {
        path: 'your-plan',
        element: <SalesLayout />,
        children: [
          { index: true, element: <YourPlanPage /> },
        ],
      },
      {
        path: 'local-lift',
        element: (
          <>
            <ScrollToTop />
            <Outlet />
          </>
        ),
        children: [
          { index: true, element: <LocalLiftPage /> },
          { path: 'free-design', element: <LocalLiftFreeDesignPage /> },
        ],
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
