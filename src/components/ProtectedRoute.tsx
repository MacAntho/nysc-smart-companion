import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated) {
    return null;
  }
  return <>{children}</>;
}
/**
 * OnboardingGuard ensures the user has completed the onboarding process.
 * Use this for all /app routes.
 */
export function OnboardingGuard({ children }: GuardProps) {
  const isOnboarded = useAppStore((s) => s.isOnboarded);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isOnboarded) {
      navigate('/onboarding', { replace: true });
    }
  }, [isOnboarded, navigate]);

  if (!isOnboarded) {
    return null;
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
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { replace: true });
    } else if (userRole !== 'admin') {
      navigate('/app', { replace: true });
    }
  }, [isAuthenticated, userRole, navigate]);

  if (!isAuthenticated || userRole !== 'admin') {
    return null;
  }
  return <>{children}</>;
}