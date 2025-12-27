import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, ChevronRight, MapPin, BookOpen, Clock, CloudCheck, LayoutList, Sparkles } from 'lucide-react';
import { JOURNEY_STAGES, DEADLINES, KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import { Link } from 'react-router-dom';
import { formatDistanceToNow, differenceInDays, parseISO } from 'date-fns';
export function DashboardPage() {
  const stageId = useAppStore(s => s.stage);
  const stateName = useAppStore(s => s.stateOfDeployment);
  const completedTasks = useAppStore(s => s.completedTasks);
  const readArticles = useAppStore(s => s.readArticles);
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
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">Corper Dashboard</h1>
          <p className="text-muted-foreground font-medium">Official Command Center: Serving the Nation with Intelligence.</p>
        </div>
        <div className="flex items-center gap-3 text-[11px] font-semibold px-4 py-2 rounded-full bg-white border shadow-sm">
          {isSyncing ? (
            <>
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-muted-foreground uppercase tracking-wider">Syncing Data...</span>
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-sm border-gray-100 hover-glow">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-xl">
                Current Stage: <span className="text-nysc-green-800 capitalize">{stageId}</span>
              </CardTitle>
              <CardDescription className="text-base">Complete your mandatory milestones to progress.</CardDescription>
            </div>
            <CheckCircle className="text-nysc-green-800 w-8 h-8" />
          </CardHeader>
          <CardContent className="pt-6 space-y-8">
            <div className="space-y-3">
              <div className="flex justify-between text-sm font-bold text-nysc-green-900">
                <span className="uppercase tracking-widest">Phase Readiness</span>
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
                    className={`h-9 px-4 text-xs font-bold transition-transform active:scale-95 ${completedTasks.includes(task.id) ? 'text-nysc-green-800 bg-transparent' : 'bg-nysc-green-800 hover:bg-nysc-green-900 shadow-sm'}`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {completedTasks.includes(task.id) ? 'Completed' : 'Complete Task'}
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
                <MapPin className="w-5 h-5 text-nysc-gold" /> {stateName} Hub
              </CardTitle>
              <CardDescription className="text-nysc-green-100 font-medium">Local intelligence for your service area.</CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 space-y-6">
              <div className="space-y-1.5">
                <p className="text-[10px] uppercase tracking-widest text-nysc-green-200 font-bold">Cost Intensity</p>
                <div className="flex gap-1.5 py-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`h-2 w-full rounded-full ${i <= 3 ? 'bg-nysc-gold' : 'bg-nysc-green-900/50'}`} />)}
                </div>
              </div>
              <Link to="/app/state-guide">
                <Button className="w-full bg-white text-nysc-green-800 hover:bg-gray-100 border-none font-bold py-6 text-base">
                  View Full Guide <ChevronRight className="ml-1 w-5 h-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card className="shadow-sm hover:border-nysc-green-800 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <LayoutList className="w-4 h-4 text-nysc-green-800" /> Knowledge Gap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between items-end text-xs">
                  <span className="font-semibold text-muted-foreground">Mastery Level</span>
                  <span className="font-black text-nysc-green-800 text-lg leading-none">{readArticles.length}<span className="text-[10px] text-gray-300 font-normal">/{KNOWLEDGE_ARTICLES.length}</span></span>
                </div>
                <Progress value={readPercent} className="h-2 bg-gray-50" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
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
                      <p className={`text-sm font-black ${daysLeft < 0 ? 'text-destructive' : 'text-nysc-gold'}`}>
                        {daysLeft < 0 ? 'PAST DUE' : `${daysLeft} DAYS LEFT`}
                      </p>
                      <p className="text-[10px] text-muted-foreground flex items-center justify-end gap-1 font-medium">
                        <Clock className="w-2.5 h-2.5" />
                        {d.date}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 px-6 flex flex-col items-center gap-4 bg-gray-50/50 rounded-2xl border-2 border-dashed">
                <Sparkles className="w-12 h-12 text-nysc-gold animate-pulse" />
                <div className="space-y-1">
                  <p className="text-sm font-bold text-gray-900">All Clear, Corper!</p>
                  <p className="text-xs text-muted-foreground max-w-[200px] mx-auto">No immediate deadlines for your current stage. Stay focused!</p>
                </div>
                <Link to="/app/journey">
                  <Button variant="outline" size="sm" className="font-bold text-xs h-8 border-nysc-green-800 text-nysc-green-800">
                    Explore Future Stages
                  </Button>
                </Link>
              </div>
            )}
          </CardContent>
        </Card>
        <Card className="shadow-sm border-gray-100">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 font-display">
              <BookOpen className="w-5 h-5 text-nysc-green-800" /> Essential Survival Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { title: 'Packing List for Camp', link: '/app/knowledge' },
              { title: 'Getting PPA Rejection', link: '/app/knowledge' },
              { title: 'CDS Project Rules', link: '/app/cds' }
            ].map((guide, i) => (
              <Link key={i} to={guide.link} className="flex items-center gap-4 p-4 border rounded-xl hover:border-nysc-green-800 hover:bg-nysc-green-50/10 transition-all group">
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center text-nysc-green-800 font-black text-sm group-hover:bg-nysc-green-800 group-hover:text-white transition-all">
                  0{i+1}
                </div>
                <span className="text-sm font-bold text-gray-900 flex-1">{guide.title}</span>
                <ChevronRight className="w-5 h-5 text-gray-300 transition-transform group-hover:translate-x-1 group-hover:text-nysc-green-800" />
              </Link>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}