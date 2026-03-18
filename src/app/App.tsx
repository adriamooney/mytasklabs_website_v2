import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import { Layout } from './components/Layout';
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
import { BookedAndBusyPage } from './pages/BookedAndBusyPage';
import { CustomPlanQuizPage } from './pages/CustomPlanQuizPage';
import { YourPlanPage } from './pages/YourPlanPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <HomePage /> },
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
