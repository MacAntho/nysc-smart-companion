import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
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
import { CDSToolkitPage } from '@/pages/CDSToolkitPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { AdminPage } from '@/pages/AdminPage'
import { AuthPage } from '@/pages/AuthPage'
import { DashboardLayout } from '@/components/layout/DashboardLayout'
import { ProtectedRoute } from '@/components/ProtectedRoute'
import { useAppStore } from '@/lib/store';
const queryClient = new QueryClient();
// Admin Route Guard
function AdminRoute({ children }: { children: React.ReactNode }) {
  const userRole = useAppStore(s => s.userRole);
  const isAuthenticated = useAppStore(s => s.isAuthenticated);
  if (!isAuthenticated || userRole !== 'admin') return <Navigate to="/app" replace />;
  return <>{children}</>;
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/login",
    element: <AuthPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/onboarding",
    element: <ProtectedRoute><OnboardingPage /></ProtectedRoute>,
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
  {
    path: "/app/cds",
    element: <ProtectedRoute><DashboardLayout><CDSToolkitPage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app/profile",
    element: <ProtectedRoute><DashboardLayout><ProfilePage /></DashboardLayout></ProtectedRoute>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app/admin",
    element: <AdminRoute><DashboardLayout><AdminPage /></DashboardLayout></AdminRoute>,
    errorElement: <RouteErrorBoundary />,
  },
]);
const container = document.getElementById('root')!;
const rootKey = '__reactRootContainer';
let root: Root;
if ((window as any)[rootKey]) {
  root = (window as any)[rootKey];
} else {
  root = createRoot(container);
  (window as any)[rootKey] = root;
}
root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </QueryClientProvider>
  </StrictMode>,
)