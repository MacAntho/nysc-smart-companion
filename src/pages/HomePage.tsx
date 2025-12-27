import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Compass, BookOpen, Bell, ArrowRight } from 'lucide-react';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <nav className="border-b bg-white/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-nysc-green-800 rounded flex items-center justify-center">
              <ShieldCheck className="text-white w-5 h-5" />
            </div>
            <span className="font-display font-bold text-xl text-nysc-green-900">NYSC Smart Companion</span>
          </div>
          <Link to="/onboarding">
            <Button className="bg-nysc-green-800 hover:bg-nysc-green-900">Start Your Journey</Button>
          </Link>
        </div>
      </nav>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-nysc-green-50 opacity-40 -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-nysc-green-900 leading-tight tracking-tight">
            Survive & Thrive in Your <br />
            <span className="text-nysc-gold">Service Year</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            A comprehensive, timeline-based guide and toolkit for Nigerian Youth Corps members. From Mobilization to POP, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/onboarding">
              <Button size="lg" className="h-14 px-8 text-lg bg-nysc-green-800 hover:bg-nysc-green-900 shadow-lg">
                Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-nysc-green-800 text-nysc-green-800">
              Browse Guides
            </Button>
          </div>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Compass className="w-6 h-6 text-nysc-green-800" />} 
              title="Journey Map" 
              desc="Step-by-step roadmap from school to final certificate."
            />
            <FeatureCard 
              icon={<ShieldCheck className="w-6 h-6 text-nysc-green-800" />} 
              title="Verified Rules" 
              desc="Official NYSC regulations explained in simple English."
            />
            <FeatureCard 
              icon={<BookOpen className="w-6 h-6 text-nysc-green-800" />} 
              title="State Insights" 
              desc="Exclusive intel on camp conditions and PPA life."
            />
            <FeatureCard 
              icon={<Bell className="w-6 h-6 text-nysc-green-800" />} 
              title="Deadline Radar" 
              desc="Never miss registration or clearance deadlines again."
            />
          </div>
        </div>
      </section>
      <footer className="mt-auto py-12 border-t bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} NYSC Smart Companion. Developed for the next generation of leaders.</p>
        </div>
      </footer>
      <Toaster richColors />
    </div>
  );
}
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow space-y-4">
      <div className="w-12 h-12 rounded-xl bg-nysc-green-50 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="font-display font-bold text-lg text-nysc-green-900">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}