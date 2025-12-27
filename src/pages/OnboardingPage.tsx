import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { NYSCStage } from '@shared/types';
import { ArrowRight, ArrowLeft, Loader2, Sparkles, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
const STAGES: { value: NYSCStage; label: string }[] = [
  { value: 'prospective', label: 'Prospective Corper (Finalist/Graduate)' },
  { value: 'mobilization', label: 'Mobilization & Online Registration' },
  { value: 'camp', label: 'Orientation Camp (The 21 Days)' },
  { value: 'ppa', label: 'Primary Assignment (At PPA)' },
  { value: 'pop', label: 'Winding Up / POP Phase' },
];
const NIGERIAN_STATES = ['Lagos', 'Abuja', 'Oyo', 'Rivers', 'Kano', 'Kaduna', 'Enugu', 'Edo', 'Cross River', 'Delta', 'Anambra', 'Plateau', 'Kwara'];
export function OnboardingPage() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const stage = useAppStore(s => s.stage);
  const setStage = useAppStore(s => s.setStage);
  const stateOfDeployment = useAppStore(s => s.stateOfDeployment);
  const setStateOfDeployment = useAppStore(s => s.setStateOfDeployment);
  const completeOnboarding = useAppStore(s => s.completeOnboarding);
  const isSyncing = useAppStore(s => s.isSyncing);
  const handleFinish = async () => {
    // We do NOT generate a new ID here. 
    // We rely on the userId set during the login phase to maintain profile consistency.
    completeOnboarding();
    navigate('/app');
  };
  return (
    <div className="min-h-screen bg-white nysc-adire-pattern flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-nysc-green-800 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 1 && (
              <Card className="border-gray-100 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="space-y-2 text-center pb-8">
                  <CardTitle className="text-3xl text-nysc-green-800 font-display font-bold">Current Status</CardTitle>
                  <CardDescription className="text-base font-medium">To personalize your roadmap, tell us where you are in the service journey.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={stage} onValueChange={(v) => setStage(v as NYSCStage)}>
                    <SelectTrigger className="h-14 rounded-2xl border-gray-100 font-bold text-gray-900 bg-gray-50/50">
                      <SelectValue placeholder="Select current stage" />
                    </SelectTrigger>
                    <SelectContent>
                      {STAGES.map(s => <SelectItem key={s.value} value={s.value} className="py-3 font-semibold">{s.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardFooter className="pt-8">
                  <Button onClick={() => setStep(2)} className="w-full h-14 bg-nysc-green-800 hover:bg-nysc-green-900 text-lg font-bold rounded-2xl shadow-lg shadow-nysc-green-800/20">
                    Next Step <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 2 && (
              <Card className="border-gray-100 shadow-2xl rounded-3xl overflow-hidden">
                <CardHeader className="space-y-2 text-center pb-8">
                  <CardTitle className="text-3xl text-nysc-green-800 font-display font-bold">Deployment State</CardTitle>
                  <CardDescription className="text-base font-medium">Select your posted state for localized intelligence and budget tools.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Select value={stateOfDeployment} onValueChange={setStateOfDeployment}>
                    <SelectTrigger className="h-14 rounded-2xl border-gray-100 font-bold text-gray-900 bg-gray-50/50">
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {NIGERIAN_STATES.map(st => <SelectItem key={st} value={st} className="py-3 font-semibold">{st}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </CardContent>
                <CardFooter className="pt-8 gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="h-14 px-6 border-gray-200 rounded-2xl font-bold">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 h-14 bg-nysc-green-800 hover:bg-nysc-green-900 text-lg font-bold rounded-2xl shadow-lg shadow-nysc-green-800/20" disabled={!stateOfDeployment}>
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            )}
            {step === 3 && (
              <Card className="border-gray-100 shadow-2xl rounded-3xl overflow-hidden text-center">
                <CardHeader className="space-y-2 pb-6">
                  <div className="mx-auto w-20 h-20 rounded-full bg-nysc-green-50 flex items-center justify-center mb-4 border border-nysc-green-100 animate-bounce">
                    <Sparkles className="w-10 h-10 text-nysc-green-800" />
                  </div>
                  <CardTitle className="text-3xl text-nysc-green-800 font-display font-bold">Mission Ready!</CardTitle>
                  <CardDescription className="text-base font-medium">Your personalized survival kit is prepared. Proceed to the command center.</CardDescription>
                </CardHeader>
                <CardContent className="pb-8">
                  <div className="p-4 bg-gray-50 rounded-2xl text-xs font-bold text-muted-foreground uppercase tracking-widest border border-gray-100">
                    Encrypted Cloud Sync Active
                  </div>
                </CardContent>
                <CardFooter>
                  <Button onClick={handleFinish} className="w-full h-16 bg-nysc-green-800 hover:bg-nysc-green-900 text-xl font-bold rounded-2xl shadow-xl shadow-nysc-green-800/20 transition-all hover:scale-[1.02] active:scale-95" disabled={isSyncing}>
                    {isSyncing ? <Loader2 className="mr-2 h-6 w-6 animate-spin" /> : null}
                    Enter Dashboard
                  </Button>
                </CardFooter>
              </Card>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="mt-12 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">Under the Authority of NYSC Regulations</p>
        </div>
      </div>
    </div>
  );
}