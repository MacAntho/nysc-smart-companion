import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { toast } from 'sonner';
import type { NYSCStage, NYSCProfile } from '@shared/types';
interface AppState {
  userId: string | null;
  stage: NYSCStage;
  stateOfDeployment: string;
  completedTasks: string[];
  readArticles: string[];
  activeProjectId: string | null;
  isOnboarded: boolean;
  isSyncing: boolean;
  lastSynced: number | null;
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
      stage: 'prospective',
      stateOfDeployment: '',
      completedTasks: [],
      readArticles: [],
      activeProjectId: null,
      isOnboarded: false,
      isSyncing: false,
      lastSynced: null,
      setUserId: (userId) => set({ userId }),
      setStage: (stage) => {
        set({ stage });
        get().syncProfile();
      },
      setStateOfDeployment: (stateOfDeployment) => {
        set({ stateOfDeployment });
        get().syncProfile();
      },
      toggleTask: (taskId) => {
        const isRemoving = get().completedTasks.includes(taskId);
        set((state) => ({
          completedTasks: isRemoving
            ? state.completedTasks.filter((id) => id !== taskId)
            : [...state.completedTasks, taskId],
        }));
        toast.success(isRemoving ? 'Task marked as incomplete' : 'Task completed!');
        get().syncProfile();
      },
      toggleReadArticle: (articleId) => {
        const isRead = get().readArticles.includes(articleId);
        set((state) => ({
          readArticles: isRead
            ? state.readArticles.filter((id) => id !== articleId)
            : [...state.readArticles, articleId],
        }));
        toast.info(isRead ? 'Article marked as unread' : 'Knowledge shared! Article read.');
        get().syncProfile();
      },
      setActiveProject: (activeProjectId) => {
        set({ activeProjectId });
        if (activeProjectId) {
          toast.success('Project enrolled successfully');
        } else {
          toast.info('Project removed');
        }
        get().syncProfile();
      },
      completeOnboarding: () => {
        set({ isOnboarded: true });
        get().syncProfile();
      },
      syncProfile: async () => {
        const { userId, stage, stateOfDeployment, completedTasks, readArticles, activeProjectId, isOnboarded } = get();
        if (!userId) return;
        set({ isSyncing: true });
        try {
          const response = await fetch(`/api/profile/${userId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ stage, stateOfDeployment, completedTasks, readArticles, activeProjectId, isOnboarded }),
          });
          if (response.ok) {
            set({ lastSynced: Date.now() });
          }
        } catch (error) {
          console.error('Failed to sync profile:', error);
          toast.error('Cloud sync failed. Will retry later.');
        } finally {
          set({ isSyncing: false });
        }
      },
      loadProfile: async () => {
        const { userId } = get();
        if (!userId) return;
        try {
          const response = await fetch(`/api/profile/${userId}`);
          if (response.ok) {
            const result = await response.json();
            if (result.success && result.data) {
              const p = result.data as NYSCProfile;
              set({
                stage: p.stage,
                stateOfDeployment: p.stateOfDeployment,
                completedTasks: p.completedTasks || [],
                readArticles: p.readArticles || [],
                activeProjectId: p.activeProjectId || null,
                isOnboarded: p.isOnboarded,
                lastSynced: p.updatedAt
              });
            }
          }
        } catch (error) {
          console.error('Failed to load profile:', error);
        }
      },
      reset: () => set({
        userId: null,
        stage: 'prospective',
        stateOfDeployment: '',
        completedTasks: [],
        readArticles: [],
        activeProjectId: null,
        isOnboarded: false,
        lastSynced: null
      }),
    }),
    {
      name: 'nysc-companion-storage',
      partialize: (state) => ({
        userId: state.userId,
        stage: state.stage,
        stateOfDeployment: state.stateOfDeployment,
        completedTasks: state.completedTasks,
        readArticles: state.readArticles,
        activeProjectId: state.activeProjectId,
        isOnboarded: state.isOnboarded,
        lastSynced: state.lastSynced,
      }),
    }
  )
);