import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Compass, BookOpen, Bell, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
export function HomePage() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <nav className="border-b bg-white/90 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-nysc-green-800 rounded-xl flex items-center justify-center shadow-lg shadow-nysc-green-800/20">
              <ShieldCheck className="text-white w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl text-gray-900 tracking-tight">NYSC <span className="text-nysc-green-800">Smart Companion</span></span>
          </div>
          <Link to="/onboarding" className="hidden sm:block">
            <Button className="bg-nysc-green-800 hover:bg-nysc-green-900 px-6 font-bold rounded-xl shadow-lg transition-all active:scale-95">
              Launch Dashboard
            </Button>
          </Link>
        </div>
      </nav>
      <main className="flex-1">
        <section className="relative py-24 md:py-40 overflow-hidden bg-gray-50/50 nysc-adire-pattern">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nysc-green-50 border border-nysc-green-100 text-nysc-green-800 font-black text-[10px] uppercase tracking-[0.2em] mb-4">
              <Sparkles className="w-4 h-4" /> Trusted by Thousands of Corps Members
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tighter">
              Serve with <br />
              <span className="text-nysc-green-800 underline decoration-nysc-gold underline-offset-8">Intelligence.</span>
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium leading-relaxed">
              The only operational roadmap and survival toolkit you need for your service year. Verified, real-time, and mobile-ready.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link to="/onboarding">
                <Button size="lg" className="h-16 px-10 text-xl bg-nysc-green-800 hover:bg-nysc-green-900 shadow-2xl shadow-nysc-green-800/30 rounded-2xl font-bold group">
                  Start Your Journey <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xl border-2 border-gray-200 font-bold rounded-2xl bg-white hover:bg-gray-50">
                Browse Official Rules
              </Button>
            </div>
            <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto opacity-60">
              {['Official Guidelines', 'Camp Insights', 'PPA Database', 'CDS Support'].map(text => (
                <div key={text} className="flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest text-gray-500">
                  <CheckCircle className="w-4 h-4 text-nysc-green-800" /> {text}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20 space-y-4">
              <h2 className="text-4xl font-display font-bold text-gray-900 tracking-tight">Core Operational Tools</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">Everything we offer is designed to make your 365 days productive and stress-free.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Compass className="w-7 h-7 text-white" />}
                title="Journey Map"
                desc="A precise vertical timeline tracking every phase from Senate list to the final Discharge certificate."
              />
              <FeatureCard
                icon={<ShieldCheck className="w-7 h-7 text-white" />}
                title="Verified Rules"
                desc="NYSC Bye-laws explained in plain language. Know your rights and avoid unnecessary disciplinary issues."
              />
              <FeatureCard
                icon={<BookOpen className="w-7 h-7 text-white" />}
                title="State Intelligence"
                desc="Get the real story on camp conditions, cost of living, and PPA realities for all 36 Nigerian states."
              />
              <FeatureCard
                icon={<Bell className="w-7 h-7 text-white" />}
                title="Deadline Radar"
                desc="Never miss a registration date, monthly clearance signature, or winding-up briefing again."
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <div className="w-8 h-8 bg-nysc-green-800 rounded-lg flex items-center justify-center">
                  <ShieldCheck className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">Smart Companion</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs font-medium">Empowering the next generation of Nigerian leaders with digital tools for service.</p>
            </div>
            <div className="flex gap-12 text-sm font-bold uppercase tracking-widest text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 text-center text-gray-500 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} NYSC Smart Companion. Built with Patriotism.
          </div>
        </div>
      </footer>
    </div>
  );
}
function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="group p-8 rounded-3xl border border-gray-100 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 space-y-6">
      <div className="w-14 h-14 rounded-2xl bg-nysc-green-800 flex items-center justify-center shadow-lg shadow-nysc-green-800/30 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="font-display font-bold text-xl text-gray-900 tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed font-medium text-sm">{desc}</p>
      </div>
    </div>
  );
}