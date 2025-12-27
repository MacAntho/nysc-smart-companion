import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { ShieldAlert, Users, BookOpen, Trash2, Edit3, Search, RefreshCw, ArrowLeft, Eye, Copy, Check, GraduationCap, Trophy, LayoutGrid, Clock, Info } from 'lucide-react';
import { KNOWLEDGE_ARTICLES } from '@/lib/mock-content';
import type { NYSCProfile, NYSCStage } from '@shared/types';
import { toast } from 'sonner';
import { format, isValid } from 'date-fns';
export function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');
  const [users, setUsers] = useState<NYSCProfile[]>([]);
  const [stats, setStats] = useState({ totalUsers: 0, activeToday: 0, proUsers: 0, systemHealth: 'Healthy' });
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<NYSCProfile | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const fetchAdminData = useCallback(async (silent = false) => {
    if (!silent) setIsLoading(true);
    try {
      const [statsRes, usersRes] = await Promise.all([
        fetch('/api/admin/stats').then(r => r.json()),
        fetch('/api/admin/users').then(r => r.json())
      ]);
      if (statsRes.success) setStats(statsRes.data);
      if (usersRes.success) {
        const sanitizedUsers: NYSCProfile[] = (usersRes.data || []).map((u: any) => ({
          id: u.id || '',
          stage: (u.stage as NYSCStage) || 'prospective',
          stateOfDeployment: u.stateOfDeployment || 'Unset',
          completedTasks: Array.isArray(u.completedTasks) ? u.completedTasks : [],
          readArticles: Array.isArray(u.readArticles) ? u.readArticles : [],
          activeProjectId: u.activeProjectId || null,
          isOnboarded: u.isOnboarded ?? false,
          isPro: u.isPro ?? false,
          updatedAt: Number(u.updatedAt) || 0
        })).sort((a: NYSCProfile, b: NYSCProfile) => (b.updatedAt || 0) - (a.updatedAt || 0));
        setUsers(sanitizedUsers);
      }
      if (!silent) toast.success('Records Synced');
    } catch (err) {
      console.error('[ADMIN FETCH ERROR]', err);
      toast.error('System synchronization failed');
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
  const copyToClipboard = (id: string) => {
    if (!id) return;
    navigator.clipboard.writeText(id);
    setCopiedId(id);
    toast.success('ID Copied');
    setTimeout(() => setCopiedId(null), 2000);
  };
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 p-8 bg-nysc-green-900 rounded-3xl text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="space-y-2 relative z-10">
          <Link to="/app">
            <Button variant="ghost" size="sm" className="text-nysc-green-100 hover:text-white hover:bg-white/10 -ml-2 mb-2 font-bold h-8 px-2 gap-1">
              <ArrowLeft className="w-4 h-4" /> Return to Dashboard
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="p-2 bg-nysc-gold rounded-lg shadow-inner">
              <ShieldAlert className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-display font-bold">Admin Oversight</h1>
          </div>
          <p className="text-nysc-green-100 text-sm font-medium">Monitoring system health and member progression.</p>
        </div>
        <div className="flex flex-wrap gap-4 relative z-10">
          <div className="grid grid-cols-2 gap-3">
             <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10 min-w-[120px]">
              <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Members</p>
              <p className="text-xl font-bold">{stats.totalUsers}</p>
            </div>
            <div className="bg-white/10 px-4 py-2 rounded-xl border border-white/10 min-w-[120px]">
              <p className="text-[8px] font-black uppercase tracking-widest opacity-60">Pro Tier</p>
              <p className="text-xl font-bold text-nysc-gold">{stats.proUsers}</p>
            </div>
          </div>
          <Button
            variant="secondary"
            className="h-full px-4 rounded-xl bg-white/20 hover:bg-white/30 text-white border-none transition-all active:scale-95"
            onClick={() => fetchAdminData()}
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Sync
          </Button>
        </div>
      </header>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <TabsList className="bg-white border p-1 h-auto rounded-xl flex gap-1 shadow-sm w-fit">
            <TabsTrigger value="users" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[9px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <Users className="w-3.5 h-3.5" /> Registry
            </TabsTrigger>
            <TabsTrigger value="knowledge" className="gap-2 px-6 py-2.5 font-bold uppercase tracking-widest text-[9px] rounded-lg data-[state=active]:bg-nysc-green-800 data-[state=active]:text-white">
              <BookOpen className="w-3.5 h-3.5" /> Archives
            </TabsTrigger>
          </TabsList>
          {activeTab === 'users' && (
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search ID or Phase..."
                className="pl-10 h-11 text-xs rounded-xl bg-white border-gray-200 focus-visible:ring-nysc-green-800"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}
        </div>
        <TabsContent value="users">
          <Card className="border-gray-100 shadow-sm overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="bg-gray-50/80 border-b">
                    <tr className="text-[9px] font-black uppercase tracking-[0.2em] text-muted-foreground">
                      <th className="px-6 py-5">Member ID</th>
                      <th className="px-6 py-5">Phase</th>
                      <th className="px-6 py-5">Location</th>
                      <th className="px-6 py-5">Sync Time</th>
                      <th className="px-6 py-5 text-right">Audit</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {filteredUsers.length > 0 ? filteredUsers.map((u) => {
                      const dateObj = new Date(u.updatedAt);
                      const isDateValid = isValid(dateObj) && u.updatedAt > 0;
                      return (
                        <tr key={u.id} className="hover:bg-gray-50/50 transition-colors group">
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-nysc-green-50 flex items-center justify-center text-nysc-green-800 text-[10px] font-bold border border-nysc-green-100">
                                 {(u.id || '??').slice(0, 2).toUpperCase()}
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="font-bold text-gray-900 font-mono text-xs">{u.id || 'N/A'}</span>
                                <button
                                  onClick={() => copyToClipboard(u.id)}
                                  className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-nysc-green-800 transition-all"
                                >
                                  {copiedId === u.id ? <Check className="w-3 h-3 text-nysc-green-500" /> : <Copy className="w-3 h-3" />}
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <Badge variant="outline" className="capitalize text-[10px] font-bold border-gray-200 bg-white">
                              {u.stage}
                            </Badge>
                          </td>
                          <td className="px-6 py-4 text-xs font-bold text-gray-600">{u.stateOfDeployment}</td>
                          <td className="px-6 py-4 text-[11px] font-semibold text-muted-foreground">
                            {isDateValid ? format(dateObj, 'MMM d, HH:mm') : 'Uninitialized'}
                          </td>
                          <td className="px-6 py-4 text-right">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-nysc-green-800 font-bold h-9 px-4 rounded-xl hover:bg-nysc-green-50 transition-colors"
                              onClick={() => setSelectedUser(u)}
                            >
                              <Eye className="w-4 h-4 mr-2" /> Inspect
                            </Button>
                          </td>
                        </tr>
                      );
                    }) : (
                      <tr>
                        <td colSpan={5} className="px-6 py-24 text-center">
                          <div className="flex flex-col items-center gap-4 opacity-40">
                            <LayoutGrid className="w-12 h-12 text-gray-300" />
                            <p className="text-xs font-bold uppercase tracking-[0.3em]">No registry matches</p>
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
        <TabsContent value="knowledge">
          <Card className="border-gray-100 shadow-sm overflow-hidden rounded-2xl">
            <CardHeader className="flex flex-row items-center justify-between border-b bg-gray-50/50 py-5 px-6">
              <div className="space-y-1">
                <CardTitle className="text-lg font-bold">Protocol Archive</CardTitle>
                <CardDescription className="text-sm font-medium">Core service guides and official bye-laws.</CardDescription>
              </div>
              <Button size="sm" className="bg-nysc-green-800 hover:bg-nysc-green-900 gap-2 h-10 px-4 rounded-xl font-bold shadow-lg">
                <GraduationCap className="w-4 h-4" /> Add Protocol
              </Button>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-gray-100">
                {KNOWLEDGE_ARTICLES.map(a => (
                  <div key={a.id} className="flex items-center justify-between p-5 hover:bg-gray-50 transition-colors">
                    <div className="flex gap-4 items-center">
                      <div className="w-11 h-11 rounded-xl bg-nysc-green-50 flex items-center justify-center text-nysc-green-800 shrink-0 border border-nysc-green-100 shadow-sm">
                        <BookOpen className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-gray-900">{a.title}</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest font-black flex items-center gap-2">
                           {a.category}
                           {a.metadata?.risk === 'high' && <span className="text-destructive">• Risk Warning</span>}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-gray-400 hover:text-nysc-green-800"><Edit3 className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl text-gray-400 hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      <Dialog open={!!selectedUser} onOpenChange={(o) => !o && setSelectedUser(null)}>
        <DialogContent className="max-w-md rounded-3xl border-none shadow-2xl p-0 overflow-hidden">
          {selectedUser && (
            <>
              <DialogHeader className="p-8 bg-nysc-green-900 text-white relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                <div className="relative z-10 flex items-center justify-between">
                  <DialogTitle className="font-display text-2xl font-bold">Profile Audit</DialogTitle>
                  {selectedUser.isPro && <Badge className="bg-nysc-gold text-white font-black text-[9px]">PRO</Badge>}
                </div>
                <DialogDescription className="text-nysc-green-200 font-mono text-xs font-bold mt-2 relative z-10">
                  ID: {selectedUser.id}
                </DialogDescription>
              </DialogHeader>
              <div className="p-8 space-y-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-nysc-green-800 mb-1">
                      <Trophy className="w-3.5 h-3.5" />
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Phase</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 truncate capitalize">{selectedUser.stage}</p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 text-nysc-green-800 mb-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <p className="text-[9px] font-black uppercase tracking-widest opacity-60">Location</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 truncate capitalize">{selectedUser.stateOfDeployment}</p>
                  </div>
                </div>
                {!selectedUser.isOnboarded ? (
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex items-center gap-3">
                    <Info className="w-5 h-5 text-amber-600" />
                    <p className="text-xs font-bold text-amber-900">This member has not completed the onboarding process.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Progression Node</p>
                    <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 font-mono text-[10px] overflow-auto max-h-48 whitespace-pre text-gray-700">
                      {JSON.stringify(selectedUser, null, 2)}
                    </div>
                  </div>
                )}
              </div>
              <div className="p-6 bg-gray-50 border-t flex justify-end gap-3">
                <Button variant="outline" onClick={() => setSelectedUser(null)} className="font-bold rounded-xl border-gray-200">Dismiss</Button>
                <Button className="bg-nysc-green-800 hover:bg-nysc-green-900 font-bold rounded-xl" onClick={() => copyToClipboard(selectedUser.id)}>
                  Copy Identity
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}