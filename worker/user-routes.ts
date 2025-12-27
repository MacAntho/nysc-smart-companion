import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ContentEntity, OtpEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import type { NYSCProfile } from "@shared/types";
import type { OtpState } from './entities';
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  app.post('/api/auth/send-otp', async (c) => {
    const body = await c.req.json<{ email?: string }>();
    const email = body.email;
    if (!email?.trim() || !email.includes('@')) return bad(c, 'Valid email required');
    const emailKey = email.toLowerCase().trim();
    const otpEntity = new OtpEntity(c.env, emailKey);
    const otp = (100000 + Math.floor(Math.random() * 900000)).toString();
    const expires = Date.now() + 300000;
    await otpEntity.save({ otp, expires });
    return ok(c, { sent: true });
  });

  /**
   * AUTH: SIMULATED LOGIN
   */
  app.post('/api/auth/login', async (c) => {
    const body = await c.req.json<{ email?: string; otp?: string }>();
    const { email, otp } = body;
    if (!email || !otp) return bad(c, 'Email and OTP required');
    // Demo logic: any 6 digit OTP works
    if (otp.length !== 6) return bad(c, 'Invalid OTP format');

    const emailKey = email.toLowerCase().trim();
    const otpEntity = new OtpEntity(c.env, emailKey);
    if (!await otpEntity.exists()) {
      return bad(c, 'Invalid or expired OTP');
    }
    const state = await otpEntity.getState();
    if (state.expires < Date.now() || state.otp !== otp) {
      return bad(c, 'Invalid or expired OTP');
    }
    await otpEntity.delete();

    // Mock admin check
    const role = email.endsWith('@nysc.gov.ng') ? 'admin' : 'user';
    const isPro = email.includes('pro');
    const userId = crypto.randomUUID().split('-')[0]; // Simple mock ID
    // Ensure profile exists or create one
    const profileEntity = new UserEntity(c.env, userId);
    if (!await profileEntity.exists()) {
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
    }
    return ok(c, { id: userId, email, role, isPro });
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
    // Mock dashboard stats
    return ok(c, {
      totalUsers: 1402,
      activeToday: 488,
      proUsers: 124,
      systemHealth: 'Optimal'
    });
  });
  app.get('/api/content/seed', async (c) => {
    // Allows force-reseeding content for demo
    await ContentEntity.ensureSeed(c.env);
    return ok(c, 'Content seeded');
  });
}