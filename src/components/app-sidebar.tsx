import React from "react";
import {
  LayoutDashboard,
  Map,
  BookOpen,
  MapPin,
  Briefcase,
  ExternalLink,
  ShieldCheck,
  Bell
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarSeparator,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
const NAV_ITEMS = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/app" },
  { title: "Journey Map", icon: Map, url: "/app/journey" },
  { title: "Knowledge Base", icon: BookOpen, url: "/app/knowledge" },
  { title: "Deadline Radar", icon: Bell, url: "/app/deadlines" },
  { title: "State Guide", icon: MapPin, url: "/app/state-guide" },
  { title: "CDS Toolkit", icon: Briefcase, url: "/app/cds" },
];
const EXTERNAL_LINKS = [
  { title: "NYSC Portal", url: "https://portal.nysc.org.ng" },
  { title: "Official Website", url: "https://nysc.gov.ng" },
];
export function AppSidebar(): JSX.Element {
  const location = useLocation();
  const isLinkActive = (url: string) => {
    // Exact match for dashboard
    if (url === '/app' && location.pathname === '/app') return true;
    // Starts with match for others to handle sub-navigation highlighting
    if (url !== '/app' && location.pathname.startsWith(url)) return true;
    return false;
  };
  return (
    <Sidebar collapsible="icon" className="border-r border-gray-100">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-nysc-green-800 text-white shadow-lg shadow-nysc-green-800/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-nysc-green-900 tracking-tight">Smart Companion</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-black">Service Guide</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-black uppercase tracking-widest px-4 mb-2">Main Navigation</SidebarGroupLabel>
          <SidebarMenu className="px-2 space-y-1">
            {NAV_ITEMS.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton
                  asChild
                  isActive={isLinkActive(item.url)}
                  tooltip={item.title}
                  className="rounded-xl h-10 transition-all duration-200"
                >
                  <Link to={item.url} className="flex items-center gap-3">
                    <item.icon className="w-4 h-4" />
                    <span className="font-bold text-xs tracking-tight">{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator className="mx-4 opacity-50" />
        <SidebarGroup>
          <SidebarGroupLabel className="text-[10px] font-black uppercase tracking-widest px-4 mb-2">Resource Links</SidebarGroupLabel>
          <SidebarMenu className="px-2 space-y-1">
            {EXTERNAL_LINKS.map((link) => (
              <SidebarMenuItem key={link.url}>
                <SidebarMenuButton asChild tooltip={link.title} className="rounded-xl h-10">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-bold text-xs tracking-tight">{link.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-gray-50">
        <div className="px-4 py-6 text-[10px] text-muted-foreground font-black uppercase tracking-widest group-data-[collapsible=icon]:hidden opacity-60">
          NYSC Rules Apply. v1.2.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}