import { Hono } from "hono";
import type { Env } from './core-utils';
import { UserEntity } from "./entities";
import { ok, bad, notFound, isStr } from './core-utils';
import type { NYSCProfile } from "@shared/types";
export function userRoutes(app: Hono<{ Bindings: Env }>) {
  /**
   * GET /api/profile/:id
   * Fetches the full NYSC Profile for a specific user.
   */
  app.get('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    if (!isStr(id)) return bad(c, 'Invalid ID parameter');
    const entity = new UserEntity(c.env, id);
    if (!await entity.exists()) {
      return notFound(c, 'Profile not found');
    }
    const state = await entity.getState();
    return ok(c, state);
  });
  /**
   * POST /api/profile/:id
   * Updates or creates an NYSC Profile. Performs a deep merge with current state.
   */
  app.post('/api/profile/:id', async (c) => {
    const id = c.req.param('id');
    if (!isStr(id)) return bad(c, 'Invalid ID parameter');
    try {
      const payload = await c.req.json() as Partial<NYSCProfile>;
      const entity = new UserEntity(c.env, id);
      // Atomic mutation to ensure we don't overwrite concurrent changes
      const updated = await entity.mutate((current) => ({
        ...current,
        ...payload,
        id, // Protection: ID must match the route param
        updatedAt: Date.now(),
        // Ensure arrays remain valid if null was passed in partially
        completedTasks: payload.completedTasks ?? current.completedTasks ?? [],
        readArticles: payload.readArticles ?? current.readArticles ?? [],
      }));
      return ok(c, updated);
    } catch (err) {
      console.error(`[API ERROR] Profile update failed for ${id}:`, err);
      return bad(c, err instanceof Error ? err.message : 'Failed to update profile');
    }
  });
  /**
   * GET /api/profiles
   * List profiles (Admin or Discovery use-case)
   */
  app.get('/api/profiles', async (c) => {
    await UserEntity.ensureSeed(c.env);
    const cursor = c.req.query('cursor');
    const result = await UserEntity.list(c.env, cursor ?? null, 20);
    return ok(c, result);
  });
}