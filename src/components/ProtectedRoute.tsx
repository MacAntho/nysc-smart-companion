import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
interface GuardProps {
  children: React.ReactNode;
}
/**
 * AuthGuard only ensures the user is logged in.
 * Use this for the onboarding page itself.
 */
export function AuthGuard({ children }: GuardProps) {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
/**
 * OnboardingGuard ensures the user has completed the onboarding process.
 * Use this for all /app routes.
 */
export function OnboardingGuard({ children }: GuardProps) {
  const isOnboarded = useAppStore((s) => s.isOnboarded);
  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  return <>{children}</>;
}
/**
 * Combined guard for typical protected app routes.
 */
export function ProtectedRoute({ children }: GuardProps) {
  return (
    <AuthGuard>
      <OnboardingGuard>
        {children}
      </OnboardingGuard>
    </AuthGuard>
  );
}
export function AdminRoute({ children }: { children: React.ReactNode }) {
  const userRole = useAppStore((s) => s.userRole);
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (userRole !== 'admin') {
    return <Navigate to="/app" replace />;
  }
  return <>{children}</>;
}