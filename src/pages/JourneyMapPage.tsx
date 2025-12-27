import React from 'react';
import { useAppStore } from '@/lib/store';
import { JOURNEY_STAGES } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle2, Circle, ChevronDown, ChevronRight, Info } from 'lucide-react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
export function JourneyMapPage() {
  const currentStage = useAppStore(s => s.stage);
  const completedTasks = useAppStore(s => s.completedTasks);
  const toggleTask = useAppStore(s => s.toggleTask);
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-display font-bold text-nysc-green-900">Your Journey Map</h1>
        <p className="text-muted-foreground">Visualizing your 365 days of service.</p>
      </header>
      <div className="relative border-l-2 border-nysc-green-100 ml-4 md:ml-6 pl-8 space-y-12 py-4">
        {JOURNEY_STAGES.map((stage, index) => {
          const isActive = stage.id === currentStage;
          const isPast = JOURNEY_STAGES.findIndex(s => s.id === currentStage) > index;
          return (
            <div key={stage.id} className="relative">
              {/* Timeline dot */}
              <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white shadow-sm flex items-center justify-center ${
                isPast ? 'bg-nysc-green-500' : isActive ? 'bg-nysc-gold animate-pulse' : 'bg-gray-300'
              }`}>
                {isPast && <CheckCircle2 className="w-3 h-3 text-white" />}
              </div>
              <div className={`space-y-4 ${isPast ? 'opacity-60' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className={`text-xl font-bold ${isActive ? 'text-nysc-green-800' : 'text-gray-900'}`}>
                    {stage.title}
                  </h3>
                  {isActive && (
                    <span className="px-2 py-0.5 rounded-full bg-nysc-green-100 text-nysc-green-800 text-[10px] font-bold uppercase tracking-wider w-fit">
                      Current Stage
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm max-w-xl">{stage.description}</p>
                <Card className={isActive ? 'border-nysc-green-200 shadow-md ring-1 ring-nysc-green-100' : 'border-gray-100'}>
                  <CardHeader className="py-3 px-4 bg-gray-50/50">
                    <CardTitle className="text-sm font-semibold flex items-center gap-2">
                      Stage Checklists
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y">
                      {stage.tasks.map(task => (
                        <div key={task.id} 
                             onClick={() => toggleTask(task.id)}
                             className="flex items-start gap-4 p-4 hover:bg-gray-50 cursor-pointer transition-colors">
                          <div className="mt-0.5">
                            {completedTasks.includes(task.id) ? (
                              <CheckCircle2 className="w-5 h-5 text-nysc-green-500 fill-nysc-green-50" />
                            ) : (
                              <Circle className="w-5 h-5 text-gray-300" />
                            )}
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className={`text-sm font-medium ${completedTasks.includes(task.id) ? 'line-through text-muted-foreground' : 'text-gray-900'}`}>
                              {task.title}
                            </p>
                            <p className="text-xs text-muted-foreground leading-relaxed">{task.description}</p>
                          </div>
                          <Info className="w-4 h-4 text-gray-300 hover:text-nysc-green-800" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}