import React, { useMemo, useState, useEffect } from 'react';
import { useAppStore } from '@/lib/store';
import { STATE_DATA, NIGERIAN_STATES } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { MapPin, Tent, CreditCard, ShieldAlert, TrendingUp, Sparkles, AlertCircle, ArrowRight, Lightbulb, Briefcase, Info } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
export function StateGuidePage() {
  const profileState = useAppStore(s => s.stateOfDeployment);
  const [selectedState, setSelectedState] = useState<string>(profileState || '');
  // Keep internal selection synced if profile state changes (initial load)
  useEffect(() => {
    if (profileState && !selectedState) {
      setSelectedState(profileState);
    }
  }, [profileState, selectedState]);
  const data = useMemo(() => {
    if (!selectedState) return null;
    return STATE_DATA[selectedState] || STATE_DATA['DEFAULT'];
  }, [selectedState]);
  const chartData = useMemo(() => {
    const fallbackMetrics = STATE_DATA['DEFAULT'].metrics;
    const activeMetrics = data?.metrics || fallbackMetrics;
    const getSafeNum = (val: any, fallback: number) => {
      const n = Number(val);
      return isNaN(n) || n < 0 ? fallback : n;
    };
    return [
      { name: 'Rent', amount: getSafeNum(activeMetrics.rent, 120000), avg: 180000 },
      { name: 'Food', amount: getSafeNum(activeMetrics.food, 25000), avg: 35000 },
      { name: 'Transport', amount: getSafeNum(activeMetrics.transport, 15000), avg: 20000 },
    ];
  }, [data]);
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 bg-white border rounded-2xl shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-nysc-green-800 flex items-center justify-center text-white shadow-lg shrink-0">
            <MapPin className="w-7 h-7" />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-display font-bold text-nysc-green-800 tracking-tight">
              {selectedState || 'State'} Intel Guide
            </h1>
            <p className="text-muted-foreground text-xs font-medium flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-nysc-green-800" /> Research mode active for all states.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="w-full sm:w-64">
            <Select value={selectedState} onValueChange={setSelectedState}>
              <SelectTrigger className="h-12 rounded-xl border-gray-200 bg-gray-50/50 font-bold focus:ring-nysc-green-800">
                <SelectValue placeholder="Select state to research" />
              </SelectTrigger>
              <SelectContent>
                {NIGERIAN_STATES.map(st => (
                  <SelectItem key={st} value={st} className="font-semibold">
                    {st} {st === profileState ? '(Primary)' : ''}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {profileState && selectedState !== profileState && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedState(profileState)}
              className="text-[10px] font-black uppercase tracking-widest border-nysc-green-100 text-nysc-green-800 rounded-xl h-12"
            >
              Back to My State
            </Button>
          )}
        </div>
      </div>
      {!selectedState ? (
        <Card className="flex flex-col items-center justify-center py-20 text-center space-y-6 border-dashed border-2">
          <div className="w-20 h-20 bg-nysc-green-50 rounded-full flex items-center justify-center border border-nysc-green-100">
            <MapPin className="w-10 h-10 text-nysc-green-800" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-display font-bold text-gray-900">Choose a State</h2>
            <p className="text-muted-foreground max-sm mx-auto font-medium">
              Select a state from the dropdown above to view camp intelligence, cost of living, and PPA opportunities.
            </p>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="overflow-hidden shadow-sm border-gray-100">
              <CardHeader className="bg-gray-50/50 border-b flex flex-row items-center justify-between">
                <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-nysc-green-800">
                  <TrendingUp className="w-4 h-4" /> Monthly Benchmark: {selectedState}
                </CardTitle>
                {selectedState === profileState && (
                   <Badge className="bg-nysc-green-800 text-white text-[8px] font-black uppercase tracking-widest border-none">Your Deployment</Badge>
                )}
              </CardHeader>
              <CardContent className="pt-8 px-6">
                <div className="w-full h-[300px] relative">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="name" fontSize={11} fontWeight={700} tickLine={false} axisLine={false} dy={10} />
                      <YAxis hide />
                      <Tooltip
                        cursor={{ fill: '#f8fafc', opacity: 0.4 }}
                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 600, fontSize: '12px' }}
                        formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Monthly Cost']}
                      />
                      <Bar dataKey="amount" radius={[6, 6, 0, 0]} barSize={60}>
                        {chartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.amount > entry.avg ? '#D97706' : '#00843D'} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-8 pt-4 border-t flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-x-6 text-[10px] font-black uppercase tracking-widest">
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-nysc-green-800" /> Low/Avg Cost</div>
                    <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-nysc-gold" /> High/Premium Cost</div>
                  </div>
                  <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest">Estimated from Batch 2024 User Feedback</p>
                </div>
              </CardContent>
            </Card>
            <Tabs defaultValue="camp" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-8 overflow-x-auto">
                <TabsTrigger value="camp" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">Orientation</TabsTrigger>
                <TabsTrigger value="ppa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">PPA Terrain</TabsTrigger>
                <TabsTrigger value="living" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">Living Guide</TabsTrigger>
              </TabsList>
              <TabsContent value="camp" className="pt-8 space-y-6">
                <Card className="border-gray-100 shadow-sm">
                  <CardHeader><CardTitle className="text-lg flex items-center gap-3"><Tent className="w-5 h-5 text-nysc-green-800" /> Camp Facilities</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-gray-700 font-medium leading-relaxed">{data?.camp}</p></CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="ppa" className="pt-8 space-y-6">
                <Card className="border-gray-100 shadow-sm">
                  <CardHeader><CardTitle className="text-lg flex items-center gap-3"><Briefcase className="w-5 h-5 text-nysc-green-800" /> Opportunity Map</CardTitle></CardHeader>
                  <CardContent><p className="text-sm text-gray-700 font-medium leading-relaxed">{data?.ppa}</p></CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="living" className="pt-8 space-y-6">
                <Card className="border-gray-100 shadow-sm">
                  <CardHeader><CardTitle className="text-lg flex items-center gap-3"><CreditCard className="w-5 h-5 text-nysc-green-800" /> Economic Index</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">{data?.cost}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                      {chartData.map((item, i) => (
                        <div key={i} className="p-4 bg-gray-50 rounded-xl border text-center">
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.name}</p>
                          <p className="font-bold text-nysc-green-800">₦{item.amount.toLocaleString()}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-6">
            <Card className="bg-nysc-green-800 text-white border-none shadow-xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
              <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><Lightbulb className="w-5 h-5 text-nysc-gold" /> Research Note</CardTitle></CardHeader>
              <CardContent><p className="text-sm font-bold text-nysc-green-50 leading-relaxed italic">"{data?.pro_tip || 'Detailed intel is based on recent corp member reports from the field.'}"</p></CardContent>
            </Card>
            <Card className="border-nysc-gold/30 bg-amber-50/20 shadow-sm">
              <CardHeader className="pb-2"><CardTitle className="text-xs font-black uppercase tracking-widest text-amber-900 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-nysc-gold" /> Security Advisory</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                <p className="text-xs font-bold text-amber-950">Always cross-verify current regional security status with the State NYSC Office before accepting remote PPA postings.</p>
                <div className="pt-2 border-t border-amber-200">
                  <p className="text-[9px] font-black text-amber-800 uppercase tracking-widest mb-1">State Security Hub</p>
                  <p className="text-lg font-mono font-bold text-amber-900">112 / Emergency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}