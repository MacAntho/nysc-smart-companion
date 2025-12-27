import React, { useEffect } from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
import { MobileNav } from "./MobileNav";
import { useAppStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ShieldCheck } from "lucide-react";
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  const isPro = useAppStore(s => s.isPro);
  const userRole = useAppStore(s => s.userRole);
  const loadProfile = useAppStore(s => s.loadProfile);
  const isInitialized = useAppStore(s => s.isInitialized);
  // Global Profile Hydration: Ensure cloud data is synced regardless of entry route
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="bg-white nysc-adire-pattern min-h-screen flex flex-col relative">
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 bg-white/80 backdrop-blur-md sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:text-nysc-green-800 transition-colors" />
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/app" className="font-bold text-[9px] uppercase tracking-[0.2em] text-muted-foreground hover:text-nysc-green-800">Command</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathParts.slice(1).map((part, i) => (
                  <React.Fragment key={part}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize font-bold text-[9px] uppercase tracking-[0.2em] text-nysc-green-800">
                        {part.replace('-', ' ')}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
            {/* Mobile Title */}
            <div className="md:hidden flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-nysc-green-800" />
              <span className="font-display font-bold text-xs uppercase tracking-widest text-nysc-green-900 truncate max-w-[120px]">
                {pathParts[pathParts.length - 1]?.replace('-', ' ') || 'Dashboard'}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isPro && (
              <Badge className="bg-nysc-gold text-white font-black text-[8px] uppercase tracking-widest hidden sm:flex items-center gap-1 border-none">
                <Sparkles className="w-3 h-3" /> PRO
              </Badge>
            )}
            {userRole === 'admin' && (
              <Link to="/app/admin" className="hidden sm:block">
                <Badge variant="outline" className="border-nysc-green-800 text-nysc-green-800 text-[8px] font-black uppercase tracking-widest">
                  Admin
                </Badge>
              </Link>
            )}
            <ThemeToggle className="static" />
          </div>
        </header>
        <main className="flex-1 pb-24 md:pb-12 overflow-x-hidden">
          <AnimatePresence mode="wait">
            {!isInitialized ? (
              <div className="flex items-center justify-center min-h-[60vh]">
                <ShieldCheck className="w-12 h-12 text-nysc-green-800 animate-pulse" />
              </div>
            ) : (
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.3,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="py-6 md:py-10"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <MobileNav />
        <Toaster position="top-right" richColors closeButton />
      </SidebarInset>
    </SidebarProvider>
  );
}