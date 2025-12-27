import '@/lib/errorReporter';
import { enableMapSet } from "immer";
enableMapSet();
import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
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
import DeadlineTrackerPage from '@/pages/DeadlineTrackerPage'
import { ProtectedRoute, AdminRoute, AuthGuard } from '@/components/ProtectedRoute'
const queryClient = new QueryClient();
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
    element: <AuthGuard><OnboardingPage /></AuthGuard>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <DashboardLayout>
          <Outlet />
        </DashboardLayout>
      </ProtectedRoute>
    ),
    errorElement: <RouteErrorBoundary />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "journey",
        element: <JourneyMapPage />,
      },
      {
        path: "knowledge",
        element: <KnowledgeBasePage />,
      },
      {
        path: "deadlines",
        element: <DeadlineTrackerPage />,
      },
      {
        path: "state-guide",
        element: <StateGuidePage />,
      },
      {
        path: "cds",
        element: <CDSToolkitPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "admin",
        element: <AdminRoute><AdminPage /></AdminRoute>,
      },
    ],
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