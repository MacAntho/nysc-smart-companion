import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { RouteErrorBoundary } from '@/components/RouteErrorBoundary';
import '@/index.css'
import { HomePage } from '@/pages/HomePage'
import { OnboardingPage } from '@/pages/OnboardingPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { JourneyMapPage } from '@/pages/JourneyMapPage'
import { KnowledgeBasePage } from '@/pages/KnowledgeBasePage'
import { StateGuidePage } from '@/pages/StateGuidePage'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { useAppStore } from '@/lib/store'
const queryClient = new QueryClient();
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isOnboarded = useAppStore(s => s.isOnboarded);
  if (!isOnboarded) return <Navigate to="/onboarding" replace />;
  return <>{children}</>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app",
    element: <ProtectedRoute><DashboardLayout><DashboardPage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app/journey",
    element: <ProtectedRoute><DashboardLayout><JourneyMapPage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app/knowledge",
    element: <ProtectedRoute><DashboardLayout><KnowledgeBasePage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app/state-guide",
    element: <ProtectedRoute><DashboardLayout><StateGuidePage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)