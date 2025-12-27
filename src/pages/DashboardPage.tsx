import React, { useEffect, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, Sparkles, ArrowRight, ShieldAlert, Briefcase, Info, Loader2, Search, HelpCircle } from 'lucide-react';
import { JOURNEY_STAGES, DEADLINES, STATE_DATA } from '@/lib/mock-content';
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
  const loadProfile = useAppStore(s => s.loadProfile);
  const isInitialized = useAppStore(s => s.isInitialized);
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  const currentStage = useMemo(() => JOURNEY_STAGES.find(s => s.id === stageId), [stageId]);
  const stageTasks = useMemo(() => currentStage?.tasks || [], [currentStage]);
  const completedCount = useMemo(() => stageTasks.filter(t => completedTasks.includes(t.id)).length, [stageTasks, completedTasks]);
  const progressPercent = stageTasks.length > 0 ? (completedCount / stageTasks.length) * 100 : 0;
  const relevantDeadlines = useMemo(() => {
    return DEADLINES
      .filter(d => d.stage === stageId)
      .map(d => {
        const date = parseISO(d.date);
        const diff = differenceInDays(date, new Date());
        const past = isPast(date);
        return { ...d, diff, past };
      });
  }, [stageId]);
  const priorityContent = useMemo(() => {
    if (!isInitialized) return null;
    const readArticlesSet = new Set(readArticles);
    if (!readArticlesSet.has('k-disqualification')) {
      return {
        title: 'Disqualification & Remobilization Protocol',
        desc: 'Highest Risk: Understand the grounds for service cancellation and the legal implications of disqualification.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=disqualification'
      };
    }
    if (!readArticlesSet.has('k-sanctions')) {
      return {
        title: 'NYSC Violations & Penalties Guide',
        desc: 'Critical Advisory: Learn how to avoid Service Extensions and disciplinary sanctions.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=sanctions'
      };
    }
    if (!readArticlesSet.has('k-extension')) {
      return {
        title: 'Service Extensions: Causes & Appeals',
        desc: 'Critical: Understand the official triggers for service extensions and the appeal window.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=extension'
      };
    }

    let content: { title: string; desc: string; risk: PriorityRisk; searchLink: string } | null = null;
    // Fallback if current stage tasks are 100% complete
    if (progressPercent === 100) {
      content = { 
        title: 'Next Phase Readiness', 
        desc: 'You have completed all milestones for this stage. Review the State Guide for local intel.', 
        risk: 'low', 
        searchLink: '/app/state-guide' 
      };
      return content;
    }
    switch (stageId) {
      case 'prospective':
        content = !readArticlesSet.has('k-registration')
          ? { title: 'Official Registration Roadmap', desc: 'Mandatory: Ensure your senate list details are verified.', risk: 'high', searchLink: '/app/knowledge?search=registration' }
          : { title: 'Clearance Preparation', desc: 'Learn about the final clearance process.', risk: 'low', searchLink: '/app/knowledge' };
        break;
      case 'ppa':
        content = !readArticlesSet.has('k-clearance-issues')
          ? { title: 'Official Troubleshooting Guide', desc: 'Know the official LGI reporting chain.', risk: 'high', searchLink: '/app/knowledge?q=clearance-issues' }
          : { title: 'Monthly Clearance Protocol', desc: 'Secure your monthly allowance.', risk: 'high', searchLink: '/app/knowledge?q=clearance' };
        break;
      default:
        content = { title: 'Welcome to Command', desc: 'Your 365 days start with verified intelligence.', risk: 'low', searchLink: '/app/knowledge' };
    }
    return content;
  }, [stageId, readArticles, isInitialized, progressPercent]);
  if (!isInitialized) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 text-nysc-green-800 animate-spin" />
        <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground animate-pulse">Initializing Command Center...</p>
      </div>
    );
  }
  const riskStyles: Record<PriorityRisk, string> = {
    high: "border-destructive/40 bg-red-50/50 shadow-xl shadow-destructive/10 ring-1 ring-destructive/20",
    medium: "border-nysc-gold/30 bg-amber-50/50 shadow-lg shadow-nysc-gold/5",
    low: "border-nysc-green-100 bg-nysc-green-50/20 shadow-md shadow-nysc-green-800/5"
  };
  return (
    <div className="max-w-7xl mx-auto px-4 space-y-8 animate-fade-in py-8 md:py-10">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">Corper Command</h1>
          <p className="text-muted-foreground font-medium">Serving the Nation with Digital Intelligence.</p>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold px-4 py-2 rounded-full bg-white border shadow-sm">
          {isSyncing ? (
            <>
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-muted-foreground uppercase tracking-wider">Syncing...</span>
            </>
          ) : (
            <>
              <div className="h-2 w-2 rounded-full bg-nysc-green-800" />
              <span className="text-muted-foreground uppercase tracking-wider">
                Cloud Synced {lastSynced ? formatDistanceToNow(lastSynced, { addSuffix: true }) : 'now'}
              </span>
            </>
          )}
        </div>
      </header>
      {priorityContent && (
        <Card className={cn("border overflow-hidden relative group transition-all duration-300", riskStyles[priorityContent.risk || 'low'])}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            {priorityContent.risk === 'high' ? <ShieldAlert className="w-16 h-16 text-destructive" /> : <Sparkles className="w-16 h-16 text-nysc-gold" />}
          </div>
          <CardHeader className="pb-2">
            <Badge className={cn("w-fit mb-2 uppercase text-[9px] font-black tracking-widest border-none", priorityContent.risk === 'high' ? "bg-destructive text-white" : "bg-nysc-green-800 text-white")}>
              {priorityContent.risk === 'high' ? 'Process Critical' : 'Priority Resource'}
            </Badge>
            <CardTitle className="text-xl font-display">{priorityContent.title}</CardTitle>
            <CardDescription className="font-medium text-sm text-gray-700">{priorityContent.desc}</CardDescription>
          </CardHeader>
          <CardContent className="pb-6">
            <Link to={priorityContent.searchLink}>
              <Button className={cn("font-bold h-11 rounded-xl shadow-md", priorityContent.risk === 'high' ? "bg-destructive hover:bg-red-700" : "bg-nysc-gold hover:bg-amber-700")}>
                View Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl">Stage: <span className="text-nysc-green-800 capitalize">{stageId}</span></CardTitle>
              <CheckCircle className="text-nysc-green-800 w-6 h-6" />
            </div>
            <CardDescription className="text-base font-medium">Phase Readiness: {Math.round(progressPercent)}%</CardDescription>
          </CardHeader>
          <CardContent className="pt-4 space-y-4">
            <Progress value={progressPercent} className="h-2 bg-gray-100" />
            <div className="grid grid-cols-1 gap-2 pt-2">
              {stageTasks.map(task => (
                <div key={task.id} className="flex items-center gap-3 p-3 border rounded-xl hover:bg-gray-50/50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${completedTasks.includes(task.id) ? 'bg-nysc-green-800' : 'bg-gray-200'}`} />
                  <span className={`text-sm flex-1 font-semibold ${completedTasks.includes(task.id) ? 'text-muted-foreground line-through' : 'text-gray-900'}`}>{task.title}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 text-[10px] font-black uppercase text-nysc-green-800"
                    onClick={() => toggleTask(task.id)}
                  >
                    {completedTasks.includes(task.id) ? 'Revisit' : 'Done'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-nysc-green-800 text-white border-none shadow-xl overflow-hidden relative">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white font-display text-lg">
                <Briefcase className="w-5 h-5 text-nysc-gold" /> Legacy Hub
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-nysc-green-100 font-medium">Build your legacy in {stateName || 'your community'} with verified project blueprints.</p>
              <Link to="/app/cds">
                <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 font-bold">
                  Open Toolkit <ChevronRight className="ml-1 w-4 h-4" />
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
            <CardContent className="space-y-3">
              {relevantDeadlines.length > 0 ? (
                relevantDeadlines.map(d => (
                  <div key={d.id} className={cn("flex items-center justify-between p-3 border rounded-xl", d.past ? "bg-red-50 border-red-100" : "bg-gray-50/30")}>
                    <p className={cn("text-xs font-bold", d.past ? "text-destructive" : "text-gray-900")}>{d.title}</p>
                    <p className={cn("text-[10px] font-black uppercase", d.past ? "text-destructive" : "text-nysc-gold")}>
                      {d.past ? "Window Closed" : `${d.diff}d Left`}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 border-2 border-dashed rounded-xl">
                  <Info className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  <p className="text-[9px] text-muted-foreground font-black uppercase">Phase Milestones Secured</p>
                </div>
              )}
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-100 bg-gray-50/30">
             <CardHeader className="pb-2"><CardTitle className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Quick Commands</CardTitle></CardHeader>
             <CardContent className="grid grid-cols-2 gap-2">
                <Link to="/app/knowledge?q=clearance">
                  <Button variant="outline" className="w-full text-[9px] font-black uppercase tracking-widest h-10 border-gray-200">
                    <Search className="w-3 h-3 mr-1" /> Clearance
                  </Button>
                </Link>
                <Link to="/app/knowledge?q=ppa">
                  <Button variant="outline" className="w-full text-[9px] font-black uppercase tracking-widest h-10 border-gray-200">
                    <HelpCircle className="w-3 h-3 mr-1" /> PPA Help
                  </Button>
                </Link>
             </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}