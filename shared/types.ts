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
export interface KnowledgeArticle {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  metadata?: {
    stage?: string;
    risk?: string;
    source?: string;
    last_updated?: string;
    featured?: boolean;
  };
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