import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ShieldAlert, Users, BookOpen, Calendar, MapPin, Plus, Trash2, Edit3, Search, Loader2, RefreshCw, UserMinus, ArrowLeft } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import type { NYSCProfile } from '@shared/types';
import { toast } from 'sonner';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [users, setUsers] = useState<NYSCProfile[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeToday: 0, proUsers: 0, systemHealth: 'Healthy' });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const fetchAdminData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const [statsRes, usersRes] = await Promise.all([
        fetch('/api/admin/stats').then(r => r.json()),
        fetch('/api/admin/users').then(r => r.json())
      ]);
      if (statsRes.success) setStats(statsRes.data);
      if (usersRes.success) {
        // Ensure every user has a valid array structure for tasks/articles and safe sort
        const sanitizedUsers = (usersRes.data || []).map((u: any) => ({
          ...u,
          completedTasks: Array.isArray(u.completedTasks) ? u.completedTasks : [],
          readArticles: Array.isArray(u.readArticles) ? u.readArticles : [],
          stateOfDeployment: u.stateOfDeployment || 'N/A',
          updatedAt: u.updatedAt || 0
        })).sort((a: NYSCProfile, b: NYSCProfile) => b.updatedAt - a.updatedAt);
        setUsers(sanitizedUsers);
      }
      if (!silent) toast.success('Administrative records synchronized');
    } catch (err) {
      console.error('[ADMIN FETCH ERROR]', err);
      toast.error('Failed to load administrative data');
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchAdminData(true);
  }, [fetchAdminData]);
  const filteredUsers = users.filter(u => {
    const q = searchQuery.toLowerCase();
    const idMatch = (u.id || '').toLowerCase().includes(q);
    const stateMatch = (u.stateOfDeployment || '').toLowerCase().includes(q);
    const stageMatch = (u.stage || '').toLowerCase().includes(q);
    return idMatch || stateMatch || stageMatch;
  });
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 md:p-10 bg-nysc-green-900 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
        <div className="space-y-3 relative z-10">
          <Link to="/app">
            <Button variant="ghost" size="sm" className="text-nysc-green-100 hover:text-white hover:bg-white/10 -ml-2 mb-2 font-bold h-8 px-2 gap-1 transition-all">
              <ArrowLeft className="w-4 h-4" /> Back to Command Center
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-nysc-gold" />
            <h1 className="text-2xl md:text-3xl font-display font-bold">Admin Command Center</h1>
          </div>
          <p className="text-nysc-green-100 font-medium">Global platform control and content management.</p>
        </div>
        <div className="flex flex-wrap gap-4 relative z-10">
          <div className="bg-white/10 px-5 py-2 rounded-2xl border border-white/20 shrink-0">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Global Users</p>
            <p className="text-xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-white/10 px-5 py-2 rounded-2xl border border-white/20 shrink-0">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Health</p>
            <p className="text-xl font-bold">{stats.systemHealth}</p>
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="h-12 w-12 rounded-2xl bg-white/20 hover:bg-white/30 text-white border-none transition-all active:scale-90"
            onClick={() => fetchAdminData()}
            disabled={isLoading}
          >
            <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <ScrollArea className="w-full">
          <TabsList className="bg-white border p-1.5 h-auto rounded-2xl inline-flex gap-2 shadow-sm min-w-full">
            <TabsTrigger value="knowledge" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white whitespace-nowrap">
              <BookOpen className="w-4 h-4" /> Articles
            </TabsTrigger>
            <TabsTrigger value="deadlines" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white whitespace-nowrap">
              <Calendar className="w-4 h-4" /> Deadlines
            </TabsTrigger>
            <TabsTrigger value="states" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white whitespace-nowrap">
              <MapPin className="w-4 h-4" /> State Intelligence
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[10px] rounded-xl data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white whitespace-nowrap">
              <Users className="w-4 h-4" /> User Stats
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
        <TabsContent value="knowledge">
          <Card className="border-gray-100 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50/50 py-4 px-4 md:px-6">
              <div className="space-y-1">
                <CardTitle className="text-lg">Knowledge Base Manager</CardTitle>
                <CardDescription className="text-xs">Publish and edit official guides.</CardDescription>
              </div>
              <Button size="sm" className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-2 rounded-xl h-10 px-4">
                <Plus className="w-4 h-4" /> New Article
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {KNOWLEDGE_ARTICLES.map(a => (
                  <div key={a.id} className="flex items-center justify-between p-4 md:p-6 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4 items-center overflow-hidden">
                      <div className="w-10 h-10 rounded-lg bg-nysc-green-50 flex items-center justify-center text-nysc-green-800 shrink-0">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-bold text-gray-900 truncate">{a.title}</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-widest">{a.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-nysc-green-800 transition-colors">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full text-gray-400 hover:text-destructive transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="users">
          <Card className="border-gray-100 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b bg-gray-50/50 py-4 px-6">
              <div className="space-y-1">
                <CardTitle className="text-lg">Platform Engagement</CardTitle>
                <CardDescription className="text-xs">Real-time user synchronization active.</CardDescription>
              </div>
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search by ID, State, or Stage..."
                  className="pl-9 h-11 text-sm rounded-xl bg-white border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="px-0">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                  <Loader2 className="w-10 h-10 animate-spin text-nysc-green-800 opacity-50" />
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground animate-pulse">Syncing Secure Database...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50/50 border-b">
                      <tr className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <th className="px-6 py-4">User Identity</th>
                        <th className="px-6 py-4">Stage</th>
                        <th className="px-6 py-4">Deployment</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4 text-center">Onboarded</th>
                        <th className="px-6 py-4 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length > 0 ? filteredUsers.map((u) => (
                        <tr key={u.id} className="border-b last:border-0 hover:bg-gray-50/30 transition-colors">
                          <td className="px-6 py-4 font-bold text-nysc-green-900 truncate max-w-[120px]">{u.id}</td>
                          <td className="px-6 py-4">
                            <Badge variant="outline" className="capitalize text-[10px] font-bold border-gray-200 bg-white">
                              {u.stage || 'N/A'}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-xs font-medium text-gray-600">{u.stateOfDeployment}</td>
                          <td className="px-6 py-4">
                            {u.isPro ? (
                              <Badge className="bg-nysc-gold text-white text-[9px] font-black px-2 py-0.5 rounded-md">PRO</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-[9px] font-black px-2 py-0.5 rounded-md text-gray-400">STD</Badge>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            <Badge variant={u.isOnboarded ? "outline" : "secondary"} className={u.isOnboarded ? "border-nysc-green-800 text-nysc-green-800 text-[9px] font-bold" : "text-[9px] font-bold opacity-40"}>
                              {u.isOnboarded ? 'YES' : 'NO'}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-nysc-green-800 font-bold h-8 px-4 rounded-lg hover:bg-nysc-green-50 transition-colors">
                              Audit
                            </Button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-24 text-center">
                            <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
                              <UserMinus className="w-12 h-12 opacity-20" />
                              <div className="space-y-1">
                                <p className="text-sm font-bold text-gray-900">No matching records</p>
                                <p className="text-xs font-medium">Try refining your search query or check the connection.</p>
                              </div>
                              <Button variant="outline" size="sm" onClick={() => setSearchQuery('')} className="mt-2 font-bold h-9 px-6 rounded-xl">
                                Clear Search
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}