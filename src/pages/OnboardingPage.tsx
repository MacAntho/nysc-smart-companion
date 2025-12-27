import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import type { NYSCStage } from '@shared/types';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
const STAGES: { value: NYSCStage; label: string }[] = [
  { value: 'prospective', label: 'Prospective Corper' },
  { value: 'mobilization', label: 'Mobilization/Registration' },
  { value: 'camp', label: 'Currently in Camp' },
  { value: 'ppa', label: 'At PPA (Serving)' },
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
  const setUserId = useAppStore(s => s.setUserId);
  const isSyncing = useAppStore(s => s.isSyncing);
  const handleFinish = async () => {
    const newId = crypto.randomUUID();
    setUserId(newId);
    completeOnboarding();
    navigate('/app');
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full animate-slide-up">
        {step === 1 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-nysc-green-900 font-display">Welcome, Corper!</CardTitle>
              <CardDescription>First, where are you currently in your NYSC journey?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={stage} onValueChange={(v) => setStage(v as NYSCStage)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select current stage" />
                </SelectTrigger>
                <SelectContent>
                  {STAGES.map(s => <SelectItem key={s.value} value={s.value}>{s.label}</SelectItem>)}
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setStep(2)} className="w-full bg-nysc-green-800">Next Step <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </CardFooter>
          </Card>
        )}
        {step === 2 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-nysc-green-900 font-display">Deployment Info</CardTitle>
              <CardDescription>Which state are you posted to? (Or select your preferred state if prospective)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Select value={stateOfDeployment} onValueChange={setStateOfDeployment}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  {NIGERIAN_STATES.map(st => <SelectItem key={st} value={st}>{st}</SelectItem>)}
                </SelectContent>
              </Select>
            </CardContent>
            <CardFooter className="gap-2">
              <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft className="mr-2 w-4 h-4" /> Back</Button>
              <Button onClick={() => setStep(3)} className="flex-1 bg-nysc-green-800" disabled={!stateOfDeployment}>Continue</Button>
            </CardFooter>
          </Card>
        )}
        {step === 3 && (
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-2">
                <CheckCircle2 className="w-8 h-8 text-nysc-green-500" />
              </div>
              <CardTitle className="text-2xl text-nysc-green-900 font-display">Ready to Go!</CardTitle>
              <CardDescription>We've personalized your dashboard based on your stage and state.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Your profile will be automatically synced to our secure cloud.</p>
            </CardContent>
            <CardFooter>
              <Button onClick={handleFinish} className="w-full bg-nysc-green-800 h-12 text-lg" disabled={isSyncing}>
                {isSyncing ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                Enter Dashboard
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}