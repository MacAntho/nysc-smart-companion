import React from "react";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Link, useLocation } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/sonner";
export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset className="bg-white nysc-adire-pattern">
        <header className="flex h-16 shrink-0 items-center justify-between border-b px-6 bg-white/80 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <SidebarTrigger className="hover:text-nysc-green-800 transition-colors" />
            <div className="h-4 w-px bg-gray-200" />
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/app" className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground hover:text-nysc-green-800">Command Center</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {pathParts.slice(1).map((part, i) => (
                  <React.Fragment key={part}>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize font-bold text-[10px] uppercase tracking-widest text-nysc-green-800">
                        {part.replace('-', ' ')}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle className="static" />
          </div>
        </header>
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ 
                duration: 0.35, 
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 
              }}
              className="py-8 md:py-12"
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Toaster position="top-right" richColors expand={true} />
      </SidebarInset>
    </SidebarProvider>
  );
}