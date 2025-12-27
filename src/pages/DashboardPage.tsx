import React, { useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle, ChevronRight, MapPin, BookOpen, Clock, CloudCheck, LayoutList } from 'lucide-react';
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
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-900">Corper Dashboard</h1>
          <p className="text-muted-foreground">Welcome to your NYSC command center. Stay on track!</p>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full bg-gray-50 border">
          {isSyncing ? (
            <>
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-muted-foreground">Syncing...</span>
            </>
          ) : (
            <>
              <div className="h-2 w-2 rounded-full bg-nysc-green-500" />
              <span className="text-muted-foreground">
                Synced {lastSynced ? formatDistanceToNow(lastSynced, { addSuffix: true }) : 'never'}
              </span>
            </>
          )}
        </div>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="space-y-1">
              <CardTitle className="text-lg">Current Stage: <span className="text-nysc-green-800 capitalize">{stageId}</span></CardTitle>
              <CardDescription>Complete these tasks to move to the next phase.</CardDescription>
            </div>
            <CheckCircle className="text-nysc-green-500 w-6 h-6" />
          </CardHeader>
          <CardContent className="pt-4 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span>Phase Completion</span>
                <span>{Math.round(progressPercent)}%</span>
              </div>
              <Progress value={progressPercent} className="h-2 bg-nysc-green-50" />
            </div>
            <div className="space-y-3">
              {stageTasks.map(task => (
                <div key={task.id} className="flex items-center gap-3 p-3 border rounded-lg bg-gray-50/50 transition-all hover:border-nysc-green-100">
                  <div className={`w-2 h-2 rounded-full ${completedTasks.includes(task.id) ? 'bg-nysc-green-500' : 'bg-gray-300'}`} />
                  <span className={`text-sm flex-1 ${completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : 'text-gray-700 font-medium'}`}>{task.title}</span>
                  <Button
                    variant={completedTasks.includes(task.id) ? "ghost" : "outline"}
                    size="sm"
                    className={`h-8 px-3 text-xs ${completedTasks.includes(task.id) ? 'text-nysc-green-500 cursor-default' : 'text-nysc-green-800 border-nysc-green-800 hover:bg-nysc-green-50'}`}
                    onClick={() => toggleTask(task.id)}
                  >
                    {completedTasks.includes(task.id) ? 'Completed' : 'Mark Done'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <div className="space-y-6">
          <Card className="bg-nysc-green-900 text-white border-none shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-white">
                <MapPin className="w-5 h-5 text-nysc-gold" /> {stateName} Insights
              </CardTitle>
              <CardDescription className="text-nysc-green-100">Live from your deployment state.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-1">
                <p className="text-xs uppercase tracking-wider text-nysc-green-200 font-semibold">Cost Profile</p>
                <div className="flex gap-1 py-1">
                  {[1,2,3,4,5].map(i => <div key={i} className={`h-1.5 w-4 rounded-full ${i <= 3 ? 'bg-nysc-gold' : 'bg-nysc-green-800'}`} />)}
                </div>
              </div>
              <Link to="/app/state-guide">
                <Button className="w-full bg-nysc-gold hover:bg-amber-600 border-none text-white transition-transform active:scale-95">
                  Full State Guide <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <LayoutList className="w-4 h-4 text-nysc-green-800" /> Knowledge Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span>Articles Read</span>
                  <span className="font-bold">{readArticles.length} / {KNOWLEDGE_ARTICLES.length}</span>
                </div>
                <Progress value={readPercent} className="h-1.5" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-nysc-green-800" /> Deadline Radar
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {relevantDeadlines.length > 0 ? (
              relevantDeadlines.map(d => {
                const daysLeft = differenceInDays(parseISO(d.date), new Date());
                return (
                  <div key={d.id} className="flex items-center justify-between p-3 border-b last:border-0 hover:bg-gray-50 transition-colors">
                    <div className="space-y-0.5">
                      <p className="text-sm font-semibold">{d.title}</p>
                      <p className="text-xs text-muted-foreground capitalize">{d.stage}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-sm font-bold ${daysLeft < 0 ? 'text-destructive' : 'text-nysc-gold'}`}>
                        {daysLeft < 0 ? 'Past Due' : `${daysLeft} days left`}
                      </p>
                      <p className="text-[10px] text-muted-foreground flex items-center justify-end gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {d.date}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-10 flex flex-col items-center gap-2">
                <CloudCheck className="w-10 h-10 text-gray-200" />
                <p className="text-sm text-muted-foreground font-medium">Clear Skies!</p>
              </div>
            )}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-nysc-green-800" /> Top Guides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              {[
                { title: 'Packing List for Camp', link: '/app/knowledge' },
                { title: 'Getting PPA Rejection', link: '/app/knowledge' },
                { title: 'CDS Project Rules', link: '/app/cds' }
              ].map((guide, i) => (
                <Link key={i} to={guide.link} className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors group">
                  <div className="w-8 h-8 rounded bg-nysc-green-50 flex items-center justify-center text-nysc-green-800 font-bold text-xs group-hover:bg-nysc-green-800 group-hover:text-white transition-colors">
                    0{i+1}
                  </div>
                  <span className="text-sm font-medium flex-1">{guide.title}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}