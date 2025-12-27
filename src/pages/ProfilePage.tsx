import React from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  ShieldCheck, 
  MapPin, 
  LogOut, 
  Sparkles, 
  Settings, 
  Briefcase, 
  CheckCircle,
  ChevronRight,
  TrendingUp,
  Mail
} from 'lucide-react';
import { toast } from 'sonner';
export function ProfilePage() {
  const userEmail = useAppStore(s => s.userEmail);
  const userRole = useAppStore(s => s.userRole);
  const isPro = useAppStore(s => s.isPro);
  const stage = useAppStore(s => s.stage);
  const stateOfDeployment = useAppStore(s => s.stateOfDeployment);
  const completedTasks = useAppStore(s => s.completedTasks);
  const logout = useAppStore(s => s.logout);
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col items-center text-center space-y-4">
        <div className="relative">
          <div className="w-24 h-24 rounded-full bg-nysc-green-50 border-4 border-white shadow-xl flex items-center justify-center text-nysc-green-800">
            <User className="w-12 h-12" />
          </div>
          {isPro && (
            <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-nysc-gold border-2 border-white flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          )}
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-display font-bold text-gray-900">{userEmail}</h1>
          <div className="flex items-center justify-center gap-2">
            <Badge variant="secondary" className="capitalize font-bold text-[10px] tracking-widest">{userRole}</Badge>
            {isPro && <Badge className="bg-nysc-gold text-white font-black text-[10px] tracking-widest uppercase">Pro Tier</Badge>}
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <MapPin className="w-4 h-4 text-nysc-green-800" /> Service Location
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">State</p>
                <p className="font-bold text-lg">{stateOfDeployment || 'Not Set'}</p>
              </div>
              <MapPin className="text-nysc-green-800/20 w-8 h-8" />
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-2xl">
              <div>
                <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Batch</p>
                <p className="font-bold text-lg">2024 Batch C</p>
              </div>
              <ShieldCheck className="text-nysc-green-800/20 w-8 h-8" />
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-nysc-green-800">
              <TrendingUp className="w-4 h-4" /> Mastery Progress
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                <span>Journey Tasks</span>
                <span>{completedTasks.length} Done</span>
              </div>
              <Progress value={Math.min(100, (completedTasks.length / 15) * 100)} className="h-2 bg-gray-100" />
            </div>
            <div className="p-4 border border-nysc-green-100 bg-nysc-green-50/50 rounded-2xl">
              <p className="text-[10px] font-black uppercase tracking-widest text-nysc-green-800 mb-1">Current Milestone</p>
              <p className="text-sm font-bold capitalize">{stage.replace('-', ' ')} Phase</p>
            </div>
          </CardContent>
        </Card>
      </div>
      {!isPro && (
        <Card className="bg-nysc-green-800 text-white border-none shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-display">
              <Sparkles className="w-6 h-6 text-nysc-gold" /> Unlock Pro Tier Intelligence
            </CardTitle>
            <CardDescription className="text-nysc-green-100">Get advanced tools to navigate your service year like an expert.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Briefcase />, text: 'PPA Vacancy Database' },
                { icon: <Mail />, text: '1-on-1 LGI Consultation' },
                { icon: <Settings />, text: 'Custom Budget Planner' },
                { icon: <ShieldCheck />, text: 'Bye-law Legal Support' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-bold bg-white/10 p-3 rounded-xl border border-white/10">
                  <span className="text-nysc-gold w-5 h-5">{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 font-black py-7 text-lg rounded-2xl shadow-xl transition-all active:scale-95">
              UPGRADE FOR ₦2,500 <ChevronRight className="ml-2 w-6 h-6" />
            </Button>
          </CardFooter>
        </Card>
      )}
      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" className="flex-1 h-14 border-gray-200 font-bold rounded-2xl">
          <Settings className="mr-2 w-5 h-5" /> Settings
        </Button>
        <Button variant="outline" className="flex-1 h-14 border-destructive text-destructive hover:bg-destructive/5 font-bold rounded-2xl" onClick={logout}>
          <LogOut className="mr-2 w-5 h-5" /> Logout Session
        </Button>
      </div>
      <p className="text-center text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 pb-8">
        NYSC Smart Companion • Built for Excellence
      </p>
    </div>
  );
}