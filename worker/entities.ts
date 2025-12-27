import { IndexedEntity, Entity } from "./core-utils";
import type { NYSCProfile } from "@shared/types";
import { MOCK_USERS } from "@shared/mock-data";

export interface OtpState {
  otp: string;
  expires: number;
}
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
    updatedAt: 0,
    isPro: false
  };
  static seedData = MOCK_USERS;
}
export interface ContentItem {
  id: string;
  type: 'article' | 'state' | 'deadline';
  data: any;
}
export class ContentEntity extends IndexedEntity<ContentItem> {
  static readonly entityName = "global-content";
  static readonly indexName = "global-contents";
  static readonly initialState: ContentItem = { id: "", type: "article", data: {} };
  // 10+ states, 20+ articles would go here as seedData for a real production run
  // For this MVP, we rely on mock-content.ts but make ContentEntity available for Admin CRUD later.
  static seedData = [
    { id: 'sys-config', type: 'article' as const, data: { version: '1.0.0', lastUpdate: Date.now() } }
  ];
}

export class OtpEntity extends Entity<OtpState> {
  static readonly entityName = "auth-otp";
  static readonly initialState: OtpState = { otp: "", expires: 0 };
}