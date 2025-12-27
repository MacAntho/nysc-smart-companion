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
  loadProfile: () => Promise<void>;
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
      isInitialized: false,
      setAuth: (data) => set({
        userId: data.userId,
        userEmail: data.email,
        userRole: data.role,
        isAuthenticated: true,
        isPro: data.isPro,
        isInitialized: true
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
        const currentTasks = get().completedTasks;
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
        const currentArticles = get().readArticles;
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
        if (activeProjectId) {
          toast.success('Project enrolled successfully');
        } else {
          toast.info('Project removed');
        }
        if (get().isAuthenticated) get().syncProfile();
      },
      completeOnboarding: () => {
        set({ isOnboarded: true });
        if (get().isAuthenticated) get().syncProfile();
      },
      syncProfile: async () => {
        const state = get();
        const { userId, isAuthenticated, isSyncing, lastSyncedPayload } = state;
        if (!userId || !isAuthenticated || isSyncing) return;
        const payload = {
          stage: state.stage,
          stateOfDeployment: state.stateOfDeployment,
          completedTasks: state.completedTasks,
          readArticles: state.readArticles,
          activeProjectId: state.activeProjectId,
          isOnboarded: state.isOnboarded
        };
        const payloadString = JSON.stringify(payload);
        if (payloadString === lastSyncedPayload) return;
        set({ isSyncing: true });
        try {
          const response = await fetch(`/api/profile/${userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payloadString,
          });
          if (response.ok) {
            set({ lastSynced: Date.now(), lastSyncedPayload: payloadString });
          } else {
            console.warn(`[SYNC FAIL ${response.status}]`);
          }
        } catch (error) {
          console.error('[SYNC FAILURE]', error);
        } finally {
          set({ isSyncing: false });
        }
      },
      loadProfile: async () => {
        const state = get();
        const { userId, isAuthenticated, isSyncing } = state;
        // Refined check: Ensure valid userId and prevent concurrent redundant loads
        if (!userId || !isAuthenticated || isSyncing) {
            if (!isSyncing) set({ isInitialized: true });
            return;
        }
        set({ isSyncing: true });
        try {
          const response = await fetch(`/api/profile/${userId}`);
          if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
              const p = result.data as NYSCProfile;
              const incomingPayloadString = JSON.stringify({
                stage: p.stage,
                stateOfDeployment: p.stateOfDeployment,
                completedTasks: p.completedTasks,
                readArticles: p.readArticles,
                activeProjectId: p.activeProjectId,
                isOnboarded: p.isOnboarded
              });
              set({
                stage: p.stage || 'prospective',
                stateOfDeployment: p.stateOfDeployment || '',
                completedTasks: Array.isArray(p.completedTasks) ? p.completedTasks : [],
                readArticles: Array.isArray(p.readArticles) ? p.readArticles : [],
                activeProjectId: p.activeProjectId || null,
                isOnboarded: p.isOnboarded ?? false,
                lastSynced: p.updatedAt || Date.now(),
                isPro: p.isPro ?? false,
                lastSyncedPayload: incomingPayloadString,
              });
            }
          }
        } catch (error) {
          console.error('[LOAD PROFILE FAILURE]', error);
          toast.error('Cloud sync failed. Local data preserved.');
        } finally {
          // Hardened: Always set isInitialized to true after attempt
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
          isSyncing: false,
          isInitialized: false
        });
      },
    }),
    {
      name: 'nysc-companion-storage',
      onRehydrateStorage: () => (state) => {
        // Rehydrated from local storage, but not yet verified with cloud
        if (state) {
          state.isInitialized = false; 
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
        completedTasks: state.completedTasks,
        readArticles: state.readArticles,
        activeProjectId: state.activeProjectId,
        isOnboarded: state.isOnboarded,
        lastSynced: state.lastSynced,
        lastSyncedPayload: state.lastSyncedPayload,
      }),
    }
  )
);