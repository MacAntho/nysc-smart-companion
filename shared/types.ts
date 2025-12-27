export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
}
export type NYSCStage = 'prospective' | 'mobilization' | 'camp' | 'ppa' | 'cds' | 'pop';
export interface NYSCProfile {
  id: string;
  stage: NYSCStage;
  stateOfDeployment: string;
  completedTasks: string[];
  readArticles: string[];
  activeProjectId: string | null;
  isOnboarded: boolean;
  isPro: boolean;
  updatedAt: number;
}
export interface User {
  id: string;
  name: string;
}
export interface Chat {
  id: string;
  title: string;
}
export interface ChatMessage {
  id: string;
  chatId: string;
  userId: string;
  text: string;
  ts: number;
}