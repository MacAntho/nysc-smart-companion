import React from 'react';
import { useAppStore } from '@/lib/store';
import { STATE_DATA } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Tent, CreditCard, Bus, Info } from 'lucide-react';
export function StateGuidePage() {
  const stateName = useAppStore(s => s.stateOfDeployment);
  const data = STATE_DATA[stateName] || { camp: 'No data', cost: 'No data', ppa: 'No data' };
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-nysc-green-800 flex items-center justify-center text-white shadow-lg">
          <MapPin className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-display font-bold text-nysc-green-900">{stateName} State Guide</h1>
          <p className="text-muted-foreground italic">"Unity and Faith, Peace and Progress"</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <Tabs defaultValue="camp" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent space-x-6">
              <TabsTrigger value="camp" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">Orientation Camp</TabsTrigger>
              <TabsTrigger value="cost" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">Cost of Living</TabsTrigger>
              <TabsTrigger value="transport" className="rounded-none border-b-2 border-transparent data-[state=active]:border-nysc-green-800 data-[state=active]:bg-transparent pb-3 font-semibold">Transport & Safety</TabsTrigger>
            </TabsList>
            <TabsContent value="camp" className="pt-6 space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Tent className="w-5 h-5 text-nysc-green-800" /> Camp Facilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-sm leading-relaxed">
                  <p>{data.camp}</p>
                  <p>In this camp, expect standard military bunk beds. Water supply is regular between 5 AM and 7 AM. Mammy market is quite vibrant with various local delicacies.</p>
                  <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 flex gap-3">
                    <Info className="w-5 h-5 text-nysc-gold shrink-0" />
                    <p className="text-amber-900 text-xs">Pro-tip: Arrive early on day 1 to secure a bed near a charging point if available!</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="cost" className="pt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><CreditCard className="w-5 h-5 text-nysc-green-800" /> Wallet Reality</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm">{data.cost}</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <p className="text-[10px] text-muted-foreground uppercase">Rent (Self-Con)</p>
                      <p className="text-sm font-bold">₦150k - ₦300k / year</p>
                    </div>
                    <div className="p-3 border rounded-lg bg-gray-50">
                      <p className="text-[10px] text-muted-foreground uppercase">Local Meal</p>
                      <p className="text-sm font-bold">₦800 - ₦1,500</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="transport" className="pt-6">
               <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2"><Bus className="w-5 h-5 text-nysc-green-800" /> Getting Around</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  <p>Public transport is mainly via Keke Napep and small buses. Uber/Bolt works well in the city center. Always avoid night travel across local government boundaries.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-md">Popular PPA Sectors</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> Teaching (Schools)</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> Civil Service</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-nysc-green-500" /> Private Firms (Tech/Legal)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}