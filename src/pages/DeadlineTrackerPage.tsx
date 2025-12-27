import React, { useMemo, useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useAppStore } from '@/lib/store';
import { DEADLINES } from '@/lib/mock-content';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Bell, 
  Calendar, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  ExternalLink, 
  Info,
  ShieldAlert,
  CalendarCheck
} from 'lucide-react';
import { parseISO, differenceInDays, isPast, format } from 'date-fns';
import { cn } from '@/lib/utils';
export default function DeadlineTrackerPage() {
  const stage = useAppStore(s => s.stage);
  const [filter, setFilter] = useState<string>('all');
  const processedDeadlines = useMemo(() => {
    return DEADLINES.map(d => {
      const date = parseISO(d.date);
      const diff = differenceInDays(date, new Date());
      const past = isPast(date);
      return { ...d, diff, past, dateObj: date };
    }).sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
  }, []);
  const filteredDeadlines = useMemo(() => {
    if (filter === 'all') return processedDeadlines;
    if (filter === 'upcoming') return processedDeadlines.filter(d => !d.past);
    return processedDeadlines.filter(d => d.stage === filter);
  }, [processedDeadlines, filter]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">
      <header className="space-y-4 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-nysc-green-800 flex items-center justify-center shadow-lg shadow-nysc-green-800/20">
            <Bell className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-nysc-green-900 tracking-tight">Deadline Radar</h1>
            <p className="text-muted-foreground font-medium">Critical dates across the NYSC service calendar.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4">
          <Tabs value={filter} onValueChange={setFilter} className="w-full md:w-auto">
            <TabsList className="bg-white border rounded-xl p-1 h-auto flex flex-wrap gap-1 shadow-sm">
              <TabsTrigger value="all" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">All Dates</TabsTrigger>
              <TabsTrigger value="upcoming" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">Upcoming</TabsTrigger>
              <TabsTrigger value="mobilization" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">Mobilization</TabsTrigger>
              <TabsTrigger value="ppa" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">PPA/CDS</TabsTrigger>
              <TabsTrigger value="pop" className="text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-lg">Winding Up</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-100 text-amber-800 text-[10px] font-black uppercase tracking-widest shadow-sm">
            <Info className="w-4 h-4" /> Portals update independently
          </div>
        </div>
      </header>
      {filteredDeadlines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeadlines.map((d) => (
            <Card key={d.id} className={cn(
              "relative overflow-hidden transition-all duration-300 hover:shadow-xl border-gray-100 rounded-3xl",
              d.past ? "opacity-60 grayscale-[0.5]" : "bg-white",
              !d.past && d.diff <= 7 ? "ring-2 ring-destructive/20 border-destructive/10 shadow-lg shadow-destructive/5" : ""
            )}>
              <div className={cn(
                "absolute top-0 left-0 w-1 h-full",
                d.past ? "bg-gray-300" : d.diff <= 7 ? "bg-destructive" : "bg-nysc-green-800"
              )} />
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600 border-none text-[8px] font-black uppercase tracking-widest">
                    {d.stage} Phase
                  </Badge>
                  {d.past ? (
                    <CheckCircle2 className="w-5 h-5 text-nysc-green-500" />
                  ) : d.diff <= 7 ? (
                    <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
                  ) : (
                    <Clock className="w-5 h-5 text-nysc-green-800" />
                  )}
                </div>
                <CardTitle className="text-xl font-display font-bold leading-tight group-hover:text-nysc-green-800 transition-colors">
                  {d.title}
                </CardTitle>
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground mt-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {format(d.dateObj, 'MMMM do, yyyy')}
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
                  <div className="flex justify-between items-end">
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">Status</span>
                    <span className={cn(
                      "text-lg font-black",
                      d.past ? "text-gray-400" : d.diff <= 7 ? "text-destructive" : "text-nysc-green-800"
                    )}>
                      {d.past ? "Closed" : d.diff === 0 ? "Today" : `${d.diff} Days Left`}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                    {d.past 
                      ? "This deadline has passed. If you missed this window, contact your LGI or visit the portal for revalidation."
                      : d.diff <= 7 
                        ? "CRITICAL: This window is closing soon. Ensure all documents are uploaded and biometrics are verified."
                        : "Maintain compliance by preparing your documentation in advance of this scheduled window."}
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <Button variant="outline" className="flex-1 h-10 rounded-xl font-bold border-gray-200" asChild>
                      <a href="https://portal.nysc.org.ng" target="_blank" rel="noopener noreferrer">
                        Portal <ExternalLink className="ml-2 w-3 h-3" />
                      </a>
                    </Button>
                    {!d.past && (
                      <Button className="flex-1 h-10 rounded-xl font-bold bg-nysc-green-800 hover:bg-nysc-green-900 shadow-sm">
                        Remind Me
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center space-y-4 border-2 border-dashed rounded-3xl bg-gray-50/50">
          <CalendarCheck className="w-12 h-12 text-gray-300" />
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-gray-900">No matching deadlines</h3>
            <p className="text-muted-foreground max-w-xs font-medium">Try adjusting your filters to see more dates.</p>
          </div>
          <Button variant="outline" onClick={() => setFilter('all')} className="font-bold border-gray-200">
            Clear Filters
          </Button>
        </div>
      )}
      <footer className="mt-12 p-8 border-2 border-dashed rounded-3xl bg-nysc-green-50/20 flex flex-col md:flex-row items-center gap-6">
        <div className="w-14 h-14 rounded-2xl bg-white border-2 border-nysc-green-100 flex items-center justify-center text-nysc-green-800 shrink-0 shadow-sm">
          <ShieldAlert className="w-7 h-7" />
        </div>
        <div className="space-y-1 text-center md:text-left">
          <h4 className="font-display font-bold text-gray-900">Authoritative Source Notice</h4>
          <p className="text-xs text-muted-foreground max-w-4xl font-medium leading-relaxed">
            Deadlines displayed here are synchronized with the general NYSC 2025 calendar. However, state-specific dates or batch streams may vary. Always cross-check with your <strong>Official Dashboard</strong> on the NYSC portal for the most accurate personal windows.
          </p>
        </div>
      </footer>
    </div>
  );
}