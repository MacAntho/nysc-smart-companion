import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ShieldAlert, Users, BookOpen, Calendar, MapPin, Plus, Trash2, Edit3, Save, Search } from 'lucide-react';
import { KNOWLEDGE_ARTICLES, DEADLINES, STATE_DATA } from '@/lib/mock-content';
import { toast } from 'sonner';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('knowledge');
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 bg-nysc-green-900 rounded-3xl text-white">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-nysc-gold" />
            <h1 className="text-3xl font-display font-bold">Admin Command Center</h1>
          </div>
          <p className="text-nysc-green-100 font-medium">Manage global content, rules, and system data.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white/10 px-6 py-2 rounded-2xl border border-white/20">
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Global Users</p>
            <p className="text-xl font-bold">1,402</p>
          </div>
        </div>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-white border p-1.5 h-auto rounded-2xl flex flex-wrap gap-2 shadow-sm">
          <TabsTrigger value="knowledge" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
            <BookOpen className="w-4 h-4" /> Articles
          </TabsTrigger>
          <TabsTrigger value="deadlines" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
            <Calendar className="w-4 h-4" /> Deadlines
          </TabsTrigger>
          <TabsTrigger value="states" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
            <MapPin className="w-4 h-4" /> State Intelligence
          </TabsTrigger>
          <TabsTrigger value="users" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
            <Users className="w-4 h-4" /> User Stats
          </TabsTrigger>
        </TabsList>
        <TabsContent value="knowledge">
          <Card className="border-gray-100 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50/50 py-4">
              <div className="space-y-1">
                <CardTitle className="text-lg">Knowledge Base Manager</CardTitle>
                <CardDescription className="text-xs">Publish and edit official guides.</CardDescription>
              </div>
              <Button size="sm" className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-2">
                <Plus className="w-4 h-4" /> New Article
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {KNOWLEDGE_ARTICLES.map(a => (
                  <div key={a.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-lg bg-nysc-green-50 flex items-center justify-center text-nysc-green-800">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{a.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">{a.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-nysc-green-800">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-destructive">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="deadlines">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-100 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Active Calendar</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {DEADLINES.map(d => (
                  <div key={d.id} className="p-4 border rounded-2xl space-y-2 group">
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-bold">{d.title}</p>
                      <Badge variant="outline" className="text-[10px]">{d.stage}</Badge>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <p className="text-xs text-muted-foreground">{d.date}</p>
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-destructive opacity-0 group-hover:opacity-100 transition-opacity">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-gray-100 shadow-sm h-fit">
              <CardHeader>
                <CardTitle className="text-lg">Broadcast New Deadline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Title</label>
                  <Input placeholder="Batch A Registration" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Date</label>
                  <Input type="date" />
                </div>
                <Button className="w-full bg-nysc-green-800 hover:bg-nysc-green-900 font-bold">Schedule Deadline</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="states">
          <div className="text-center py-20 border-2 border-dashed rounded-3xl bg-gray-50/50">
             <MapPin className="w-12 h-12 text-gray-300 mx-auto mb-4" />
             <h3 className="text-lg font-bold">State Content System</h3>
             <p className="text-sm text-muted-foreground max-w-xs mx-auto mb-6">Editing Lagos, Abuja, and 8 other states is currently locked to Core Admins.</p>
             <Button variant="outline" className="border-nysc-green-800 text-nysc-green-800 font-bold">Request Content Access</Button>
          </div>
        </TabsContent>
        <TabsContent value="users">
          <Card className="border-gray-100 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Platform Engagement</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input placeholder="Search user email..." className="pl-9 h-10 text-xs" />
              </div>
            </CardHeader>
            <CardContent>
               <div className="overflow-x-auto">
                 <table className="w-full text-sm text-left">
                   <thead>
                     <tr className="border-b text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                       <th className="pb-4">User Email</th>
                       <th className="pb-4">Stage</th>
                       <th className="pb-4">State</th>
                       <th className="pb-4">Pro</th>
                       <th className="pb-4">Action</th>
                     </tr>
                   </thead>
                   <tbody>
                     {['corper1@gov.ng', 'corper2@gov.ng', 'corper3@gov.ng'].map((u, i) => (
                       <tr key={i} className="border-b last:border-0">
                         <td className="py-4 font-bold">{u}</td>
                         <td className="py-4 capitalize">PPA</td>
                         <td className="py-4">Lagos</td>
                         <td className="py-4 text-nysc-gold font-black">{i === 1 ? 'YES' : 'NO'}</td>
                         <td className="py-4">
                           <Button variant="ghost" size="sm" className="text-nysc-green-800 font-bold">View</Button>
                         </td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
               </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}