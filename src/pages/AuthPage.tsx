import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, Sparkles, Info, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
export function AuthPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAppStore(s => s.setAuth);
  const isOnboarded = useAppStore(s => s.isOnboarded);
  const isAuthenticated = useAppStore(s => s.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      navigate(isOnboarded ? '/app' : '/onboarding');
    }
  }, [isAuthenticated, isOnboarded, navigate]);
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return toast.error('Enter a valid email');
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const result = await res.json();
      if (result.success) {
        toast.success('Test Session Initialized');
        setStep(2);
      } else {
        toast.error(result.error || 'Failed to initialize session');
      }
    } catch (e) {
      toast.error('Network error during authentication');
    } finally {
      setIsLoading(false);
    }
  };
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length !== 6) return toast.error('Enter 6-digit code');
    setIsLoading(true);
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
      });
      const result = await res.json();
      if (result.success) {
        setAuth({
          userId: result.data.id,
          email: result.data.email,
          role: result.data.role,
          isPro: result.data.isPro
        });
        toast.success(`Access Granted: ${result.data.role === 'admin' ? 'Administrative' : 'Standard'}`);
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (e) {
      toast.error('Network error during verification');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white nysc-adire-pattern flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-6">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-nysc-green-800 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 tracking-tight">Official Access</h1>
          <p className="text-muted-foreground font-medium">Digital Command Center for Nigerian Corps Members.</p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <Card className="border-gray-100 shadow-2xl rounded-3xl overflow-hidden">
              <div className="bg-amber-50 border-b border-amber-100 p-3 flex items-center gap-3">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <p className="text-[10px] font-bold text-amber-800 uppercase tracking-widest">
                  {step === 1 ? 'Testing Mode Enabled' : 'Rapid Verification Active'}
                </p>
              </div>
              <CardHeader className="text-center pb-2">
                <CardTitle className="text-xl font-bold text-nysc-green-800">
                  {step === 1 ? 'Identity' : 'Verification'}
                </CardTitle>
                <CardDescription className="text-xs font-medium">
                  {step === 1 
                    ? 'Login with your institutional email. No password required.'
                    : 'A 6-digit test code is required for system entry.'}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={step === 1 ? handleSendOtp : handleVerify} className="space-y-4">
                  {step === 1 ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email" className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Service Email</Label>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle className="w-3.5 h-3.5 text-gray-300 cursor-help" />
                            </TooltipTrigger>
                            <TooltipContent>Use @admin.nysc.gov.ng for Admin access</TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="corper@example.com"
                          className="h-14 pl-12 rounded-2xl border-gray-100 font-bold bg-gray-50/50 focus-visible:ring-nysc-green-800"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          autoFocus
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Test Login Code</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="otp"
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          placeholder="0 0 0 0 0 0"
                          className="h-14 pl-12 rounded-2xl border-gray-100 font-bold bg-gray-50/50 tracking-[0.5em] text-center text-lg focus-visible:ring-nysc-green-800"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                          disabled={isLoading}
                          autoFocus
                          required
                        />
                      </div>
                      <p className="text-[9px] font-black text-center text-amber-600 uppercase tracking-widest pt-1 animate-pulse">
                        Pro Tip: Use 123456
                      </p>
                    </div>
                  )}
                  <Button
                    type="submit"
                    className="w-full h-14 bg-nysc-green-800 hover:bg-nysc-green-900 rounded-2xl font-bold shadow-lg shadow-nysc-green-800/20 transition-all hover:scale-[1.01] active:scale-95"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                    {step === 1 ? 'Get Started' : 'Unlock Dashboard'}
                    {step === 1 && !isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col bg-gray-50/30 border-t py-4">
                {step === 2 && (
                  <Button variant="ghost" className="w-full text-xs font-bold text-nysc-green-800 mb-4 h-8" onClick={() => setStep(1)}>
                    Change Email
                  </Button>
                )}
                <div className="space-y-3 w-full">
                  <p className="text-[9px] font-black uppercase tracking-widest text-center text-muted-foreground">System Integration Nodes</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white p-3 rounded-xl border border-gray-100 text-[10px] space-y-1 shadow-sm">
                      <span className="font-bold text-nysc-green-800">Admin</span>
                      <p className="text-gray-400 font-medium">Use @admin suffix</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-gray-100 text-[10px] space-y-1 shadow-sm">
                      <span className="font-bold text-nysc-gold">Pro Tier</span>
                      <p className="text-gray-400 font-medium">Include "pro" in email</p>
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <Sparkles className="w-4 h-4 text-nysc-gold" /> Encrypted Cloud Vault
          </div>
          <p className="text-[8px] text-gray-300 font-medium tracking-widest uppercase">Verified Deployment 2025.A</p>
        </div>
      </div>
    </div>
  );
}