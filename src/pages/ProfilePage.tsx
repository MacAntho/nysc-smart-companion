import React, { useEffect } from 'react';
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
  Clock,
  RefreshCw,
  Trash2
} from 'lucide-react';
import type { NYSCStage } from '@shared/types';
import { formatDistanceToNow } from 'date-fns';
import { JOURNEY_STAGES, NIGERIAN_STATES } from '@/lib/mock-content';
import { toast } from 'sonner';
const STAGES: { value: NYSCStage; label: string }[] = [
  { value: 'prospective', label: 'Prospective Corper' },
  { value: 'mobilization', label: 'Mobilization' },
  { value: 'camp', label: 'Orientation Camp' },
  { value: 'ppa', label: 'Primary Assignment' },
  { value: 'cds', label: 'CDS Phase' },
  { value: 'pop', label: 'Winding Up / POP' },
];
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
  const loadProfile = useAppStore(s => s.loadProfile);
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  const handleForceSync = async () => {
    await loadProfile();
    toast.success('System Intelligence Synchronized');
  };
  const handleClearLocal = () => {
    toast.info('Development Tool: Local storage cleared. Logging out.', {
        description: 'Testing environment reset triggered.'
    });
    setTimeout(() => logout(), 1000);
  };
  const totalTasks = JOURNEY_STAGES.reduce((acc, s) => acc + s.tasks.length, 0);
  const masteryProgress = totalTasks > 0 ? (completedTasks.length / totalTasks) * 100 : 0;
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
          <h1 className="text-2xl font-display font-bold text-gray-900 tracking-tight">{userEmail}</h1>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="capitalize font-bold text-[10px] tracking-widest">{userRole}</Badge>
            {isPro && <Badge className="bg-nysc-gold text-white font-black text-[10px] tracking-widest uppercase">Pro Tier</Badge>}
            <Badge variant="outline" className="border-nysc-green-800/30 text-[9px] font-black uppercase flex items-center gap-1 bg-white">
              {isSyncing ? <Loader2 className="w-3 h-3 animate-spin" /> : <Clock className="w-3 h-3" />}
              {lastSynced ? `Last Sync: ${formatDistanceToNow(lastSynced, { addSuffix: true })}` : 'First Deployment'}
            </Badge>
          </div>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-gray-100 shadow-sm rounded-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-muted-foreground">
              <Settings className="w-4 h-4 text-nysc-green-800" /> System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">Deployment State</label>
              <Select value={stateOfDeployment} onValueChange={setStateOfDeployment}>
                <SelectTrigger className="rounded-xl border-gray-100 bg-gray-50/50 h-12 font-bold focus:ring-nysc-green-800">
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map(st => <SelectItem key={st} value={st} className="font-semibold">{st}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground opacity-60">Journey Phase</label>
              <Select value={stage} onValueChange={(v) => setStage(v as NYSCStage)}>
                <SelectTrigger className="rounded-xl border-gray-100 bg-gray-50/50 h-12 font-bold focus:ring-nysc-green-800">
                  <SelectValue placeholder="Select Stage" />
                </SelectTrigger>
                <SelectContent>
                  {STAGES.map(s => <SelectItem key={s.value} value={s.value} className="font-semibold">{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        <Card className="border-gray-100 shadow-sm rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 text-nysc-green-800">
              <TrendingUp className="w-4 h-4" /> Mastery Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                <span>Annual Milestones</span>
                <span className="text-nysc-green-800">{completedTasks.length} / {totalTasks} Completed</span>
              </div>
              <Progress value={masteryProgress} className="h-2.5 bg-gray-100" />
            </div>
            <div className="p-4 border-2 border-nysc-green-100 bg-nysc-green-50/30 rounded-2xl relative overflow-hidden group">
              <Sparkles className="absolute top-2 right-2 w-4 h-4 text-nysc-gold opacity-40 group-hover:scale-125 transition-transform" />
              <p className="text-[9px] font-black uppercase tracking-widest text-nysc-green-800 mb-1">Active Assignment</p>
              <p className="text-base font-bold text-nysc-green-900 capitalize tracking-tight">{stage.replace('-', ' ')} Stage</p>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button 
            variant="outline" 
            className="h-14 border-gray-200 rounded-2xl font-bold bg-white hover:bg-nysc-green-50 hover:text-nysc-green-800 transition-all active:scale-95"
            onClick={handleForceSync}
            disabled={isSyncing}
        >
          {isSyncing ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <RefreshCw className="w-4 h-4 mr-2" />}
          Force Cloud Sync
        </Button>
        <Button 
            variant="outline" 
            className="h-14 border-gray-200 rounded-2xl font-bold bg-white text-muted-foreground hover:bg-red-50 hover:text-destructive hover:border-destructive/20 transition-all active:scale-95"
            onClick={handleClearLocal}
        >
          <Trash2 className="w-4 h-4 mr-2" />
          Clear Local Cache
        </Button>
        <Button 
            variant="outline" 
            className="h-14 border-destructive text-destructive hover:bg-destructive/5 font-bold rounded-2xl transition-all active:scale-95" 
            onClick={logout}
        >
          <LogOut className="mr-2 w-5 h-5" /> Logout Session
        </Button>
      </div>
      {!isPro && (
        <Card className="bg-nysc-green-800 text-white border-none shadow-2xl relative overflow-hidden group rounded-3xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-2xl font-display font-bold">
              <Sparkles className="w-7 h-7 text-nysc-gold fill-nysc-gold" /> Become a Pro Member
            </CardTitle>
            <CardDescription className="text-nysc-green-100 text-base font-medium">Unlock verified PPA databases and premium LGI support.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { icon: <Briefcase className="w-5 h-5" />, text: 'Exclusive PPA Openings' },
                { icon: <Mail className="w-5 h-5" />, text: 'Direct LGI Document Templates' },
                { icon: <ShieldCheck className="w-5 h-5" />, text: 'Priority Security Alerts' },
                { icon: <TrendingUp className="w-5 h-5" />, text: 'Advanced Career Toolkit' },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-xs font-bold bg-white/10 p-3.5 rounded-xl border border-white/10">
                  <span className="text-nysc-gold shrink-0">{item.icon}</span> {item.text}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="pt-4">
            <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 font-black py-8 text-xl rounded-2xl shadow-xl transition-all active:scale-[0.98]">
              UPGRADE FOR ₦2,500 <ChevronRight className="ml-2 w-7 h-7" />
            </Button>
          </CardFooter>
        </Card>
      )}
      <div className="text-center pt-8 border-t border-gray-100">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400">
          NYSC Smart Companion • System Core v1.2.0-Production
        </p>
      </div>
    </div>
  );
}