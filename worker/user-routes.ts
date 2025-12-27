import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, Index } from "./entities";
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
    return ok(c, { sent: true, note: 'Frictionless testing enabled: Use any 6 digits' });
  });
  /**
   * AUTH: SIMPLIFIED LOGIN
   */
  app.post('/api/auth/login', async (c) => {
    const body = await c.req.json<{ email?: string; otp?: string }>();
    const { email, otp } = body;
    if (!email || !otp) return bad(c, 'Email and OTP required');
    if (!/^\d{6}$/.test(otp)) {
      return bad(c, 'Invalid OTP format. Must be 6 digits.');
    }
    const emailLower = email.toLowerCase().trim();
    const role = emailLower.endsWith('@admin.nysc.gov.ng') ? 'admin' : 'user';
    const isPro = emailLower.includes('pro');
    // Robust UserID generation: alphanumeric only to avoid character encoding issues
    const userId = btoa(emailLower).replace(/[^a-zA-Z0-9]/g, '').slice(0, 16);
    const profileEntity = new UserEntity(c.env, userId);
    const existing = await profileEntity.exists();
    if (!existing) {
      const newProfile: NYSCProfile = {
        id: userId,
        stage: 'prospective',
        stateOfDeployment: '',
        completedTasks: [],
        readArticles: [],
        activeProjectId: null,
        isOnboarded: false,
        isPro: isPro,
        updatedAt: Date.now()
      };
      await profileEntity.save(newProfile);
      const userIndex = new Index(c.env, UserEntity.indexName);
      await userIndex.add(userId);
    } else {
      // Sticky Pro Status: Ensure manual or email-based upgrade persists
      await profileEntity.mutate(curr => ({
        ...curr,
        isPro: curr.isPro || isPro,
        updatedAt: Date.now()
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
    if (!await entity.exists()) return notFound(c, 'Profile not found');
    const updated = await entity.mutate(curr => ({
      ...curr,
      ...payload,
      id, // Force ID consistency
      isPro: curr.isPro || payload.isPro || false, // Pro status is sticky
      updatedAt: Date.now()
    }));
    return ok(c, updated);
  });
  /**
   * ADMIN: ENDPOINTS
   */
  app.get('/api/admin/stats', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const usersRes = await UserEntity.list(c.env);
    const users = Array.isArray(usersRes.items) ? usersRes.items : [];
    const now = Date.now();
    const oneDayMs = 24 * 60 * 60 * 1000;
    const totalUsers = users.length;
    const activeToday = users.filter(u => (now - (Number(u.updatedAt) || 0)) < oneDayMs).length;
    const proUsers = users.filter(u => u.isPro).length;
    return ok(c, {
      totalUsers,
      activeToday,
      proUsers,
      systemHealth: 'Optimal'
    });
  });
  app.get('/api/admin/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const users = await UserEntity.list(c.env);
    // Robust sorting fallback for updatedAt
    const sorted = (users.items || []).sort((a, b) => (Number(b.updatedAt) || 0) - (Number(a.updatedAt) || 0));
    return ok(c, sorted);
  });
}