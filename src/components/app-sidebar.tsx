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
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div className="flex items-center gap-3 px-2 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-nysc-green-800 text-white">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex flex-col gap-0.5 leading-none group-data-[collapsible=icon]:hidden">
            <span className="font-bold text-nysc-green-900">Smart Companion</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Service Guide</span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Navigation</SidebarGroupLabel>
          <SidebarMenu>
            {NAV_ITEMS.map((item) => (
              <SidebarMenuItem key={item.url}>
                <SidebarMenuButton 
                  asChild 
                  isActive={location.pathname === item.url}
                  tooltip={item.title}
                >
                  <Link to={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Resource Links</SidebarGroupLabel>
          <SidebarMenu>
            {EXTERNAL_LINKS.map((link) => (
              <SidebarMenuItem key={link.url}>
                <SidebarMenuButton asChild tooltip={link.title}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink />
                    <span>{link.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="px-4 py-4 text-[10px] text-muted-foreground group-data-[collapsible=icon]:hidden">
          Official NYSC Rules Apply. v1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}