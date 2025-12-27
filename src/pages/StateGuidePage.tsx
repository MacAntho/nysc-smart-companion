import React from 'react';
import { useAppStore } from '@/lib/store';
import { STATE_DATA } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Tent, CreditCard, ShieldAlert, TrendingUp, Sparkles, AlertCircle, ArrowRight, Lightbulb, Briefcase } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Link } from 'react-router-dom';
export function StateGuidePage() {
  const stateOfDeployment = useAppStore(s => s.stateOfDeployment);
  if (!stateOfDeployment) {
    return (
      <div className="max-w-4xl mx-auto py-20 px-4 text-center space-y-6">
        <div className="w-20 h-20 bg-nysc-green-50 rounded-full flex items-center justify-center mx-auto border border-nysc-green-100">
          <AlertCircle className="w-10 h-10 text-nysc-green-800" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-display font-bold text-gray-900">State Not Selected</h1>
          <p className="text-muted-foreground max-w-sm mx-auto font-medium">
            We need to know your deployment state to provide localized intelligence and cost benchmarks.
          </p>
        </div>
        <Link to="/app/profile">
          <Button className="bg-nysc-green-800 hover:bg-nysc-green-900 px-8 py-6 rounded-2xl font-bold shadow-lg shadow-nysc-green-800/20 group">
            Go to Profile <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    );
  }
  const data = STATE_DATA[stateOfDeployment] || STATE_DATA['DEFAULT'];
  const defaultMetrics = STATE_DATA['DEFAULT'].metrics;
  const rentMetric = Number(data.metrics?.rent) || Number(defaultMetrics.rent) || 0;
  const foodMetric = Number(data.metrics?.food) || Number(defaultMetrics.food) || 0;
  const transportMetric = Number(data.metrics?.transport) || Number(defaultMetrics.transport) || 0;
  const chartData = [
    { name: 'Rent', amount: rentMetric, avg: 180000 },
    { name: 'Food', amount: foodMetric, avg: 35000 },
    { name: 'Transport', amount: transportMetric, avg: 20000 },
  ];
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-white border rounded-2xl shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-nysc-green-800 flex items-center justify-center text-white shadow-lg shrink-0">
          <MapPin className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">{stateOfDeployment} State Intelligence</h1>
          <p className="text-muted-foreground font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-nysc-gold" /> Verified operational data for Batch 2025.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden shadow-sm border-gray-100 min-w-0">
            <CardHeader className="bg-gray-50/50 border-b">
              <CardTitle className="text-xs font-black uppercase tracking-widest flex items-center gap-2 text-nysc-green-800">
                <TrendingUp className="w-4 h-4" /> Monthly Expense Benchmark
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-6">
              <div className="w-full h-[300px] relative overflow-hidden">
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" fontSize={11} fontWeight={700} tickLine={false} axisLine={false} dy={10} />
                    <YAxis hide />
                    <Tooltip
                      cursor={{ fill: '#f8fafc', opacity: 0.4 }}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 600, fontSize: '12px' }}
                      formatter={(value: number) => [`₦${value.toLocaleString()}`, 'Monthly Estimate']}
                    />
                    <Bar dataKey="amount" radius={[6, 6, 0, 0]} barSize={50}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.amount > entry.avg ? '#D97706' : '#00843D'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-8 pt-4 border-t flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-nysc-green-800" /> Below National Avg</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-nysc-gold" /> Above National Avg</div>
                </div>
                <p className="text-[9px] text-muted-foreground font-black uppercase tracking-widest text-center">Data source: 2024/2025 User-Reported Benchmarks</p>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="camp" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-8 overflow-x-auto no-scrollbar">
              <TabsTrigger value="camp" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">Orientation</TabsTrigger>
              <TabsTrigger value="ppa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">PPA Terrain</TabsTrigger>
              <TabsTrigger value="living" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-xs font-bold uppercase tracking-widest">Living Guide</TabsTrigger>
            </TabsList>
            <TabsContent value="camp" className="pt-8 space-y-6">
              <Card className="border-gray-100 shadow-sm"><CardHeader><CardTitle className="text-lg flex items-center gap-3"><Tent className="w-5 h-5 text-nysc-green-800" /> Camp Intelligence</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-gray-700 font-medium leading-relaxed">{data.camp}</p></CardContent></Card>
            </TabsContent>
            <TabsContent value="ppa" className="pt-8 space-y-6">
              <Card className="border-gray-100 shadow-sm"><CardHeader><CardTitle className="text-lg flex items-center gap-3"><Briefcase className="w-5 h-5 text-nysc-green-800" /> PPA Opportunities</CardTitle></CardHeader>
                <CardContent><p className="text-sm text-gray-700 font-medium leading-relaxed">{data.ppa}</p></CardContent></Card>
            </TabsContent>
            <TabsContent value="living" className="pt-8 space-y-6">
              <Card className="border-gray-100 shadow-sm"><CardHeader><CardTitle className="text-lg flex items-center gap-3"><CreditCard className="w-5 h-5 text-nysc-green-800" /> Cost of Living Index</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{data.cost}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                    <div className="p-4 bg-gray-50 rounded-xl border text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Avg Rent</p>
                      <p className="font-bold text-nysc-green-800">₦{rentMetric.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Avg Food</p>
                      <p className="font-bold text-nysc-green-800">₦{foodMetric.toLocaleString()}</p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-xl border text-center">
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">Transport</p>
                      <p className="font-bold text-nysc-green-800">₦{transportMetric.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent></Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="bg-nysc-green-800 text-white border-none shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12" />
            <CardHeader><CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2"><Lightbulb className="w-5 h-5 text-nysc-gold" /> Local Pro Tip</CardTitle></CardHeader>
            <CardContent><p className="text-sm font-bold text-nysc-green-50 leading-relaxed italic">"{data.pro_tip || 'Always keep your NYSC ID card within reach for local navigation.'}"</p></CardContent>
          </Card>
          <Card className="border-nysc-gold/30 bg-amber-50/20 shadow-sm">
            <CardHeader className="pb-2"><CardTitle className="text-xs font-black uppercase tracking-widest text-amber-900 flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-nysc-gold" /> State Safety</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs font-bold text-amber-950">Register with the Zonal Inspector immediately after posting.</p>
              <div className="pt-2 border-t border-amber-200">
                <p className="text-[9px] font-black text-amber-800 uppercase tracking-widest mb-1">Emergency Lines</p>
                <p className="text-lg font-mono font-bold text-amber-900">112 / 0803 000 0000</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}