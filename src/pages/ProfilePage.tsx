import React from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  User,
  ShieldCheck,
  MapPin,
  LogOut,
  Sparkles,
  Settings,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Mail,
  Loader2,
  Clock
} from 'lucide-react';
import type { NYSCStage } from '@shared/types';
import { formatDistanceToNow } from 'date-fns';
const STAGES: { value: NYSCStage; label: string }[] = [
  { value: 'prospective', label: 'Prospective Corper' },
  { value: 'mobilization', label: 'Mobilization' },
  { value: 'camp', label: 'Orientation Camp' },
  { value: 'ppa', label: 'Primary Assignment' },
  { value: 'pop', label: 'Winding Up / POP' },
];
const NIGERIAN_STATES = ['Lagos', 'Abuja', 'Oyo', 'Rivers', 'Kano', 'Kaduna', 'Enugu', 'Edo', 'Cross River', 'Delta', 'Anambra', 'Plateau', 'Kwara'];
export function ProfilePage() {
  const userEmail = useAppStore(s => s.userEmail);
  const userRole = useAppStore(s => s.userRole);
  const isPro = useAppStore(s => s.isPro);
  const stage = useAppStore(s => s.stage);
  const stateOfDeployment = useAppStore(s => s.stateOfDeployment);
  const completedTasks = useAppStore(s => s.completedTasks);
  const isSyncing = useAppStore(s => s.isSyncing);
  const lastSynced = useAppStore(s => s.lastSynced);
  const setStage = useAppStore(s => s.setStage);
  const setStateOfDeployment = useAppStore(s => s.setStateOfDeployment);
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
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="capitalize font-bold text-[10px] tracking-widest">{userRole}</Badge>
            {isPro && <Badge className="bg-nysc-gold text-white font-black text-[10px] tracking-widest uppercase">Pro Tier</Badge>}
            <Badge variant="outline" className="border-nysc-green-800/30 text-[9px] font-black uppercase flex items-center gap-1">
              {isSyncing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Clock className="w-3 h-3" />}
              {lastSynced ? `Synced ${formatDistanceToNow(lastSynced, { addSuffix: true })}` : 'Not Synced'}
            </Badge>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-100 shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2">
              <Settings className="w-4 h-4 text-nysc-green-800" /> Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Current State</label>
              <Select value={stateOfDeployment} onValueChange={setStateOfDeployment}>
                <SelectTrigger className="rounded-xl border-gray-100 bg-gray-50/50 h-12 font-bold">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map(st => <SelectItem key={st} value={st} className="font-semibold">{st}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Service Stage</label>
              <Select value={stage} onValueChange={(v) => setStage(v as NYSCStage)}>
                <SelectTrigger className="rounded-xl border-gray-100 bg-gray-50/50 h-12 font-bold">
                  <SelectValue placeholder="Select Stage" />
                </SelectTrigger>
                <SelectContent>
                  {STAGES.map(s => <SelectItem key={s.value} value={s.value} className="font-semibold">{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
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
            <div className="p-4 bg-gray-50 rounded-2xl flex items-center justify-between">
               <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Deployment Year</span>
               <span className="text-sm font-bold">2024 Batch C</span>
            </div>
          </CardContent>
        </Card>
      </div>
      {!isPro && (
        <Card className="bg-nysc-green-800 text-white border-none shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-display">
              <Sparkles className="w-6 h-6 text-nysc-gold" /> Upgrade to Pro Tier
            </CardTitle>
            <CardDescription className="text-nysc-green-100">Unlock advanced field data and personalized LGI tools.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Briefcase />, text: 'PPA Vacancy Database' },
                { icon: <Mail />, text: 'LGI Document Support' },
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