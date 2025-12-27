import type { NYSCProfile, User, Chat, ChatMessage } from './types';
export const MOCK_USERS: NYSCProfile[] = [
  { 
    id: 'u1', 
    stage: 'ppa', 
    stateOfDeployment: 'Lagos',
    completedTasks: ['p1', 'm1', 'c1'],
    readArticles: ['k1', 'k2'],
    activeProjectId: 'cp1',
    isOnboarded: true,
    updatedAt: Date.now() 
  },
  { 
    id: 'u2', 
    stage: 'prospective', 
    stateOfDeployment: 'Abuja',
    completedTasks: [],
    readArticles: [],
    activeProjectId: null,
    isOnboarded: true,
    updatedAt: Date.now() 
  }
];
// Keep legacy mock types for compatibility with any existing boilerplate references
export const MOCK_CHATS: Chat[] = [
  { id: 'c1', title: 'General' },
];
export const MOCK_CHAT_MESSAGES: ChatMessage[] = [
  { id: 'm1', chatId: 'c1', userId: 'u1', text: 'Welcome to NYSC Smart Companion!', ts: Date.now() },
];