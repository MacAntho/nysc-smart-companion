import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, MapPin, BookOpen, LayoutList, Sparkles, Lock, ArrowRight, AlertTriangle, ShieldAlert, Fingerprint } from 'lucide-react';
import { JOURNEY_STAGES, DEADLINES, KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, differenceInDays, parseISO } from 'date-fns';
import { cn } from '@/lib/utils';
type PriorityRisk = 'high' | 'medium' | 'low';
export function DashboardPage() {
  const stageId = useAppStore(s => s.stage);
  const stateName = useAppStore(s => s.stateOfDeployment);
  const completedTasks = useAppStore(s => s.completedTasks);
  const readArticles = useAppStore(s => s.readArticles);
  const isPro = useAppStore(s => s.isPro);
  const toggleTask = useAppStore(s => s.toggleTask);
  const isSyncing = useAppStore(s => s.isSyncing);
  const lastSynced = useAppStore(s => s.lastSynced);
  const loadProfile = useAppStore(s => s.loadProfile);
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  const currentStage = JOURNEY_STAGES.find(s => s.id === stageId);
  const stageTasks = currentStage?.tasks || [];
  const completedCount = stageTasks.filter(t => completedTasks.includes(t.id)).length;
  const progressPercent = stageTasks.length > 0 ? (completedCount / stageTasks.length) * 100 : 0;
  const readPercent = (readArticles.length / KNOWLEDGE_ARTICLES.length) * 100;
  const relevantDeadlines = DEADLINES.filter(d => d.stage === stageId);
  const getPriorityContent = (): { title: string; desc: string; risk: PriorityRisk } => {
    switch(stageId) {
      case 'prospective':
        return {
          title: 'Exemption & Exclusion Guide',
          desc: 'Determine if you are eligible for national service or require an exemption certificate.',
          risk: 'low'
        };
      case 'mobilization':
        return {
          title: 'Official Registration Guide',
          desc: 'Critical step-by-step instructions for your current registration stage.',
          risk: 'medium'
        };
      case 'camp':
        return {
          title: 'Surviving the 21-Day Orientation Camp',
          desc: 'The definitive survival toolkit: Accommodation, food, health, and security tips for your orientation period.',
          risk: 'medium'
        };
      case 'ppa':
        return {
          title: 'PPA Rejection & Reposting',
          desc: 'HIGH ALERT: Learn the mandatory steps if your PPA rejects you to avoid service extension.',
          risk: 'high'
        };
      case 'cds':
        return {
          title: 'CDS Project Lifecycle',
          desc: 'Navigate the approval, implementation, and documentation of your legacy community project.',
          risk: 'low'
        };
      case 'pop':
        return {
          title: 'Final Winding-Up Guide',
          desc: 'Crucial steps for your final PPA clearance and physical certificate collection.',
          risk: 'high'
        };
      default:
        return { title: 'Essential Knowledge', desc: 'Browse the verified knowledge base for official rules.', risk: 'low' };
    }
  };
  const { title: priorityTitle, desc: priorityDesc, risk } = getPriorityContent();
  const priorityLink = stageId === 'cds' ? '/app/cds' : '/app/knowledge';
  const riskStyles: Record<PriorityRisk, string> = {
    high: "border-destructive/40 bg-red-50/50 shadow-destructive/10",
    medium: "border-nysc-gold border-2 bg-amber-50/50 shadow-nysc-gold/10",
    low: "border-nysc-green-100 bg-nysc-green-50/20 shadow-nysc-green-100/10"
  };
  const badgeStyles: Record<PriorityRisk, string> = {
    high: "bg-destructive text-white animate-pulse",
    medium: "bg-nysc-gold text-white",
    low: "bg-nysc-green-800 text-white"
  };
  const safeRisk = risk as keyof typeof riskStyles;
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">Corper Command</h1>
            {isPro && (
              <Badge className="bg-nysc-gold text-white font-black text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full">Pro</Badge>
            )}
          </div>
          <p className="text-muted-foreground font-medium">Serving the Nation with Digital Intelligence.</p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-3 text-[11px] font-semibold px-4 py-2 rounded-full bg-white border shadow-sm">
            {isSyncing ? (
              <><div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" /><span className="text-muted-foreground uppercase tracking-wider">Syncing...</span></>
            ) : (
              <><div className="h-2 w-2 rounded-full bg-nysc-green-800" /><span className="text-muted-foreground uppercase tracking-wider">Cloud Synced {lastSynced ? formatDistanceToNow(lastSynced, { addSuffix: true }) : 'now'}</span></>
            )}
          </div>
          <span className="text-[9px] font-black text-nysc-green-800 uppercase tracking-widest opacity-40 px-2 flex items-center gap-1">
            <Fingerprint className="w-3 h-3" /> Digital Check-in Recommended Daily
          </span>
        </div>
      </header>
      {priorityTitle && (
        <Card className={cn("border-2 shadow-lg overflow-hidden relative group transition-all duration-300", riskStyles[safeRisk] || riskStyles.low)}>
          <div className="absolute top-0 right-0 p-4">
             {risk === 'high' ? (
               <ShieldAlert className="w-12 h-12 text-destructive opacity-20 group-hover:scale-125 transition-transform duration-500" />
             ) : (
               <Sparkles className="w-12 h-12 text-nysc-gold opacity-20 group-hover:scale-125 transition-transform duration-500" />
             )}
          </div>
          <CardHeader className="pb-2">
            <Badge className={cn("w-fit mb-2 uppercase text-[9px] font-black tracking-widest flex items-center gap-1", badgeStyles[safeRisk] || badgeStyles.low)}>
              {risk === 'high' && <AlertTriangle className="w-3 h-3" />}
              {risk === 'high' ? 'High Risk Action Required' : 'Priority Phase Resource'}
            </Badge>
            <CardTitle className={cn("text-xl font-display", risk === 'high' ? "text-destructive" : "text-amber-900")}>{priorityTitle}</CardTitle>
            <CardDescription className={cn("font-medium text-sm", risk === 'high' ? "text-red-800" : "text-amber-800")}>{priorityDesc}</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <Link to={priorityLink}>
              <Button className={cn("font-bold h-12 rounded-xl group shadow-md", risk === 'high' ? "bg-destructive hover:bg-red-700" : "bg-nysc-gold hover:bg-amber-700")}>
                {risk === 'high' ? 'Handle Rejection Now' : 'Open Guide'} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100 hover-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xl">Current Stage: <span className="text-nysc-green-800 capitalize">{stageId}</span></CardTitle>
              <CardDescription className="text-base">Complete your mandatory milestones to progress.</CardDescription>
            </div>
            <CheckCircle className="text-nysc-green-800 w-8 h-8" />
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold text-nysc-green-900 uppercase tracking-widest">
                <span>Phase Readiness</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-2.5 bg-gray-100" />
            </div>
            <div className="space-y-3">
              {stageTasks.map(task => (
                <div key={task.id} className="group flex items-center gap-4 p-4 border rounded-xl bg-white hover:border-nysc-green-500 hover:bg-nysc-green-50/20 transition-all">
                  <div className={`w-3 h-3 rounded-full shrink-0 ${completedTasks.includes(task.id) ? 'bg-nysc-green-800' : 'bg-gray-200 group-hover:bg-nysc-green-200'}`} />
                  <span className={`text-sm flex-1 ${completedTasks.includes(task.id) ? 'line-through text-muted-foreground font-normal' : 'text-gray-900 font-semibold'}`}>{task.title}</span>
                  <Button
                    variant={completedTasks.includes(task.id) ? "ghost" : "default"}
                    size="sm"
                    className={`h-9 px-4 text-xs font-bold ${completedTasks.includes(task.id) ? 'text-nysc-green-800 bg-transparent' : 'bg-nysc-green-800 hover:bg-nysc-green-900 shadow-sm'}`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {completedTasks.includes(task.id) ? 'Done' : 'Complete'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-nysc-green-800 text-white border-none shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 group-hover:scale-110 transition-transform" />
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-white font-display">
                <MapPin className="w-5 h-5 text-nysc-gold" /> {stateName || 'Deployment'} Hub
              </CardTitle>
              <CardDescription className="text-nysc-green-100 font-medium">Local intelligence for your area.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-nysc-green-200 font-bold mb-1">PPA Database</p>
                {isPro ? (
                  <p className="text-xs font-bold text-white flex items-center gap-2"><Sparkles className="w-3 h-3 text-nysc-gold" /> 42 Openings Found</p>
                ) : (
                  <p className="text-xs font-bold text-nysc-green-200 flex items-center gap-2 opacity-60"><Lock className="w-3 h-3" /> Locked for Pro Tier</p>
                )}
              </div>
              <Link to="/app/state-guide">
                <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 border-none font-bold">
                  State Intelligence <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-muted-foreground">
                <LayoutList className="w-4 h-4 text-nysc-green-800" /> Mastery Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
               <div className="flex justify-between items-end">
                  <span className="text-xl font-black text-nysc-green-800">{readArticles.length}</span>
                  <span className="text-[10px] font-bold text-gray-300 uppercase">Guides Mastered</span>
               </div>
               <Progress value={readPercent} className="h-1.5 bg-gray-50" />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <Calendar className="w-5 h-5 text-nysc-green-800" /> Deadline Radar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {relevantDeadlines.length > 0 ? (
              relevantDeadlines.map(d => {
                const daysLeft = differenceInDays(parseISO(d.date), new Date());
                return (
                  <div key={d.id} className="flex items-center justify-between p-4 border rounded-xl hover:bg-gray-50/50 transition-colors">
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold text-gray-900">{d.title}</p>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{d.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-black ${daysLeft < 3 ? 'text-destructive' : 'text-nysc-gold'}`}>
                        {daysLeft < 0 ? 'PAST DUE' : `${daysLeft}d left`}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 flex flex-col items-center gap-2 bg-gray-50/50 rounded-2xl border-2 border-dashed">
                <Sparkles className="w-8 h-8 text-nysc-gold animate-pulse" />
                <div className="space-y-1">
                  <p className="text-xs font-bold text-gray-900">All Clear for {stageId}!</p>
                  <p className="text-[10px] text-muted-foreground font-medium">No urgent deadlines detected for your current phase.</p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display text-lg">
              <BookOpen className="w-5 h-5 text-nysc-green-800" /> Essential Knowledge
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 gap-3">
             <Link to="/app/journey" className="flex items-center justify-between p-4 border rounded-xl hover:bg-nysc-green-50/20 group">
               <span className="text-sm font-bold">Interactive Timeline</span>
               <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-nysc-green-800" />
             </Link>
             <Link to="/app/knowledge" className="flex items-center justify-between p-4 border rounded-xl hover:bg-nysc-green-50/20 group">
               <span className="text-sm font-bold">Registration & Rules</span>
               <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-nysc-green-800" />
             </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}