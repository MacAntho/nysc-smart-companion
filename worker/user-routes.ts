import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity } from "./entities";
import { ok, bad, notFound } from './core-utils';
import type { NYSCProfile } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * AUTH: SIMPLIFIED OTP SEND (Always returns success)
   */
  app.post('/api/auth/send-otp', async (c) => {
    const body = await c.req.json<{ email?: string }>();
    const email = body.email;
    if (!email?.trim() || !email.includes('@')) return bad(c, 'Valid email required');
    // For testing: we skip generating/storing an OTP.
    // Any 6-digit code will work for any email in the login route.
    return ok(c, { sent: true, note: 'Frictionless testing enabled: Use any 6 digits' });
  });
  /**
   * AUTH: SIMPLIFIED LOGIN (Bypasses state check, uses email heuristics)
   */
  app.post('/api/auth/login', async (c) => {
    const body = await c.req.json<{ email?: string; otp?: string }>();
    const { email, otp } = body;
    if (!email || !otp) return bad(c, 'Email and OTP required');
    // Validate format only: exactly 6 digits
    if (!/^\d{6}$/.test(otp)) {
      return bad(c, 'Invalid OTP format. Must be 6 digits.');
    }
    const emailLower = email.toLowerCase().trim();
    // HEURISTICS: Assign Role and Pro Tier based on email strings
    const role = emailLower.endsWith('@admin.nysc.gov.ng') ? 'admin' : 'user';
    const isPro = emailLower.includes('pro');
    // GENERATE STABLE USER ID FROM EMAIL
    // Using a simple base64-like encoding of the email to ensure the same user gets the same ID
    const userId = btoa(emailLower).replace(/[^a-zA-Z0-9]/g, '').slice(0, 12);
    // Ensure profile exists or update it (Sync Pro status from email pattern)
    const profileEntity = new UserEntity(c.env, userId);
    const existing = await profileEntity.exists();
    if (!existing) {
      await profileEntity.save({
        id: userId,
        stage: 'prospective',
        stateOfDeployment: '',
        completedTasks: [],
        readArticles: [],
        activeProjectId: null,
        isOnboarded: false,
        isPro: isPro,
        updatedAt: Date.now()
      });
    } else {
      // Always sync isPro status from current login pattern to persistent profile
      await profileEntity.mutate(curr => ({
        ...curr,
        isPro: isPro
      }));
    }
    return ok(c, { id: userId, email: emailLower, role, isPro });
  });
  /**
   * PROFILE: CRUD
   */
  app.get('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    const entity = new UserEntity(c.env, id);
    if (!await entity.exists()) return notFound(c, 'Profile not found');
    return ok(c, await entity.getState());
  });
  app.post('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    const payload = await c.req.json<Partial<NYSCProfile>>();
    const entity = new UserEntity(c.env, id);
    const updated = await entity.mutate(curr => ({
      ...curr,
      ...payload,
      id,
      updatedAt: Date.now()
    }));
    return ok(c, updated);
  });
  /**
   * ADMIN: CONTENT MANAGEMENT (Simulated)
   */
  app.get('/api/admin/stats', async (c) => {
    return ok(c, {
      totalUsers: 1402,
      activeToday: 488,
      proUsers: 124,
      systemHealth: 'Optimal'
    });
  });
}