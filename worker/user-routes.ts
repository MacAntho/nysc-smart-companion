import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import type { NYSCProfile } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  // PROFILES (NYSC Smart Companion specific)
  app.get('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    if (!isStr(id)) return bad(c, 'Invalid ID');
    const entity = new UserEntity(c.env, id);
    if (!await entity.exists()) return notFound(c, 'Profile not found');
    const state = await entity.getState();
    return ok(c, state);
  });
  app.post('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    const profile = await c.req.json() as Partial<NYSCProfile>;
    if (!isStr(id)) return bad(c, 'Invalid ID');
    const entity = new UserEntity(c.env, id);
    const current = await entity.getState();
    const updated = {
      ...current,
      ...profile,
      id, // Ensure ID remains consistent
      updatedAt: Date.now()
    };
    await entity.save(updated as any);
    return ok(c, updated);
  });
  // LEGACY/DEMO ROUTES
  app.get('/api/users', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const cq = c.req.query('cursor');
    const page = await UserEntity.list(c.env, cq ?? null);
    return ok(c, page);
  });
}