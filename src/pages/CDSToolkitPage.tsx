import React, { useState, useMemo, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from '@/components/ui/dialog';
import {
  Briefcase,
  FileText,
  Lightbulb,
  Download,
  CheckCircle2,
  Sparkles,
  Target,
  ShieldCheck,
  ExternalLink,
  ArrowRight,
  Search,
  Clock,
  Banknote,
  AlertTriangle,
  Users,
  Flag,
  PenTool,
  ClipboardCheck,
  PlayCircle,
  Trophy
} from 'lucide-react';
import { CDS_RESOURCES, JOURNEY_STAGES } from '@/lib/mock-content';
import { cn } from '@/lib/utils';
import { CDSProject } from '@shared/types';
export function CDSToolkitPage() {
  const activeProjectId = useAppStore(s => s.activeProjectId);
  const setActiveProject = useAppStore(s => s.setActiveProject);
  const completedTasks = useAppStore(s => s.completedTasks);
  const [tabValue, setTabValue] = useState<string>("ideas");
  useEffect(() => {
    if (activeProjectId && tabValue !== "diary") {
      setTabValue("diary");
    } else if (!activeProjectId && tabValue === "diary") {
      setTabValue("ideas");
    }
  }, [activeProjectId, tabValue]);
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'low-budget' | 'short-term'>('all');
  const [dialogProject, setDialogProject] = useState<CDSProject | null>(null);
  const filteredProjects = useMemo(() => {
    return CDS_RESOURCES.projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
                            p.category.toLowerCase().includes(search.toLowerCase());
      return matchesSearch;
    });
  }, [search]);
  const activeProject = CDS_RESOURCES.projects.find(p => p.id === activeProjectId);
  // Real dynamic milestones mapped to journey tasks
  const milestones = useMemo(() => {
    const cdsPhase = JOURNEY_STAGES.find(s => s.id === 'cds');
    return cdsPhase?.tasks.map(t => ({
      id: t.id,
      label: t.title,
      isDone: completedTasks.includes(t.id)
    })) || [];
  }, [completedTasks]);
  const progressPercent = useMemo(() => {
    if (milestones.length === 0) return 0;
    const done = milestones.filter(m => m.isDone).length;
    return Math.round((done / milestones.length) * 100);
  }, [milestones]);
  const roadmapSteps = [
    { title: 'Assess', desc: 'Identify Need', icon: Search },
    { title: 'Propose', desc: 'Draft to LGI', icon: PenTool },
    { title: 'Approve', desc: 'Get NYSC Letter', icon: ClipboardCheck },
    { title: 'Execute', desc: 'Build Impact', icon: PlayCircle },
    { title: 'Complete', desc: 'Report & POP', icon: Trophy },
  ];
  const handleEnrollFromDialog = () => {
    if (dialogProject) {
      setActiveProject(dialogProject.id);
      setDialogProject(null);
      setTabValue("diary");
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8 md:py-10 lg:py-12 space-y-8 animate-fade-in">
        <header className="space-y-2">
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">CDS Legacy Hub</h1>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-nysc-gold/10 text-nysc-gold border border-nysc-gold/20">
               <Sparkles className="w-4 h-4" />
               <span className="text-[10px] font-black uppercase tracking-widest">Ideas to Action</span>
            </div>
          </div>
          <p className="text-muted-foreground font-medium max-w-2xl">
            Track your impact from the first community survey to your final commissioning.
          </p>
        </header>
        <Tabs value={tabValue} onValueChange={setTabValue} className="space-y-6">
          <TabsList className="bg-white border w-full sm:w-fit justify-start h-auto p-1.5 gap-2 shadow-sm rounded-xl">
            <TabsTrigger value="ideas" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <Lightbulb className="w-4 h-4" /> Discover Ideas
            </TabsTrigger>
            <TabsTrigger value="templates" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <FileText className="w-4 h-4" /> Official Forms
            </TabsTrigger>
            <TabsTrigger value="diary" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <Briefcase className="w-4 h-4" /> My Active Project
            </TabsTrigger>
          </TabsList>
          <TabsContent value="ideas" className="space-y-8">
            <Card className="border-nysc-green-100 bg-nysc-green-50/20 overflow-hidden shadow-sm">
              <div className="p-6 md:p-8 space-y-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h2 className="text-xl font-display font-bold text-nysc-green-900">Official Execution Roadmap</h2>
                    <p className="text-sm text-nysc-green-800/70 font-medium">Procedural integrity ensures your project counts for POP.</p>
                  </div>
                  <Link to="/app/knowledge?search=execution">
                    <Button className="bg-nysc-green-800 hover:bg-nysc-green-900 shadow-lg shadow-nysc-green-800/20 font-bold gap-2 rounded-xl">
                      View Execution Guide <ExternalLink className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-nysc-green-100 -translate-y-1/2 hidden md:block" />
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                    {roadmapSteps.map((step, idx) => (
                      <div key={idx} className="flex flex-col items-center text-center space-y-3 group">
                        <div className="w-12 h-12 rounded-2xl bg-white border-2 border-nysc-green-100 flex items-center justify-center text-nysc-green-800 shadow-sm group-hover:scale-110 group-hover:border-nysc-green-800 transition-all duration-300">
                           <step.icon className="w-5 h-5" />
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-nysc-green-900">{step.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card key={project.id} className={cn(
                  "hover:shadow-xl transition-all duration-300 border-gray-100 flex flex-col h-full",
                  activeProjectId === project.id ? 'border-nysc-green-800 shadow-md ring-4 ring-nysc-green-50' : ''
                )}>
                  <CardHeader className="pb-3">
                    <Badge variant="outline" className="w-fit px-3 py-1 text-[10px] font-black uppercase tracking-widest border-nysc-green-100 text-nysc-green-800">{project.category}</Badge>
                    <CardTitle className="text-xl mt-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                        <Button variant="outline" className="font-bold border-gray-200" onClick={() => setDialogProject(project)}>Details</Button>
                        <Button
                          onClick={() => {
                            setActiveProject(project.id);
                            setTabValue("diary");
                          }}
                          className={cn("font-bold", activeProjectId === project.id ? 'bg-gray-100' : 'bg-nysc-green-800 hover:bg-nysc-green-900')}
                          disabled={activeProjectId === project.id}
                        >
                          {activeProjectId === project.id ? "Active" : "Enroll"}
                        </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="diary">
            {activeProject ? (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <Card className="lg:col-span-2 border-gray-100 shadow-sm overflow-hidden h-fit">
                  <CardHeader className="bg-nysc-green-800 text-white">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3 font-display"><Target className="w-6 h-6 text-nysc-gold" /> Active Project</CardTitle>
                      <Badge className="bg-white/10 text-white border-none uppercase text-[10px] font-black tracking-widest">
                        {progressPercent < 100 ? 'In Progress' : 'Completed'}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold mt-4">{activeProject.title}</h3>
                  </CardHeader>
                  <CardContent className="pt-8 space-y-10">
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Mastery Level</span>
                        <span className="text-lg font-black text-nysc-green-800">{progressPercent}%</span>
                      </div>
                      <Progress value={progressPercent} className="h-3 bg-gray-100" />
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Milestones (Synced with Journey)</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {milestones.map((m) => (
                          <div key={m.id} className={cn("flex items-center gap-5 p-5 border rounded-2xl transition-all", m.isDone ? 'bg-nysc-green-50 border-nysc-green-200 opacity-100' : 'bg-white opacity-60')}>
                            <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-xs font-black shrink-0", m.isDone ? 'bg-nysc-green-800 text-white' : 'bg-gray-100 text-gray-400')}>
                               {m.isDone ? <CheckCircle2 className="w-5 h-5" /> : null}
                            </div>
                            <span className={cn("text-sm font-bold", m.isDone ? 'text-nysc-green-900' : 'text-gray-500')}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="space-y-6">
                  <Card className="shadow-sm border-gray-100">
                    <CardHeader><CardTitle className="text-xs font-black uppercase tracking-widest">Operational Intel</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm font-bold text-gray-700 leading-snug">Update your progress in the Journey Map to reflect here automatically.</p>
                      <Link to="/app/journey">
                        <Button variant="outline" className="w-full font-bold border-nysc-green-800 text-nysc-green-800">Update Milestones</Button>
                      </Link>
                      <Button variant="ghost" className="w-full font-bold text-destructive hover:bg-red-50" onClick={() => setActiveProject(null)}>Clear Selection</Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 border-2 border-dashed rounded-3xl bg-white shadow-inner">
                <Sparkles className="w-12 h-12 text-gray-300" />
                <div className="space-y-2">
                  <h3 className="font-display font-bold text-2xl text-gray-900">Build Your Legacy</h3>
                  <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">Select a project blueprint from the ideas tab to start your legacy diary.</p>
                </div>
                <Button onClick={() => setTabValue("ideas")} className="bg-nysc-green-800 hover:bg-nysc-green-900 px-8 py-6 font-bold shadow-lg">Discover Ideas <ArrowRight className="ml-2 w-5 h-5" /></Button>
              </div>
            )}
          </TabsContent>
          <TabsContent value="templates" className="space-y-6">
             <div className="divide-y border rounded-2xl overflow-hidden bg-white shadow-sm">
                {CDS_RESOURCES.templates.map((template) => (
                <div key={template.id} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-nysc-green-50 border border-nysc-green-100 flex items-center justify-center text-nysc-green-800"><FileText className="w-6 h-6" /></div>
                        <div>
                        <p className="text-sm font-bold text-gray-900">{template.title}</p>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{template.type} • {template.size}</p>
                        </div>
                    </div>
                    <Button variant="ghost" className="text-nysc-green-800 hover:bg-nysc-green-50 rounded-full h-12 w-12 p-0"><Download className="w-5 h-5" /></Button>
                </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Dialog open={!!dialogProject} onOpenChange={(open) => !open && setDialogProject(null)}>
        <DialogContent className="max-w-xl rounded-3xl p-0 overflow-hidden border-none shadow-2xl">
          {dialogProject && (
            <>
              <DialogHeader className="bg-nysc-green-900 p-8 text-white">
                <Badge className="bg-nysc-gold mb-3 text-white border-none">{dialogProject.category}</Badge>
                <DialogTitle className="text-2xl font-display font-bold">{dialogProject.title}</DialogTitle>
                <DialogDescription className="text-nysc-green-100 mt-2 text-sm leading-relaxed">{dialogProject.description}</DialogDescription>
              </DialogHeader>
              <div className="p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Budget</p>
                    <p className="font-bold text-nysc-green-800">{dialogProject.budget}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Est. Duration</p>
                    <p className="font-bold text-nysc-green-800">{dialogProject.duration}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground border-b pb-1">Mandatory Requirements</h4>
                  <ul className="grid grid-cols-1 gap-2">
                    {dialogProject.requirements.map((req, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-nysc-green-500" /> {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <DialogFooter className="p-6 bg-gray-50 border-t">
                <Button className="w-full h-12 bg-nysc-green-800 hover:bg-nysc-green-900 font-bold rounded-xl" onClick={handleEnrollFromDialog} disabled={activeProjectId === dialogProject.id}>
                  {activeProjectId === dialogProject.id ? "Already Selected" : "Adopt this Blueprint"}
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}