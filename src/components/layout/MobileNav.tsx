import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Map, BookOpen, MapPin, User, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
const NAV_ITEMS = [
  { label: 'Home', icon: LayoutDashboard, url: '/app' },
  { label: 'Journey', icon: Map, url: '/app/journey' },
  { label: 'Guide', icon: BookOpen, url: '/app/knowledge' },
  { label: 'States', icon: MapPin, url: '/app/state-guide' },
  { label: 'Me', icon: User, url: '/app/profile' },
];
export function MobileNav() {
  const location = useLocation();
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-20 bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 flex items-center justify-between z-50">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.url;
        return (
          <Link
            key={item.url}
            to={item.url}
            className={cn(
              "flex flex-col items-center justify-center gap-1.5 w-full h-full relative transition-colors",
              isActive ? "text-nysc-green-800" : "text-gray-400"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="mobile-nav-indicator"
                className="absolute -top-px left-1/2 -translate-x-1/2 w-8 h-1 bg-nysc-green-800 rounded-b-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <item.icon className={cn("w-6 h-6", isActive && "fill-nysc-green-50")} />
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}