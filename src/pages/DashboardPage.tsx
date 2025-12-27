import React, { useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, Sparkles, ArrowRight, ShieldAlert, Briefcase, Info, CheckCircle2 } from 'lucide-react';
import { JOURNEY_STAGES, DEADLINES } from '@/lib/mock-content';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, differenceInDays, parseISO, isPast } from 'date-fns';
import { cn } from '@/lib/utils';
type PriorityRisk = 'high' | 'medium' | 'low';
export function DashboardPage() {
  const stageId = useAppStore(s => s.stage);
  const stateName = useAppStore(s => s.stateOfDeployment);
  const completedTasks = useAppStore(s => s.completedTasks);
  const readArticles = useAppStore(s => s.readArticles);
  const toggleTask = useAppStore(s => s.toggleTask);
  const isSyncing = useAppStore(s => s.isSyncing);
  const lastSynced = useAppStore(s => s.lastSynced);
  const isInitialized = useAppStore(s => s.isInitialized);
  const isOnboarded = useAppStore(s => s.isOnboarded);
  const currentStage = useMemo(() => JOURNEY_STAGES.find(s => s.id === stageId), [stageId]);
  const stageTasks = useMemo(() => currentStage?.tasks || [], [currentStage]);
  const completedCount = useMemo(() => (stageTasks || []).filter(t => (completedTasks || []).includes(t.id)).length, [stageTasks, completedTasks]);
  const progressPercent = stageTasks.length > 0 ? (completedCount / stageTasks.length) * 100 : 0;
  const relevantDeadlines = useMemo(() => {
    return (DEADLINES || [])
      .filter(d => d.stage === stageId)
      .map(d => {
        try {
          const date = parseISO(d.date);
          const diff = differenceInDays(date, new Date());
          const past = isPast(date);
          return { ...d, diff, past };
        } catch (e) {
          return { ...d, diff: 0, past: true };
        }
      });
  }, [stageId]);
  const priorityContent = useMemo(() => {
    if (!isInitialized || !isOnboarded) return null;
    const readArticlesSet = new Set(readArticles ?? []);
    if (!readArticlesSet.has('k-emergency')) {
      return { title: 'Emergency Response Guide', desc: 'Process Critical: Mandatory safety protocols for medical emergencies and security incidents.', risk: 'high' as PriorityRisk, link: '/app/knowledge?search=emergency' };
    }
    if (!readArticlesSet.has('k-disqualification')) {
      return { title: 'Disqualification Protocol', desc: 'Critical Risk: Understand the grounds for service cancellation and legal implications.', risk: 'high' as PriorityRisk, link: '/app/knowledge?search=disqualification' };
    }
    // Surface Career Leverage guide for those in POP stage
    if (stageId === 'pop' && !readArticlesSet.has('k-career-leverage')) {
      return { title: 'Career Transition Roadmap', desc: 'Strategy Active: Leverage your NYSC experience, certificates, and PPA network for the labor market.', risk: 'medium' as PriorityRisk, link: '/app/knowledge?search=career' };
    }
    // Promoted survival tips for ALL stages once basic emergency guides are read
    if (!readArticlesSet.has('k-insider-tips')) {
      return { title: '100 Practical Survival Tips', desc: 'Expert Intelligence: Battle-tested tips for camp, finance, and PPA survival.', risk: 'medium' as PriorityRisk, link: '/app/knowledge?search=tips' };
    }
    if (!readArticlesSet.has('k-faqs')) {
      return { title: 'Verified NYSC FAQs', desc: 'Master the entire service cycle with answers to 50+ common official questions.', risk: 'low' as PriorityRisk, link: '/app/knowledge?search=faqs' };
    }
    return { title: 'Phase Readiness Active', desc: 'You are tracking well. Review your current milestones to ensure 100% compliance.', risk: 'low' as PriorityRisk, link: '/app/journey' };
  }, [readArticles, isInitialized, isOnboarded]);
  const syncStatus = useMemo(() => {
    if (isSyncing) return { text: 'Cloud Sync Active', color: 'bg-amber-500', pulse: true };
    if (!lastSynced) return { text: 'Session Started', color: 'bg-nysc-green-800', pulse: false };
    return { text: `Synced ${formatDistanceToNow(lastSynced, { addSuffix: true })}`, color: 'bg-nysc-green-800', pulse: false };
  }, [isSyncing, lastSynced]);
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">Command Center</h1>
          <p className="text-muted-foreground font-medium">Serving the Nation with Digital Intelligence.</p>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full bg-white border shadow-sm">
          <div className={cn("h-2 w-2 rounded-full", syncStatus.color, syncStatus.pulse && "animate-pulse")} />
          <span className="text-muted-foreground">{syncStatus.text}</span>
        </div>
      </header>
      {priorityContent && (
        <Card className={cn(
          "border relative group transition-all duration-300 rounded-3xl overflow-hidden",
          priorityContent.risk === 'high' ? "bg-red-50/50 border-red-100" : "bg-nysc-green-50/20 border-nysc-green-100/50"
        )}>
          <CardHeader className="pb-2">
            <Badge className={cn("w-fit mb-2 uppercase text-[8px] font-black tracking-widest border-none", priorityContent.risk === 'high' ? "bg-destructive" : "bg-nysc-green-800")}>
              {priorityContent.risk === 'high' ? 'Process Critical' : 'Priority Advisory'}
            </Badge>
            <CardTitle className="text-2xl font-display font-bold">{priorityContent.title}</CardTitle>
            <CardDescription className="font-bold text-sm text-gray-800 max-w-2xl mt-1">{priorityContent.desc}</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <Link to={priorityContent.link}>
              <Button className={cn("font-bold rounded-xl h-11", priorityContent.risk === 'high' ? "bg-destructive hover:bg-red-700 shadow-red-100 shadow-lg" : "bg-nysc-gold hover:bg-amber-700 shadow-amber-100 shadow-lg")}>
                View Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100 rounded-2xl">
          <CardHeader className="pb-2 flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Phase: <span className="text-nysc-green-800 capitalize">{stageId}</span></CardTitle>
              <CardDescription className="font-bold text-xs">Milestone Completion: {Math.round(progressPercent)}%</CardDescription>
            </div>
            <CheckCircle2 className="w-6 h-6 text-nysc-green-800 opacity-20" />
          </CardHeader>
          <CardContent className="pt-4 space-y-6">
            <Progress value={progressPercent} className="h-2.5 bg-gray-100" />
            <div className="grid grid-cols-1 gap-2 pt-2">
              {stageTasks.map(task => {
                const isDone = completedTasks.includes(task.id);
                return (
                  <div key={task.id} className="flex items-center gap-3 p-4 border rounded-xl bg-white hover:bg-gray-50 transition-colors">
                    <div className={cn("w-2 h-2 rounded-full", isDone ? "bg-nysc-green-800" : "bg-gray-200")} />
                    <span className={cn("text-sm flex-1 font-bold", isDone ? "text-muted-foreground line-through" : "text-gray-900")}>{task.title}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 text-[9px] font-black uppercase tracking-widest text-nysc-green-800"
                      onClick={() => toggleTask(task.id)}
                    >
                      {isDone ? 'Revisit' : 'Done'}
                    </Button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-nysc-green-900 text-white border-none shadow-xl overflow-hidden rounded-2xl relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-display text-lg">
                <Briefcase className="w-5 h-5 text-nysc-gold" /> CDS Legacy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-nysc-green-100 font-bold">Build your sustainable project in <span className="text-white underline underline-offset-4 decoration-nysc-gold">{stateName || 'your state'}</span> with verified blueprints.</p>
              <Link to="/app/cds">
                <Button className="w-full bg-white text-nysc-green-900 hover:bg-gray-100 font-black h-11 rounded-xl">
                  Legacy Toolkit <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-100 rounded-2xl">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-nysc-green-800" /> Deadline Radar
                </CardTitle>
                <Link to="/app/deadlines" className="text-[9px] font-black uppercase text-nysc-green-800 hover:underline">Full View</Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {relevantDeadlines.length > 0 ? (
                relevantDeadlines.map(d => (
                  <div key={d.id} className={cn("flex items-center justify-between p-3 border rounded-xl bg-gray-50/50", d.past && "opacity-50")}>
                    <p className="text-xs font-bold truncate pr-2">{d.title}</p>
                    <p className={cn("text-[9px] font-black uppercase whitespace-nowrap", d.past ? "text-gray-400" : d.diff <= 7 ? "text-destructive" : "text-nysc-gold")}>
                      {d.past ? "Closed" : d.diff === 0 ? "Today" : `${d.diff}d Left`}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-10 border-2 border-dashed rounded-xl">
                  <Info className="w-6 h-6 text-gray-200 mx-auto mb-2" />
                  <p className="text-[9px] text-muted-foreground font-black uppercase">No phase deadlines active</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}