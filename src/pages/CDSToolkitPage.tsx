import React from 'react';
import { useAppStore } from '@/lib/store';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Briefcase,
  FileText,
  Lightbulb,
  Download,
  CheckCircle2,
  Info,
  Sparkles,
  Target,
  ShieldCheck,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import { CDS_RESOURCES } from '@/lib/mock-content';
export function CDSToolkitPage() {
  const activeProjectId = useAppStore(s => s.activeProjectId);
  const setActiveProject = useAppStore(s => s.setActiveProject);
  const readArticles = useAppStore(s => s.readArticles);
  const activeProject = CDS_RESOURCES.projects.find(p => p.id === activeProjectId);
  const milestones = [
    { id: 'm1', label: 'Proposal Submission' },
    { id: 'm2', label: 'LGI Approval' },
    { id: 'm3', label: 'Implementation Phase' },
    { id: 'm4', label: 'Final Documentation' },
  ];
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">CDS Resource Hub</h1>
        <p className="text-muted-foreground font-medium">Community Development Service: Build your legacy, serve your community.</p>
      </header>
      <Tabs defaultValue={activeProjectId ? "diary" : "ideas"} className="space-y-6">
        <TabsList className="bg-white border w-full justify-start h-auto p-1.5 gap-2 shadow-sm rounded-xl">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CDS_RESOURCES.projects.map((project) => (
              <Card key={project.id} className={`hover-glow group transition-all duration-300 border-gray-100 ${activeProjectId === project.id ? 'border-nysc-green-800 shadow-md ring-4 ring-nysc-green-50' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="px-3 py-1 rounded-full bg-nysc-green-50 text-nysc-green-800 text-[10px] font-black uppercase tracking-widest">
                      {project.category}
                    </div>
                    {activeProjectId === project.id && <CheckCircle2 className="w-5 h-5 text-nysc-green-800" />}
                  </div>
                  <CardTitle className="text-xl group-hover:text-nysc-green-800 transition-colors">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-gray-600 font-medium leading-relaxed">
                    {project.description}
                  </p>
                  <Button
                    onClick={() => setActiveProject(project.id)}
                    variant={activeProjectId === project.id ? "secondary" : "default"}
                    className={`w-full font-bold py-6 ${activeProjectId === project.id ? 'bg-gray-100' : 'bg-nysc-green-800 hover:bg-nysc-green-900 shadow-md transition-transform active:scale-95'}`}
                  >
                    {activeProjectId === project.id ? "Already Enrolled" : "Enroll in this Project"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-6">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl font-display">Approval Documentation</CardTitle>
              <CardDescription className="font-medium">Download these standardized templates to formalize your CDS project.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-4">
                <div className="p-2 bg-amber-100 rounded-lg shrink-0">
                  <ShieldCheck className="w-5 h-5 text-amber-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-widest text-amber-800">Operational Warning</p>
                  <p className="text-xs text-amber-900 font-medium leading-relaxed">
                    Ensure you follow the official NYSC Project Approval Lifecycle before committing any funds. Starting a project without a formal Letter of Approval from the LGI is a disciplinary offense.
                  </p>
                  <Link to="/app/knowledge?q=cds" className="inline-flex items-center gap-1.5 text-xs font-bold text-nysc-green-800 hover:underline mt-2">
                    Read Official CDS Guide <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-4 px-1">LGI / Zonal Standardized Forms</h4>
              <div className="divide-y border rounded-2xl overflow-hidden bg-gray-50/30">
                {CDS_RESOURCES.templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between p-5 hover:bg-white transition-colors group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-nysc-green-800 shadow-sm group-hover:scale-110 transition-transform">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{template.title}</p>
                        <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">{template.type} • {template.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-nysc-green-800 hover:bg-nysc-green-50 hover:text-nysc-green-900 rounded-full h-12 w-12 p-0">
                      <Download className="w-5 h-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="diary">
          {activeProject ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-gray-100 shadow-sm overflow-hidden">
                <CardHeader className="bg-nysc-green-800 text-white">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-3 font-display">
                      <Target className="w-6 h-6 text-nysc-gold" /> Active Project
                    </CardTitle>
                    <div className="px-3 py-1 rounded-full bg-white/10 text-[10px] font-black uppercase tracking-widest">
                      In Progress
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{activeProject.title}</h3>
                </CardHeader>
                <CardContent className="pt-8 space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Lifecycle Progress</span>
                      <span className="text-lg font-black text-nysc-green-800">25%</span>
                    </div>
                    <Progress value={25} className="h-3 bg-gray-100" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Project Roadmap</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {milestones.map((m, i) => (
                        <div key={m.id} className={`flex items-center gap-5 p-5 border rounded-2xl transition-all ${i === 0 ? 'bg-nysc-green-50 border-nysc-green-200' : 'bg-white opacity-60'}`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-black ${i === 0 ? 'bg-nysc-green-800 text-white' : 'bg-gray-100 text-gray-400'}`}>
                            {i === 0 ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                          </div>
                          <span className={`text-sm font-bold ${i === 0 ? 'text-nysc-green-900' : 'text-gray-400'}`}>{m.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="shadow-sm border-gray-100">
                  <CardHeader>
                    <CardTitle className="text-sm font-black uppercase tracking-widest">Mandatory Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {activeProject.requirements.map((req, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-nysc-green-800 mt-1.5 shrink-0" />
                        <span className="text-xs font-bold text-gray-700 leading-tight">{req}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Button
                  variant="outline"
                  className="w-full font-bold text-destructive border-destructive hover:bg-destructive/5 py-6 rounded-xl"
                  onClick={() => setActiveProject(null)}
                >
                  Withdraw Project Proposal
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center space-y-6 border-2 border-dashed rounded-3xl bg-white shadow-inner">
              <div className="w-20 h-20 rounded-full bg-gray-50 flex items-center justify-center border shadow-sm group">
                <Sparkles className="w-10 h-10 text-gray-300 group-hover:text-nysc-gold transition-colors duration-500" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display font-bold text-2xl text-gray-900">Start Your Legacy</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto font-medium">
                  You haven't selected an active CDS project yet. Every great service year ends with a project that helps others.
                </p>
              </div>
              <Button onClick={() => {
                const trigger = document.querySelector('[value="ideas"]') as HTMLElement;
                trigger?.click();
              }} className="bg-nysc-green-800 hover:bg-nysc-green-900 px-8 py-6 font-bold shadow-lg shadow-nysc-green-800/20 group">
                Browse Project Ideas <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}