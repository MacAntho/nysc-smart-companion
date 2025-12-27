import React from 'react';
import { useAppStore } from '@/lib/store';
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
  CalendarDays,
  Target
} from 'lucide-react';
import { CDS_RESOURCES, JOURNEY_STAGES } from '@/lib/mock-content';
export function CDSToolkitPage() {
  const activeProjectId = useAppStore(s => s.activeProjectId);
  const setActiveProject = useAppStore(s => s.setActiveProject);
  const completedTasks = useAppStore(s => s.completedTasks);
  const activeProject = CDS_RESOURCES.projects.find(p => p.id === activeProjectId);
  // Fake milestones for active project
  const milestones = [
    { id: 'm1', label: 'Proposal Submission' },
    { id: 'm2', label: 'LGI Approval' },
    { id: 'm3', label: 'Implementation Phase' },
    { id: 'm4', label: 'Final Documentation' },
  ];
  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-900">CDS Toolkit</h1>
          <p className="text-muted-foreground">Community Development Service: Leave a lasting legacy.</p>
        </div>
      </header>
      <Tabs defaultValue={activeProjectId ? "diary" : "ideas"} className="space-y-6">
        <TabsList className="bg-white border w-full justify-start overflow-x-auto h-auto p-1">
          <TabsTrigger value="ideas" className="gap-2">
            <Lightbulb className="w-4 h-4" /> Project Ideas
          </TabsTrigger>
          <TabsTrigger value="templates" className="gap-2">
            <FileText className="w-4 h-4" /> Official Templates
          </TabsTrigger>
          <TabsTrigger value="diary" className="gap-2">
            <Briefcase className="w-4 h-4" /> My CDS Diary
          </TabsTrigger>
        </TabsList>
        <TabsContent value="ideas" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CDS_RESOURCES.projects.map((project) => (
              <Card key={project.id} className={`hover:shadow-md transition-shadow ${activeProjectId === project.id ? 'border-nysc-green-500 ring-1 ring-nysc-green-100' : ''}`}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="px-2 py-0.5 rounded-full bg-nysc-green-50 text-nysc-green-800 text-[10px] font-bold uppercase tracking-wider mb-2">
                      {project.category}
                    </div>
                    {activeProjectId === project.id && <CheckCircle2 className="w-4 h-4 text-nysc-green-500" />}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  <Button 
                    onClick={() => setActiveProject(project.id)}
                    variant={activeProjectId === project.id ? "secondary" : "outline"}
                    className="w-full text-nysc-green-800 border-nysc-green-800 hover:bg-nysc-green-50"
                  >
                    {activeProjectId === project.id ? "Active Project" : "Select Project"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mandatory Forms</CardTitle>
              <CardDescription>Download and fill these templates to get your project approved.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {CDS_RESOURCES.templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between py-4 hover:bg-gray-50/50 px-2 transition-colors rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{template.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">{template.type} • {template.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="text-nysc-green-800">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="diary">
          {activeProject ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-nysc-green-800" /> Active: {activeProject.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>Project Progress</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Milestones</h4>
                    {milestones.map((m, i) => (
                      <div key={m.id} className="flex items-center gap-4 p-4 border rounded-xl hover:bg-gray-50 transition-colors">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-nysc-green-500 text-white' : 'bg-gray-100 text-gray-400'}`}>
                          {i === 0 ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                        </div>
                        <span className={`text-sm font-medium ${i === 0 ? 'text-gray-900' : 'text-gray-400'}`}>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-sm">Requirements</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {activeProject.requirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-nysc-green-800" /> {req}
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Button 
                  variant="outline" 
                  className="w-full text-destructive border-destructive hover:bg-destructive/10"
                  onClick={() => setActiveProject(null)}
                >
                  Abandon Project
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 border-2 border-dashed rounded-2xl bg-gray-50">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <Info className="w-8 h-8 text-gray-300" />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-lg">No Active Project</h3>
                <p className="text-sm text-muted-foreground max-w-sm">
                  Choose a project from the "Project Ideas" tab to start tracking your progress.
                </p>
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}