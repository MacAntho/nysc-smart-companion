import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
interface ProtectedRouteProps {
  children: React.ReactNode;
}
export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useAppStore((s) => s.isAuthenticated);
  const isOnboarded = useAppStore((s) => s.isOnboarded);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  if (!isOnboarded) {
    return <Navigate to="/onboarding" replace />;
  }
  return <>{children}</>;
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