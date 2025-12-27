import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '@/lib/store';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShieldCheck, Mail, Lock, ArrowRight, Loader2, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
export function AuthPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useAppStore(s => s.setAuth);
  const isOnboarded = useAppStore(s => s.isOnboarded);
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
        toast.success('OTP sent to your email');
        setStep(2);
      } else {
        toast.error(result.error || 'Failed to send OTP');
      }
    } catch (e) {
      toast.error('Network error sending OTP');
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
        toast.success('Authenticated successfully');
        navigate(isOnboarded ? '/app' : '/onboarding');
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (e) {
      toast.error('Network error during authentication');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-white nysc-adire-pattern flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center space-y-4">
          <div className="mx-auto w-16 h-16 bg-nysc-green-800 rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
            <ShieldCheck className="text-white w-10 h-10" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900">Official Access</h1>
          <p className="text-muted-foreground font-medium">Command center for Nigerian Corps Members.</p>
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
              <CardHeader className="text-center">
                <CardTitle className="text-xl font-bold text-nysc-green-800">
                  {step === 1 ? 'Step 1: Identity' : 'Step 2: Verification'}
                </CardTitle>
                <CardDescription>
                  {step === 1 ? 'Enter your email to receive a secure login code.' : `Enter the 6-digit code sent to ${email}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={step === 1 ? handleSendOtp : handleVerify} className="space-y-4">
                  {step === 1 ? (
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">Service Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="corper@example.com"
                          className="h-14 pl-12 rounded-2xl border-gray-100 font-bold bg-gray-50/50"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="font-bold text-[10px] uppercase tracking-widest text-muted-foreground">6-Digit Code</Label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="otp"
                          type="text"
                          inputMode="numeric"
                          maxLength={6}
                          placeholder="000000"
                          className="h-14 pl-12 rounded-2xl border-gray-100 font-bold bg-gray-50/50 tracking-[0.5em] text-center"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                          disabled={isLoading}
                          required
                        />
                      </div>
                    </div>
                  )}
                  <Button 
                    type="submit" 
                    className="w-full h-14 bg-nysc-green-800 hover:bg-nysc-green-900 rounded-2xl font-bold shadow-lg shadow-nysc-green-800/20"
                    disabled={isLoading}
                  >
                    {isLoading ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : null}
                    {step === 1 ? 'Send OTP' : 'Verify & Continue'}
                    {step === 1 && !isLoading && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </form>
              </CardContent>
              {step === 2 && (
                <CardFooter>
                  <Button variant="ghost" className="w-full text-xs font-bold text-nysc-green-800" onClick={() => setStep(1)}>
                    Back to Email entry
                  </Button>
                </CardFooter>
              )}
            </Card>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
          <Sparkles className="w-4 h-4 text-nysc-gold" /> Secure Institutional Portal
        </div>
      </div>
    </div>
  );
}