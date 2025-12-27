import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import type { NYSCStage, NYSCProfile } from '@shared/types';
interface AppState {
  userId: string | null;
  userEmail: string | null;
  userRole: 'user' | 'admin';
  isAuthenticated: boolean;
  isPro: boolean;
  stage: NYSCStage;
  stateOfDeployment: string;
  completedTasks: string[];
  readArticles: string[];
  activeProjectId: string | null;
  isOnboarded: boolean;
  isSyncing: boolean;
  lastSynced: number | null;
  lastSyncedPayload: string | null;
  lastSyncError: string | null;
  isInitialized: boolean;
  // Auth Actions
  setAuth: (data: { userId: string; email: string; role: 'user' | 'admin'; isPro: boolean }) => void;
  logout: () => void;
  // Profile Actions
  setUserId: (id: string) => void;
  setStage: (stage: NYSCStage) => void;
  setStateOfDeployment: (state: string) => void;
  toggleTask: (taskId: string) => void;
  toggleReadArticle: (articleId: string) => void;
  setActiveProject: (projectId: string | null) => void;
  completeOnboarding: () => void;
  syncProfile: () => Promise<void>;
  loadProfile: (force?: boolean) => Promise<void>;
  reset: () => void;
}
export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      userId: null,
      userEmail: null,
      userRole: 'user',
      isAuthenticated: false,
      isPro: false,
      stage: 'prospective',
      stateOfDeployment: '',
      completedTasks: [],
      readArticles: [],
      activeProjectId: null,
      isOnboarded: false,
      isSyncing: false,
      lastSynced: null,
      lastSyncedPayload: null,
      lastSyncError: null,
      isInitialized: false,
      setAuth: (data) => set({
        userId: data.userId,
        userEmail: data.email,
        userRole: data.role,
        isAuthenticated: true,
        isPro: data.isPro,
        isSyncing: false,
        lastSyncError: null,
        isInitialized: false
      }),
      logout: () => {
        localStorage.removeItem('nysc-companion-storage');
        get().reset();
        window.location.href = '/';
      },
      setUserId: (userId) => set({ userId }),
      setStage: (stage) => {
        set({ stage });
        if (get().isAuthenticated) get().syncProfile();
      },
      setStateOfDeployment: (stateOfDeployment) => {
        set({ stateOfDeployment });
        if (get().isAuthenticated) get().syncProfile();
      },
      toggleTask: (taskId) => {
        const currentTasks = get().completedTasks || [];
        const isRemoving = currentTasks.includes(taskId);
        set({
          completedTasks: isRemoving
            ? currentTasks.filter((id) => id !== taskId)
            : [...currentTasks, taskId],
        });
        toast.success(isRemoving ? 'Task revisited' : 'Task completed!');
        if (get().isAuthenticated) get().syncProfile();
      },
      toggleReadArticle: (articleId) => {
        const currentArticles = get().readArticles || [];
        const isRead = currentArticles.includes(articleId);
        set({
          readArticles: isRead
            ? currentArticles.filter((id) => id !== articleId)
            : [...currentArticles, articleId],
        });
        toast.info(isRead ? 'Article marked as unread' : 'Knowledge stored.');
        if (get().isAuthenticated) get().syncProfile();
      },
      setActiveProject: (activeProjectId) => {
        set({ activeProjectId });
        if (get().isAuthenticated) get().syncProfile();
      },
      completeOnboarding: () => {
        set({ isOnboarded: true });
        if (get().isAuthenticated) get().syncProfile();
      },
      syncProfile: async () => {
        const state = get();
        if (!state.userId || !state.isAuthenticated || state.isSyncing) return;
        if (state.userId.length < 5) return;
        const generatePayload = () => JSON.stringify({
          stage: get().stage,
          stateOfDeployment: get().stateOfDeployment,
          completedTasks: Array.isArray(get().completedTasks) ? get().completedTasks : [],
          readArticles: Array.isArray(get().readArticles) ? get().readArticles : [],
          activeProjectId: get().activeProjectId,
          isOnboarded: get().isOnboarded
        });
        const currentPayload = generatePayload();
        if (currentPayload === state.lastSyncedPayload) return;
        set({ isSyncing: true, lastSyncError: null });
        try {
          const response = await fetch(`/api/profile/${state.userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: currentPayload,
          });
          if (response.ok) {
            set({
              lastSynced: Date.now(),
              lastSyncedPayload: currentPayload,
              isSyncing: false,
              lastSyncError: null
            });
          } else {
            set({ isSyncing: false, lastSyncError: `Sync failed with status: ${response.status}` });
          }
        } catch (error) {
          set({ isSyncing: false, lastSyncError: 'Network contention' });
        }
      },
      loadProfile: async (force = false) => {
        const state = get();
        if (!state.userId || !state.isAuthenticated) {
          set({ isInitialized: true });
          return;
        }
        if (state.isSyncing && !force) return;
        if (state.isInitialized && !force) return;
        set({ isSyncing: true, lastSyncError: null });
        try {
          const response = await fetch(`/api/profile/${state.userId}`);
          if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
              const p = result.data as NYSCProfile;
              const remotePayload = JSON.stringify({
                stage: p.stage,
                stateOfDeployment: p.stateOfDeployment,
                completedTasks: Array.isArray(p.completedTasks) ? p.completedTasks : [],
                readArticles: Array.isArray(p.readArticles) ? p.readArticles : [],
                activeProjectId: p.activeProjectId,
                isOnboarded: p.isOnboarded
              });
              set({
                stage: p.stage || state.stage,
                stateOfDeployment: p.stateOfDeployment || state.stateOfDeployment,
                completedTasks: Array.isArray(p.completedTasks) ? p.completedTasks : [],
                readArticles: Array.isArray(p.readArticles) ? p.readArticles : [],
                activeProjectId: p.activeProjectId || state.activeProjectId,
                isOnboarded: p.isOnboarded ?? state.isOnboarded,
                lastSynced: p.updatedAt || Date.now(),
                isPro: p.isPro ?? state.isPro,
                lastSyncedPayload: remotePayload,
                lastSyncError: null,
              });
            }
          } else {
            set({ lastSyncError: `Load failed with status: ${response.status}` });
          }
        } catch (error) {
          set({ lastSyncError: 'Hydration fault' });
        } finally {
          set({ isSyncing: false, isInitialized: true });
        }
      },
      reset: () => {
        set({
          userId: null,
          userEmail: null,
          userRole: 'user',
          isAuthenticated: false,
          isPro: false,
          stage: 'prospective',
          stateOfDeployment: '',
          completedTasks: [],
          readArticles: [],
          activeProjectId: null,
          isOnboarded: false,
          lastSynced: null,
          lastSyncedPayload: null,
          lastSyncError: null,
          isSyncing: false,
          isInitialized: false
        });
      },
    }),
    {
      name: 'nysc-companion-storage',
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.isInitialized = false;
          state.isSyncing = false;
        }
      },
      partialize: (state) => ({
        userId: state.userId,
        userEmail: state.userEmail,
        userRole: state.userRole,
        isAuthenticated: state.isAuthenticated,
        isPro: state.isPro,
        stage: state.stage,
        stateOfDeployment: state.stateOfDeployment,
        completedTasks: Array.isArray(state.completedTasks) ? state.completedTasks : [],
        readArticles: Array.isArray(state.readArticles) ? state.readArticles : [],
        activeProjectId: state.activeProjectId,
        lastSynced: state.lastSynced,
        lastSyncedPayload: state.lastSyncedPayload,
      }),
    }
  )
);