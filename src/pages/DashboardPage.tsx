import React, { useMemo } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, CheckCircle, ChevronRight, Sparkles, ArrowRight, ShieldAlert, Briefcase, Info, Search } from 'lucide-react';
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
    const readArticlesSet = new Set(readArticles ?? []);
    // 0. Essential Foundational Knowledge (Eligibility)
    if ((stageId === 'prospective' || stageId === 'mobilization') && !readArticlesSet.has('k-eligibility')) {
      return {
        title: 'NYSC Eligibility Guide',
        desc: 'Strategic Roadmap: Detailed legal clarity on the 30-year age exemption rule and academic prerequisites before you finalize registration.',
        risk: 'low' as PriorityRisk,
        searchLink: '/app/knowledge?search=eligibility'
      };
    }
    // 1. Batch System Intelligence (Requested Official Guide)
    if ((stageId === 'prospective' || stageId === 'mobilization') && !readArticlesSet.has('k-batches')) {
      return {
        title: 'Batch System Intelligence',
        desc: 'Logistics Roadmap: Understand the A/B/C batch cycles, stream assignments, and how to revalidate your mobilization if you miss your window.',
        risk: 'low' as PriorityRisk,
        searchLink: '/app/knowledge?search=batches'
      };
    }
    // 2. Critical Disciplinary Guides (Risk High)
    if (!readArticlesSet.has('k-disqualification')) {
      return {
        title: 'Disqualification Protocol',
        desc: 'Critical Risk: Understand the grounds for service cancellation and legal implications of abscondment.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=disqualification'
      };
    }
    if (!readArticlesSet.has('k-sanctions')) {
      return {
        title: 'Violations & Penalties Guide',
        desc: 'Official Advisory: Learn how to avoid Service Extensions and administrative sanctions.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=sanctions'
      };
    }
    // 3. Stage-Specific Critical Intelligence
    if (stageId === 'prospective' && !readArticlesSet.has('k-registration')) {
      return {
        title: 'Online Registration Roadmap',
        desc: 'Mandatory: Ensure your senate list details are verified before portal closure to avoid missing the batch.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=registration'
      };
    }
    if (stageId === 'ppa' && !readArticlesSet.has('k-ppa-rejection')) {
      return {
        title: 'Handling PPA Rejection',
        desc: 'Strategic Advisory: If your PPA refuses to accept you, you must report to the LGI within 48 hours with a stamped letter.',
        risk: 'medium' as PriorityRisk,
        searchLink: '/app/knowledge?search=rejection'
      };
    }
    if (stageId === 'ppa' && !readArticlesSet.has('k-clearance-issues')) {
      return {
        title: 'Clearance Troubleshooting',
        desc: 'Official Protocol: Know the LGI reporting chain for sign-off refusals and biometric failures.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=clearance'
      };
    }
    if (stageId === 'pop' && !readArticlesSet.has('k-pop')) {
      return {
        title: 'Passing Out Parade Protocol',
        desc: 'Winding Up: Ensure your final release letter and kit return slip are verified to receive your certificate.',
        risk: 'high' as PriorityRisk,
        searchLink: '/app/knowledge?search=pop'
      };
    }
    // 4. Featured Guides based on user profile
    if ((stageId === 'prospective' || stageId === 'mobilization') && !readArticlesSet.has('k-foreign')) {
      return {
        title: 'Foreign-Trained Graduates',
        desc: 'Strategic Roadmap: International degrees require official evaluation and physical verification.',
        risk: 'medium' as PriorityRisk,
        searchLink: '/app/knowledge?search=foreign'
      };
    }
    if (!readArticlesSet.has('k-pregnancy')) {
      return {
        title: 'Maternity Provisions Guide',
        desc: 'Official Advisory: Learn about concessionary posting and the mandatory 12-week maternity leave protocol.',
        risk: 'low' as PriorityRisk,
        searchLink: '/app/knowledge?search=pregnancy'
      };
    }
    // 5. Milestone Achievement Fallback
    if (progressPercent === 100) {
      return {
        title: 'Phase Milestone Achieved',
        desc: 'You have completed all milestones for this stage. Prepare for the next phase by checking the State Guide.',
        risk: 'low' as PriorityRisk,
        searchLink: '/app/state-guide'
      };
    }
    return {
      title: 'Command Center Ready',
      desc: 'Your service year is tracked with verified intelligence. Review your current milestones to stay compliant.',
      risk: 'low' as PriorityRisk,
      searchLink: '/app/journey'
    };
  }, [stageId, readArticles, isInitialized, progressPercent]);
  const riskStyles: Record<PriorityRisk, string> = {
    high: "border-destructive/40 bg-red-50/40 shadow-xl shadow-destructive/10 ring-1 ring-destructive/20",
    medium: "border-nysc-gold/30 bg-amber-50/40 shadow-lg shadow-nysc-gold/5",
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
        <Card className={cn("border overflow-hidden relative group transition-all duration-300", riskStyles[priorityContent.risk])}>
          <div className="absolute top-0 right-0 p-4 opacity-15 transition-transform group-hover:scale-110">
            {priorityContent.risk === 'high' ? <ShieldAlert className="w-20 h-20 text-destructive" /> : <Sparkles className="w-20 h-20 text-nysc-gold" />}
          </div>
          <CardHeader className="pb-2 relative z-10">
            <Badge className={cn("w-fit mb-2 uppercase text-[9px] font-black tracking-widest border-none", priorityContent.risk === 'high' ? "bg-destructive text-white" : "bg-nysc-green-800 text-white")}>
              {priorityContent.risk === 'high' ? 'Process Critical' : 'Priority Resource'}
            </Badge>
            <CardTitle className="text-2xl font-display tracking-tight leading-none">{priorityContent.title}</CardTitle>
            <CardDescription className="font-bold text-sm text-gray-800 max-w-2xl mt-1 leading-relaxed pr-8 sm:pr-0">
              {priorityContent.desc}
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-6 relative z-10">
            <Link to={priorityContent.searchLink}>
              <Button className={cn("font-bold h-12 rounded-xl shadow-lg transition-all active:scale-95", priorityContent.risk === 'high' ? "bg-destructive hover:bg-red-700 animate-hover-glow" : "bg-nysc-gold hover:bg-amber-700")}>
                View Strategic Guide <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100 bg-white">
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
                <div key={task.id} className="flex items-center gap-3 p-3 border rounded-xl hover:bg-gray-50/50 transition-colors bg-white">
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
                <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 font-bold h-11">
                  Open Toolkit <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-100 bg-white">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-[10px] font-black uppercase tracking-widest flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4 text-nysc-green-800" /> Deadline Radar
                </CardTitle>
                <Link to="/app/deadlines" className="text-[9px] font-black uppercase text-nysc-green-800 hover:underline">Full View</Link>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {relevantDeadlines.length > 0 ? (
                relevantDeadlines.map(d => (
                  <div key={d.id} className={cn("flex items-center justify-between p-3 border rounded-xl", d.past ? "bg-red-50 border-red-100" : "bg-gray-50/30")}>
                    <p className={cn("text-xs font-bold", d.past ? "text-destructive" : "text-gray-900")}>{d.title}</p>
                    <p className={cn("text-[10px] font-black uppercase", d.past ? "text-destructive" : "text-nysc-gold")}>
                      {d.past ? "Closed" : `${d.diff}d Left`}
                    </p>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 border-2 border-dashed rounded-xl">
                  <Info className="w-6 h-6 text-gray-300 mx-auto mb-2" />
                  <p className="text-[9px] text-muted-foreground font-black uppercase">No Current Phase Deadlines</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}