import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity, ContentEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import type { NYSCProfile } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * AUTH: SIMULATED LOGIN
   */
  app.post('/api/auth/login', async (c) => {
    const { email, otp } = await c.req.json();
    if (!email || !otp) return bad(c, 'Email and OTP required');
    // Demo logic: any 6 digit OTP works
    if (otp.length !== 6) return bad(c, 'Invalid OTP format');
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
    const payload = await c.req.json() as Partial<NYSCProfile>;
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