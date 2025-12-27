import React from 'react';
import { useAppStore } from '@/lib/store';
import { JOURNEY_STAGES } from '@/lib/mock-content';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, Circle, Info } from 'lucide-react';
import { motion } from 'framer-motion';
export function JourneyMapPage() {
  const currentStage = useAppStore(s => s.stage);
  const completedTasks = useAppStore(s => s.completedTasks);
  const toggleTask = useAppStore(s => s.toggleTask);
  const stageIndex = JOURNEY_STAGES.findIndex(s => s.id === currentStage);
  const safeStageIndex = stageIndex === -1 ? 0 : stageIndex;
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in px-4">
      <header className="text-center space-y-2">
        <h1 className="text-3xl font-display font-bold text-nysc-green-900">Your Journey Map</h1>
        <p className="text-muted-foreground">A verified roadmap for your 365 days of service.</p>
      </header>
      <div className="relative border-l-2 border-nysc-green-100 ml-4 md:ml-6 pl-8 space-y-12 py-4">
        {JOURNEY_STAGES.map((stage, index) => {
          const isActive = stage.id === currentStage;
          const isPast = safeStageIndex > index;
          const isFuture = index > safeStageIndex;
          return (
            <div key={stage.id} className="relative">
              <div className={`absolute -left-[41px] w-5 h-5 rounded-full border-4 border-white shadow-sm flex items-center justify-center transition-colors duration-500 z-10 ${
                isPast ? 'bg-nysc-green-500' : isActive ? 'bg-nysc-gold animate-pulse' : 'bg-gray-300'
              }`}>
                {isPast && <CheckCircle2 className="w-3 h-3 text-white" />}
              </div>
              <div className={`space-y-4 transition-opacity duration-300 ${isFuture ? 'opacity-40' : 'opacity-100'}`}>
                <div className="flex flex-col md:flex-row md:items-center gap-2">
                  <h3 className={`text-xl font-bold ${isActive ? 'text-nysc-green-800' : 'text-gray-900'}`}>
                    {stage.title}
                  </h3>
                  {isActive && (
                    <Badge variant="secondary" className="bg-nysc-green-100 text-nysc-green-800 text-[10px] font-bold uppercase tracking-wider w-fit border-nysc-green-200">
                      Active Phase
                    </Badge>
                  )}
                </div>
                <p className="text-muted-foreground text-sm max-w-xl font-medium">{stage.description}</p>
                <Card className={`transition-all duration-300 ${isActive ? 'border-nysc-green-200 shadow-md ring-1 ring-nysc-green-100 bg-white' : 'border-gray-100 bg-gray-50/30'}`}>
                  <CardHeader className="py-3 px-4 bg-gray-50/50 border-b">
                    <CardTitle className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
                      <CheckCircle2 className="w-3 h-3 text-nysc-green-800" /> Milestone Checklist
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-gray-100">
                      {stage.tasks.map(task => {
                        const isDone = completedTasks.includes(task.id);
                        return (
                          <motion.div
                            key={task.id}
                            whileTap={{ scale: 0.99 }}
                            onClick={() => toggleTask(task.id)}
                            className="flex items-start gap-4 p-4 hover:bg-white cursor-pointer transition-colors group"
                          >
                            <div className="mt-0.5">
                              {isDone ? (
                                <CheckCircle2 className="w-5 h-5 text-nysc-green-50 fill-nysc-green-50" />
                              ) : (
                                <Circle className="w-5 h-5 text-gray-300 group-hover:text-nysc-green-200 transition-colors" />
                              )}
                            </div>
                            <div className="flex-1 space-y-1">
                              <p className={`text-sm font-bold ${isDone ? 'line-through text-muted-foreground opacity-60' : 'text-gray-900'}`}>
                                {task.title}
                              </p>
                              <p className="text-xs text-muted-foreground leading-relaxed font-medium">{task.description}</p>
                            </div>
                            <Info className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </motion.div>
                        );
                      })}
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