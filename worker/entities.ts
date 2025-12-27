/**
 * Core entities for NYSC Smart Companion.
 * Uses a single Durable Object class to manage persistence for various user profiles.
 */
import { IndexedEntity } from "./core-utils";
import type { NYSCProfile } from "@shared/types";
import { MOCK_USERS } from "@shared/mock-data";
// USER PROFILE ENTITY: one DO instance per user ID
export class UserEntity extends IndexedEntity<NYSCProfile> {
  static readonly entityName = "user-profile";
  static readonly indexName = "user-profiles";
  static readonly initialState: NYSCProfile = { 
    id: "", 
    stage: "prospective",
    stateOfDeployment: "",
    completedTasks: [],
    readArticles: [],
    activeProjectId: null,
    isOnboarded: false,
    updatedAt: 0
  };
  static seedData = MOCK_USERS;
  /**
   * Optional: Add specific methods for complex profile mutations if needed.
   * For now, standard IndexedEntity methods (save, mutate, patch) are sufficient.
   */
}