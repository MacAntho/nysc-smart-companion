import React from 'react';
import { useAppStore } from '@/lib/store';
import { STATE_DATA } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Tent, CreditCard, Bus, Info, ShieldAlert, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
export function StateGuidePage() {
  const stateName = useAppStore(s => s.stateOfDeployment);
  const data = STATE_DATA[stateName] || { camp: 'No data', cost: 'No data', metrics: { rent: 0, food: 0, transport: 0 } };
  const chartData = [
    { name: 'Rent', amount: data.metrics.rent, avg: 180000 },
    { name: 'Food', amount: data.metrics.food, avg: 35000 },
    { name: 'Transport', amount: data.metrics.transport, avg: 20000 },
  ];
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-nysc-green-800 flex items-center justify-center text-white shadow-lg">
          <MapPin className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold text-nysc-green-900">{stateName} State Guide</h1>
          <p className="text-muted-foreground italic">Official intelligence for posted corps members.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Card className="overflow-hidden">
            <CardHeader className="bg-gray-50 border-b">
              <CardTitle className="text-sm flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-nysc-green-800" /> Cost Comparison (vs National Average)
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{fill: '#f9fafb'}}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Bar dataKey="amount" radius={[4, 4, 0, 0]} barSize={40}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.amount > entry.avg ? '#D97706' : '#065F46'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4 text-xs font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-nysc-green-800" /> Above Average
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-nysc-gold" /> Below Average
                </div>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="camp" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-6">
              <TabsTrigger value="camp" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">Orientation Camp</TabsTrigger>
              <TabsTrigger value="ppa" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">PPA Realities</TabsTrigger>
              <TabsTrigger value="transport" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">Transport</TabsTrigger>
            </TabsList>
            <TabsContent value="camp" className="pt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Tent className="w-5 h-5 text-nysc-green-800" /> Camp Facilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <p>{data.camp}</p>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 flex gap-3">
                    <Info className="w-5 h-5 text-nysc-gold shrink-0" />
                    <p className="text-amber-900 text-xs font-medium">Pro-tip: Secure your valuables in a waist bag at all times, even while sleeping.</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ppa" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><MapPin className="w-5 h-5 text-nysc-green-800" /> Common PPA Sectors</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">{data.ppa}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> Secondary Education (Most Common)</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> State Ministries</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> Local Government Secretariats</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transport" className="pt-6">
               <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Bus className="w-5 h-5 text-nysc-green-800" /> Local Mobility</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Reliability of transport depends on proximity to major city centers. Average monthly cost: ₦{data.metrics.transport.toLocaleString()}.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card className="border-nysc-gold/30 bg-amber-50/50">
            <CardHeader>
              <CardTitle className="text-md flex items-center gap-2 text-amber-900">
                <ShieldAlert className="w-5 h-5" /> Safety Advisory
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-800 space-y-3">
              <p>Always register your presence with the local LGI. Keep your ID card handy during inter-state travel.</p>
              <div className="pt-2 border-t border-amber-200">
                <p className="font-bold">Emergency Contact:</p>
                <p className="text-lg font-mono">112 / 0803 123 4567</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Typical Monthly Budget</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-sm">
                <span>Total Expected Costs</span>
                <span className="font-bold text-nysc-green-800">₦{(data.metrics.rent/12 + data.metrics.food + data.metrics.transport).toLocaleString()}</span>
              </div>
              <Progress value={75} className="h-1" />
              <p className="text-[10px] text-muted-foreground italic">Calculation based on standard corper lifestyle in this state.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}