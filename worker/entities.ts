import { IndexedEntity, Entity, Index } from "./core-utils";
import type { NYSCProfile } from "@shared/types";
import { MOCK_USERS } from "@shared/mock-data";
export { Index };
export interface OtpState {
  otp: string;
  expires: number;
}
export class UserEntity extends IndexedEntity<NYSCProfile> {
  static readonly entityName = "user-profile";
  static readonly indexName = "user-profiles";
  static seedData = MOCK_USERS;
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
}
/**
 * @deprecated Simplified auth bypasses OTP state check,
 * but OtpEntity is kept for structural compatibility.
 */
export class OtpEntity extends Entity<OtpState> {
  static readonly entityName = "auth-otp";
  static readonly initialState: OtpState = { otp: "", expires: 0 };
}