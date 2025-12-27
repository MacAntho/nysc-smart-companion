import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, MapPin, BookOpen, LayoutList, Sparkles, Lock, ArrowRight, AlertTriangle, ShieldAlert, Fingerprint, Briefcase } from 'lucide-react';
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
  const getPriorityContent = (): { title: string; desc: string; risk: PriorityRisk; searchLink: string } => {
    const readArticlesSet = new Set(readArticles);
    const hasReadCDSGuide = readArticlesSet.has('k-cds');
    const hasReadPOPGuide = readArticlesSet.has('k-pop-guide');
    switch(stageId) {
      case 'cds':
        if (!hasReadCDSGuide) return {
          title: 'CDS Group & Lifecycle Policy',
          desc: 'Mandatory: Review official protocols for weekly meetings, dues, and project approval to avoid service extension.',
          risk: 'high',
          searchLink: '/app/knowledge?q=cds'
        };
        return {
          title: 'Expanded Legacy Project Toolkit',
          desc: 'Explore 30+ verified project blueprints with operational budget benchmarks and impact metrics.',
          risk: 'low',
          searchLink: '/app/cds'
        };
      case 'pop':
        if (!hasReadPOPGuide) return {
          title: 'Final Winding-Up Guide',
          desc: 'Crucial steps for your final PPA clearance and physical certificate collection.',
          risk: 'high',
          searchLink: '/app/knowledge?q=pop'
        };
        return {
          title: 'Post-Service Career Toolkit',
          desc: 'Service complete. Explore CV templates and networking guides for your next chapter.',
          risk: 'low',
          searchLink: '/app/knowledge?q=career'
        };
      case 'ppa':
        return {
          title: 'PPA Survival & CDS Initiation',
          desc: 'Your PPA phase has started. It is time to begin brainstorming your community legacy project.',
          risk: 'medium',
          searchLink: '/app/cds'
        };
      default:
        return {
          title: 'Official Operational Guide',
          desc: 'Browse verified knowledge base for official rules and survival tips.',
          risk: 'low',
          searchLink: '/app/knowledge'
        };
    }
  };
  const { title: priorityTitle, desc: priorityDesc, risk, searchLink: priorityLink } = getPriorityContent();
  const riskStyles: Record<PriorityRisk, string> = {
    high: "border-destructive border-2 bg-red-50/50 shadow-destructive/10",
    medium: "border-nysc-gold border-2 bg-amber-50/50 shadow-nysc-gold/10",
    low: "border-nysc-green-100 bg-nysc-green-50/20 shadow-nysc-green-100/10"
  };
  const badgeStyles: Record<PriorityRisk, string> = {
    high: "bg-destructive text-white animate-pulse",
    medium: "bg-nysc-gold text-white",
    low: "bg-nysc-green-800 text-white"
  };
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 animate-fade-in py-8 md:py-10">
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
          <div className="flex items-center gap-3 text-[11px] font-semibold px-4 py-2 rounded-full bg-white border shadow-sm transition-all hover:bg-gray-50">
            {isSyncing ? (
              <><div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" /><span className="text-muted-foreground uppercase tracking-wider">Syncing...</span></>
            ) : (
              <><div className="h-2 w-2 rounded-full bg-nysc-green-800" /><span className="text-muted-foreground uppercase tracking-wider">Cloud Synced {lastSynced ? formatDistanceToNow(lastSynced, { addSuffix: true }) : 'now'}</span></>
            )}
          </div>
        </div>
      </header>
      {priorityTitle && (
        <Card className={cn("border-2 shadow-lg overflow-hidden relative group transition-all duration-300", riskStyles[risk] || riskStyles.low)}>
          <div className="absolute top-0 right-0 p-4">
             {risk === 'high' ? (
               <ShieldAlert className="w-12 h-12 text-destructive opacity-20 group-hover:scale-125 transition-transform duration-500" />
             ) : (
               <Sparkles className="w-12 h-12 text-nysc-gold opacity-20 group-hover:scale-125 transition-transform duration-500" />
             )}
          </div>
          <CardHeader className="pb-2">
            <Badge className={cn("w-fit mb-2 uppercase text-[9px] font-black tracking-widest flex items-center gap-1", badgeStyles[risk] || badgeStyles.low)}>
              {risk === 'high' && <AlertTriangle className="w-3 h-3" />}
              {risk === 'high' ? 'Process Critical' : 'Priority Resource'}
            </Badge>
            <CardTitle className={cn("text-xl font-display", risk === 'high' ? "text-destructive" : "text-amber-900")}>{priorityTitle}</CardTitle>
            <CardDescription className={cn("font-medium text-sm", risk === 'high' ? "text-red-800" : "text-amber-800")}>{priorityDesc}</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <Link to={priorityLink}>
              <Button className={cn("font-bold h-12 rounded-xl group shadow-md", risk === 'high' ? "bg-destructive hover:bg-red-700" : "bg-nysc-gold hover:bg-amber-700")}>
                {risk === 'high' ? 'Review Protocol Now' : 'Open Detailed Guide'} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xl">Current Stage: <span className="text-nysc-green-800 capitalize">{stageId}</span></CardTitle>
              <CardDescription className="text-base">Complete your mandatory milestones to progress.</CardDescription>
            </div>
            <CheckCircle className="text-nysc-green-800 w-8 h-8" />
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold text-nysc-green-900 uppercase tracking-widest">
                <span>Phase Readiness</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-2.5 bg-gray-100" />
            </div>
            <div className="grid grid-cols-1 gap-3">
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
                <Briefcase className="w-5 h-5 text-nysc-gold" /> Legacy Project Hub
              </CardTitle>
              <CardDescription className="text-nysc-green-100 font-medium">Build your legacy in {stateName || 'your community'}.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-4">
              <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                <p className="text-[10px] uppercase tracking-widest text-nysc-green-200 font-bold mb-1">New Update</p>
                <p className="text-xs font-bold text-white flex items-center gap-2"><Sparkles className="w-3 h-3 text-nysc-gold" /> 30+ Verified Blueprints</p>
              </div>
              <Link to="/app/cds">
                <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 border-none font-bold">
                  Explore Toolkit <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-100">
            <CardHeader className="pb-2">
              <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4 text-nysc-green-800" /> Deadline Radar
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {relevantDeadlines.length > 0 ? (
                relevantDeadlines.map(d => (
                  <div key={d.id} className="flex items-center justify-between p-3 border rounded-xl hover:bg-gray-50/50 transition-colors">
                    <p className="text-xs font-bold text-gray-900">{d.title}</p>
                    <p className="text-[10px] text-nysc-gold font-black uppercase">{differenceInDays(parseISO(d.date), new Date())}d Left</p>
                  </div>
                ))
              ) : (
                <div className="text-center py-6 bg-gray-50/50 rounded-xl border-2 border-dashed">
                  <p className="text-[10px] text-muted-foreground font-black uppercase">No phase deadlines</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}