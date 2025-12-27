import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { ShieldAlert, Users, BookOpen, Calendar, MapPin, Plus, Trash2, Edit3, Search, Loader2 } from 'lucide-react';
import { KNOWLEDGE_ARTICLES, DEADLINES } from '@/lib/mock-content';
import type { NYSCProfile } from '@shared/types';
import { toast } from 'sonner';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [users, setUsers] = useState<NYSCProfile[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeToday: 0, proUsers: 0, systemHealth: 'Loading...' });
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchAdminData = async () => {
      setLoadingUsers(true);
      try {
        const [statsRes, usersRes] = await Promise.all([
          fetch('/api/admin/stats').then(r => r.json()),
          fetch('/api/admin/users').then(r => r.json())
        ]);
        if (statsRes.success) setStats(statsRes.data);
        if (usersRes.success) setUsers(usersRes.data);
      } catch (err) {
        toast.error('Failed to load administrative data');
      } finally {
        setLoadingUsers(false);
      }
    };
    fetchAdminData();
  }, []);
  const filteredUsers = users.filter(u => 
    u.id.toLowerCase().includes(searchQuery.toLowerCase()) || 
    u.stateOfDeployment.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-6 md:p-10 bg-nysc-green-900 rounded-3xl text-white shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-nysc-gold" />
            <h1 className="text-2xl md:text-3xl font-display font-bold">Admin Command Center</h1>
          </div>
          <p className="text-nysc-green-100 font-medium">Global platform control and content management.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white/10 px-5 py-2 rounded-2xl border border-white/20 shrink-0">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Global Users</p>
            <p className="text-xl font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-white/10 px-5 py-2 rounded-2xl border border-white/20 shrink-0">
            <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Health</p>
            <p className="text-xl font-bold">{stats.systemHealth}</p>
          </div>
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
              <Button size="sm" className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-2 rounded-xl">
                <Plus className="w-4 h-4" /> New
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
        <TabsContent value="users">
          <Card className="border-gray-100 shadow-sm overflow-hidden">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <CardTitle className="text-lg">Platform Engagement</CardTitle>
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search by ID or State..." 
                  className="pl-9 h-10 text-xs rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="px-0">
              {loadingUsers ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4">
                  <Loader2 className="w-8 h-8 animate-spin text-nysc-green-800" />
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Retrieving Secure Records...</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50/50">
                      <tr className="border-b text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <th className="px-6 py-4">User ID</th>
                        <th className="px-6 py-4">Stage</th>
                        <th className="px-6 py-4">State</th>
                        <th className="px-6 py-4">Status</th>
                        <th className="px-6 py-4">Onboarded</th>
                        <th className="px-6 py-4">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredUsers.length > 0 ? filteredUsers.map((u) => (
                        <tr key={u.id} className="border-b last:border-0 hover:bg-gray-50/30">
                          <td className="px-6 py-4 font-bold text-nysc-green-900 truncate max-w-[120px]">{u.id}</td>
                          <td className="px-6 py-4 capitalize text-xs font-semibold">{u.stage}</td>
                          <td className="px-6 py-4 text-xs">{u.stateOfDeployment || 'Not Set'}</td>
                          <td className="px-6 py-4">
                            {u.isPro ? (
                              <Badge className="bg-nysc-gold text-white text-[9px] font-black">PRO</Badge>
                            ) : (
                              <Badge variant="secondary" className="text-[9px] font-black">STD</Badge>
                            )}
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant={u.isOnboarded ? "outline" : "secondary"} className={u.isOnboarded ? "border-nysc-green-800 text-nysc-green-800 text-[9px]" : "text-[9px]"}>
                              {u.isOnboarded ? 'YES' : 'NO'}
                            </Badge>
                          </td>
                          <td className="px-6 py-4">
                            <Button variant="ghost" size="sm" className="text-nysc-green-800 font-bold h-8 px-2">Manage</Button>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={6} className="px-6 py-20 text-center text-muted-foreground font-medium italic">
                            No registered users matching criteria.
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
        {/* Other Tabs omitted for brevity as they haven't changed */}
      </Tabs>
    </div>
  );
}