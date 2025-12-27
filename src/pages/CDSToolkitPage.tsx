import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Briefcase, 
  FileText, 
  Lightbulb, 
  Download, 
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { CDS_RESOURCES } from '@/lib/mock-content';
export function CDSToolkitPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-900">CDS Toolkit</h1>
          <p className="text-muted-foreground">Community Development Service: Your chance to impact lives.</p>
        </div>
        <Button className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-2">
          <CheckCircle2 className="w-4 h-4" /> Start New Project
        </Button>
      </header>
      <Tabs defaultValue="ideas" className="space-y-6">
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
              <Card key={project.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="px-2 py-0.5 rounded-full bg-nysc-green-50 text-nysc-green-800 text-[10px] font-bold uppercase tracking-wider w-fit mb-2">
                    {project.category}
                  </div>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-tight">Key Requirements:</p>
                    <ul className="text-xs space-y-1">
                      {project.requirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-1.5 text-muted-foreground">
                          <div className="w-1 h-1 rounded-full bg-nysc-green-800" /> {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button variant="outline" className="w-full text-nysc-green-800 border-nysc-green-800 hover:bg-nysc-green-50">
                    View Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="templates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mandatory Forms & Documents</CardTitle>
              <CardDescription>Download and fill these templates to get your project approved.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="divide-y">
                {CDS_RESOURCES.templates.map((template) => (
                  <div key={template.id} className="flex items-center justify-between py-4 group hover:bg-gray-50/50 px-2 transition-colors rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{template.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase">{template.type} • {template.size}</p>
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" className="hover:bg-nysc-green-50 text-nysc-green-800">
                      <Download className="w-4 h-4 mr-1" /> Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="diary">
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-4 border-2 border-dashed rounded-2xl bg-gray-50">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <Info className="w-8 h-8 text-gray-300" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-lg">No Ongoing Projects</h3>
              <p className="text-sm text-muted-foreground max-w-sm">
                You haven't logged any project activity yet. Start by browsing project ideas or submitting a proposal.
              </p>
            </div>
            <Button className="bg-nysc-green-800 hover:bg-nysc-green-900">
              Browse Ideas
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}