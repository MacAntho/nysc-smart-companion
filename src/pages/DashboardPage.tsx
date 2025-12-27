import React, { useEffect, useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, MapPin, Sparkles, ArrowRight, ShieldAlert, Briefcase, Info, Loader2 } from 'lucide-react';
import { JOURNEY_STAGES, DEADLINES, KNOWLEDGE_ARTICLES, STATE_DATA } from '@/lib/mock-content';
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
  const isInitialized = useAppStore(s => s.isInitialized);
  useEffect(() => {
    loadProfile();
  }, [loadProfile]);
  const currentStage = useMemo(() => JOURNEY_STAGES.find(s => s.id === stageId), [stageId]);
  const stageTasks = useMemo(() => currentStage?.tasks || [], [currentStage]);
  const completedCount = useMemo(() => stageTasks.filter(t => completedTasks.includes(t.id)).length, [stageTasks, completedTasks]);
  const progressPercent = stageTasks.length > 0 ? (completedCount / stageTasks.length) * 100 : 0;
  const relevantDeadlines = useMemo(() => DEADLINES.filter(d => d.stage === stageId), [stageId]);
  const priorityContent = useMemo(() => {
    if (!isInitialized) return null;
    const readArticlesSet = new Set(readArticles);
    switch (stageId) {
      case 'mobilization':
        if (!readArticlesSet.has('k-registration')) return {
          title: 'Portal Registration Critical Step',
          desc: 'Ensure your bio-data and senate list verification are correct before the portal closes.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=registration'
        };
        return {
          title: 'Redeployment Guide',
          desc: 'Thinking of relocating? Review official grounds for medical or marital redeployment.',
          risk: 'medium' as PriorityRisk,
          searchLink: '/app/knowledge?q=redeployment'
        };
      case 'camp':
        if (!readArticlesSet.has('k-camp-packing')) return {
          title: 'Camp Packing Essentials',
          desc: 'The 21-day orientation requires specific documentation. Don’t be caught unprepared.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=packing'
        };
        return {
          title: 'Orientation survival',
          desc: 'Learn about camp registration and swearing-in protocols.',
          risk: 'low' as PriorityRisk,
          searchLink: '/app/knowledge'
        };
      case 'ppa':
        if (!readArticlesSet.has('k-clearance')) return {
          title: 'Monthly Clearance Protocol',
          desc: 'Mandatory: Secure your monthly allowance through LGI biometric verification and PPA clearance.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=clearance'
        };
        if (!readArticlesSet.has('k-ppa-rejection')) return {
          title: 'PPA Rejection Protocol',
          desc: 'What to do if your employer rejects you. Know the legal LGI reporting chain.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=rejection'
        };
        return {
          title: 'Legacy Project Brainstorming',
          desc: 'Your PPA is stable. It is the perfect time to identify a community need for your CDS project.',
          risk: 'medium' as PriorityRisk,
          searchLink: '/app/cds'
        };
      case 'cds':
        if (!readArticlesSet.has('k-cds-execution')) return {
          title: 'CDS Execution Protocol',
          desc: 'Mandatory Procedural Warning: You MUST secure a "Letter of Approval" from the LGI before starting any implementation.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?search=execution'
        };
        return {
          title: 'Legacy Hub Blueprints',
          desc: 'Review verified project blueprints with budget benchmarks for your community.',
          risk: 'low' as PriorityRisk,
          searchLink: '/app/cds'
        };
      case 'pop':
        if (!readArticlesSet.has('k-pop')) return {
          title: 'Passing Out Parade (POP) & Certificate Guide',
          desc: 'Critical: Verify your CNS name details and complete the LGI/ZI signature chain for discharge.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=pop'
        };
        if (!readArticlesSet.has('k-clearance')) return {
          title: 'Final Winding-Up Clearance',
          desc: 'Mandatory: Kit return and LGI signatures are required for Discharge Certificate collection.',
          risk: 'high' as PriorityRisk,
          searchLink: '/app/knowledge?q=clearance'
        };
        return {
          title: 'Career Next Steps',
          desc: 'Update your CV with your service achievements using our templates.',
          risk: 'low' as PriorityRisk,
          searchLink: '/app/knowledge'
        };
      default:
        return {
          title: 'Welcome to Command',
          desc: 'Your 365 days of service start with verified intelligence.',
          risk: 'low' as PriorityRisk,
          searchLink: '/app/knowledge'
        };
    }
  }, [stageId, readArticles, isInitialized]);
  if (!isInitialized && !isSyncing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-10 h-10 text-nysc-green-800 animate-spin" />
        <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground animate-pulse">Hydrating Command Center...</p>
      </div>
    );
  }
  const riskStyles: Record<PriorityRisk, string> = {
    high: "border-destructive/30 bg-red-50/50",
    medium: "border-nysc-gold/30 bg-amber-50/50",
    low: "border-nysc-green-100 bg-nysc-green-50/20"
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
        <Card className={cn("border shadow-lg overflow-hidden relative group transition-all duration-300", riskStyles[priorityContent.risk])}>
          <div className="absolute top-0 right-0 p-4 opacity-10">
            {priorityContent.risk === 'high' ? <ShieldAlert className="w-16 h-16 text-destructive" /> : <Sparkles className="w-16 h-16 text-nysc-gold" />}
          </div>
          <CardHeader className="pb-2">
            <Badge className={cn("w-fit mb-2 uppercase text-[9px] font-black tracking-widest", priorityContent.risk === 'high' ? "bg-destructive" : "bg-nysc-green-800")}>
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
                  <div key={d.id} className="flex items-center justify-between p-3 border rounded-xl bg-gray-50/30">
                    <p className="text-xs font-bold text-gray-900">{d.title}</p>
                    <p className="text-[10px] text-nysc-gold font-black uppercase">{differenceInDays(parseISO(d.date), new Date())}d Left</p>
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
        </div>
      </div>
    </div>
  );
}