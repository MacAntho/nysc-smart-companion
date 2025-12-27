import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ShieldAlert, Users, BookOpen, Calendar, MapPin, Plus, Trash2, Edit3, Search, Loader2, RefreshCw, UserMinus, ArrowLeft, Eye } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import type { NYSCProfile } from '@shared/types';
import { toast } from 'sonner';
import { format } from 'date-fns';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('knowledge');
  const [users, setUsers] = useState<NYSCProfile[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeToday: 0, proUsers: 0, systemHealth: 'Healthy' });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<NYSCProfile | null>(null);
  const fetchAdminData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const [statsRes, usersRes] = await Promise.all([
        fetch('/api/admin/stats').then(r => r.json()),
        fetch('/api/admin/users').then(r => r.json())
      ]);
      if (statsRes.success) setStats(statsRes.data);
      if (usersRes.success) {
        const sanitizedUsers = (usersRes.data || []).map((u: any) => ({
          ...u,
          completedTasks: Array.isArray(u.completedTasks) ? u.completedTasks : [],
          readArticles: Array.isArray(u.readArticles) ? u.readArticles : [],
          stateOfDeployment: u.stateOfDeployment || 'Not Set',
          updatedAt: u.updatedAt || 0
        })).sort((a: NYSCProfile, b: NYSCProfile) => b.updatedAt - a.updatedAt);
        setUsers(sanitizedUsers);
      }
      if (!silent) toast.success('Platform status synchronized');
    } catch (err) {
      console.error('[ADMIN FETCH ERROR]', err);
      toast.error('Failed to load administrative records');
    } finally {
      setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchAdminData(true);
  }, [fetchAdminData]);
  const filteredUsers = users.filter(u => {
    const q = searchQuery.toLowerCase();
    return (
      (u.id || '').toLowerCase().includes(q) ||
      (u.stateOfDeployment || '').toLowerCase().includes(q) ||
      (u.stage || '').toLowerCase().includes(q)
    );
  });
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 bg-nysc-green-900 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <Link to="/app">
            <Button variant="ghost" size="sm" className="text-nysc-green-100 hover:text-white hover:bg-white/10 -ml-2 mb-2 font-bold h-8 px-2 gap-1 transition-all">
              <ArrowLeft className="w-4 h-4" /> Exit to App
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-nysc-gold" />
            <h1 className="text-2xl font-display font-bold">Admin Command</h1>
          </div>
          <p className="text-nysc-green-100 text-sm font-medium">Monitoring system health and user progression.</p>
        </div>
        <div className="flex flex-wrap gap-3 relative z-10">
          <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10 min-w-[100px]">
            <p className="text-[8px] font-black uppercase tracking-widest opacity-50">Total Enrolled</p>
            <p className="text-lg font-bold">{stats.totalUsers}</p>
          </div>
          <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10 min-w-[100px]">
            <p className="text-[8px] font-black uppercase tracking-widest opacity-50">System</p>
            <p className="text-lg font-bold text-nysc-green-400">{stats.systemHealth}</p>
          </div>
          <Button
            variant="secondary"
            size="icon"
            className="h-10 w-10 rounded-xl bg-white/20 hover:bg-white/30 text-white border-none"
            onClick={() => fetchAdminData()}
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          </Button>
        </div>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <ScrollArea className="w-full">
          <TabsList className="bg-white border p-1 h-auto rounded-xl inline-flex gap-1 shadow-sm">
            <TabsTrigger value="knowledge" className="gap-2 px-6 py-2 font-bold uppercase tracking-widest text-[9px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <BookOpen className="w-3.5 h-3.5" /> Articles
            </TabsTrigger>
            <TabsTrigger value="users" className="gap-2 px-6 py-2 font-bold uppercase tracking-widest text-[9px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <Users className="w-3.5 h-3.5" /> User Directory
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" className="hidden" />
        </ScrollArea>
        <TabsContent value="knowledge">
          <Card className="border-gray-100 shadow-sm overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50/50 py-4 px-6">
              <div className="space-y-0.5">
                <CardTitle className="text-base font-bold">Knowledge Management</CardTitle>
                <CardDescription className="text-xs">Manage official field guides.</CardDescription>
              </div>
              <Button size="sm" className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-1.5 h-9 rounded-lg">
                <Plus className="w-4 h-4" /> New Article
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {KNOWLEDGE_ARTICLES.map(a => (
                  <div key={a.id} className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4 items-center min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-nysc-green-50 flex items-center justify-center text-nysc-green-800 shrink-0 border border-nysc-green-100">
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <div className="truncate">
                        <p className="text-sm font-bold text-gray-900 truncate">{a.title}</p>
                        <p className="text-[9px] text-muted-foreground uppercase tracking-widest font-black">{a.category}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 shrink-0">
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-gray-400 hover:text-nysc-green-800">
                        <Edit3 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg text-gray-400 hover:text-destructive">
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
          <Card className="border-gray-100 shadow-sm overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b bg-gray-50/50 py-4 px-6">
              <div className="space-y-0.5">
                <CardTitle className="text-base font-bold">User Directory</CardTitle>
                <CardDescription className="text-xs">Audit profile progression and status.</CardDescription>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-3.5 h-3.5" />
                <Input
                  placeholder="Filter by State or Stage..."
                  className="pl-9 h-10 text-xs rounded-lg bg-white border-gray-200"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-gray-50/80 border-b">
                    <tr className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      <th className="px-6 py-4">Identity</th>
                      <th className="px-6 py-4">Stage</th>
                      <th className="px-6 py-4">Deployment</th>
                      <th className="px-6 py-4">Last Activity</th>
                      <th className="px-6 py-4 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredUsers.length > 0 ? filteredUsers.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50/50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-gray-900">{u.id}</span>
                            {u.isPro && <Badge className="bg-nysc-gold text-[8px] h-4 font-black">PRO</Badge>}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="outline" className="capitalize text-[10px] font-bold border-gray-200">
                            {u.stage}
                          </Badge>
                        </td>
                        <td className="px-6 py-4 text-xs font-medium text-gray-600">{u.stateOfDeployment}</td>
                        <td className="px-6 py-4 text-xs text-muted-foreground">
                          {u.updatedAt ? format(u.updatedAt, 'MMM d, HH:mm') : 'Never'}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="text-nysc-green-800 font-bold h-8 px-3 rounded-lg hover:bg-nysc-green-50"
                            onClick={() => setSelectedUser(u)}
                          >
                            <Eye className="w-3.5 h-3.5 mr-1.5" /> Audit
                          </Button>
                        </td>
                      </tr>
                    )) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-20 text-center">
                          <div className="flex flex-col items-center gap-2 opacity-30">
                            <UserMinus className="w-10 h-10" />
                            <p className="text-xs font-bold uppercase tracking-widest">No matching users</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="font-display">User Audit: {selectedUser?.id}</DialogTitle>
            <DialogDescription>Full structural state verification.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <AuditItem label="Stage" value={selectedUser?.stage} />
              <AuditItem label="State" value={selectedUser?.stateOfDeployment} />
              <AuditItem label="Tasks Done" value={selectedUser?.completedTasks.length.toString()} />
              <AuditItem label="Articles Read" value={selectedUser?.readArticles.length.toString()} />
            </div>
            <div className="p-4 bg-gray-50 rounded-xl border font-mono text-[10px] overflow-auto max-h-48 whitespace-pre">
              {JSON.stringify(selectedUser, null, 2)}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
function AuditItem({ label, value }: { label: string, value?: string }) {
  return (
    <div className="p-3 bg-gray-50 rounded-xl border border-gray-100">
      <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mb-1">{label}</p>
      <p className="text-xs font-bold text-gray-900 truncate">{value || 'N/A'}</p>
    </div>
  );
}