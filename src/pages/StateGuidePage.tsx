import React from 'react';
import { useAppStore } from '@/lib/store';
import { STATE_DATA } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { MapPin, Tent, CreditCard, Bus, Info, ShieldAlert, TrendingUp, Sparkles, AlertCircle, ArrowRight } from 'lucide-react';
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
  const data = STATE_DATA[stateOfDeployment] || {
    camp: 'Information pending for this state.',
    cost: 'Moderate',
    metrics: { rent: 0, food: 0, transport: 0 },
    ppa: 'Standard PPA opportunities.'
  };
  const rentMetric = data.metrics?.rent ?? 0;
  const foodMetric = data.metrics?.food ?? 0;
  const transportMetric = data.metrics?.transport ?? 0;
  const chartData = [
    { name: 'Rent', amount: rentMetric, avg: 180000 },
    { name: 'Food', amount: foodMetric, avg: 35000 },
    { name: 'Transport', amount: transportMetric, avg: 20000 },
  ];
  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-fade-in px-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 bg-white border-b rounded-2xl shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-nysc-green-800 flex items-center justify-center text-white shadow-lg shrink-0">
          <MapPin className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <h1 className="text-3xl font-display font-bold text-nysc-green-800 tracking-tight">{stateOfDeployment} State Intelligence</h1>
          <p className="text-muted-foreground font-medium flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-nysc-gold" /> Official field data for posted corps members.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <Card className="overflow-hidden shadow-sm hover-glow">
            <CardHeader className="bg-gray-50/50 border-b">
              <CardTitle className="text-sm font-bold uppercase tracking-widest flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-nysc-green-800" /> Cost Benchmark (vs National Avg)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-8 px-6">
              <div className="h-[280px] w-full relative">
                <ResponsiveContainer width="100%" height="100%" minHeight={280}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" fontSize={11} fontWeight={700} tickLine={false} axisLine={false} dy={10} />
                    <YAxis hide />
                    <Tooltip
                      cursor={{fill: '#f8fafc'}}
                      contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 600 }}
                    />
                    <Bar dataKey="amount" radius={[6, 6, 0, 0]} barSize={50}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.amount > entry.avg ? '#D97706' : '#00843D'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-8 mt-6 text-[10px] font-black uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-nysc-green-800" /> Below/Avg
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-nysc-gold" /> Above Average
                </div>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="camp" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent gap-8">
              <TabsTrigger value="camp" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-sm font-bold uppercase tracking-widest transition-all">Orientation Camp</TabsTrigger>
              <TabsTrigger value="ppa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-sm font-bold uppercase tracking-widest transition-all">PPA Landscape</TabsTrigger>
              <TabsTrigger value="transport" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:text-nysc-green-800 data-[state=active]:bg-transparent pb-4 text-sm font-bold uppercase tracking-widest transition-all">Mobility</TabsTrigger>
            </TabsList>
            <TabsContent value="camp" className="pt-8 space-y-6">
              <Card className="border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3"><Tent className="w-5 h-5 text-nysc-green-800" /> Facilities & Atmosphere</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-gray-700 leading-relaxed font-medium">{data.camp}</p>
                  <div className="p-5 bg-nysc-gold/5 rounded-2xl border border-nysc-gold/20 flex gap-4">
                    <Info className="w-6 h-6 text-nysc-gold shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="text-nysc-gold font-bold text-xs uppercase tracking-widest">Camp Wisdom</p>
                      <p className="text-amber-900 text-sm font-medium">Secure your valuables in a waist bag at all times. Discipline is paramount for a smooth 21 days.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ppa" className="pt-8">
              <Card className="border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3"><MapPin className="w-5 h-5 text-nysc-green-800" /> High-Density Sectors</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">{data.ppa}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {['Secondary Schools', 'State Ministries', 'NGOs', 'Local Secretariats'].map((sector) => (
                      <div key={sector} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-nysc-green-800 transition-colors cursor-default">
                        <div className="w-2 h-2 rounded-full bg-nysc-green-800" />
                        <span className="text-xs font-bold text-gray-900">{sector}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transport" className="pt-8">
               <Card className="border-gray-100 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-3"><Bus className="w-5 h-5 text-nysc-green-800" /> Logistics Intelligence</CardTitle>
                </CardHeader>
                <CardContent className="text-sm font-medium leading-relaxed text-gray-700">
                  <p>Reliability of transport depends on proximity to major city centers. Budget carefully for high-traffic days.</p>
                  <div className="mt-6 p-4 border rounded-xl bg-gray-50 flex justify-between items-center">
                    <span className="font-bold text-muted-foreground uppercase tracking-widest text-[10px]">Avg Monthly Cost</span>
                    <span className="font-black text-nysc-green-800 text-lg">₦{(transportMetric).toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="border-nysc-gold/30 bg-amber-50/30 overflow-hidden relative">
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-nysc-gold/5 rounded-full -mb-12 -mr-12" />
            <CardHeader className="pb-4">
              <CardTitle className="text-sm font-black uppercase tracking-widest flex items-center gap-2 text-amber-900">
                <ShieldAlert className="w-5 h-5 text-nysc-gold" /> Safety Protocol
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-950 space-y-4 font-medium">
              <p>Register with your LGI within 48 hours of arrival at PPA. Avoid nocturnal inter-state travel.</p>
              <div className="pt-4 border-t border-amber-200/50">
                <p className="font-black text-[10px] text-amber-900/60 uppercase tracking-widest mb-1">Emergency Lines</p>
                <p className="text-2xl font-mono font-bold tracking-tighter text-amber-950">112 / 0803 123 4567</p>
              </div>
            </CardContent>
          </Card>
          <Card className="shadow-sm border-gray-100">
            <CardHeader>
              <CardTitle className="text-sm font-bold uppercase tracking-widest">Monthly Living Index</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-muted-foreground">Est. Base Expenses</span>
                <span className="font-black text-nysc-green-800">₦{(Math.round(rentMetric/12 + foodMetric + transportMetric)).toLocaleString()}</span>
              </div>
              <Progress value={Math.min(100, (foodMetric / 50000) * 100)} className="h-2 bg-gray-50" />
              <p className="text-[10px] text-muted-foreground font-medium italic leading-tight">
                Benchmark based on single-occupancy housing and local transport rates.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}