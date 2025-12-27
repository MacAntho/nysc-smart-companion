import { create } from 'zustand';
import { persist } from 'zustand/middleware';
export type NYSCStage = 'prospective' | 'mobilization' | 'camp' | 'ppa' | 'cds' | 'pop';
interface AppState {
  stage: NYSCStage;
  stateOfDeployment: string;
  completedTasks: string[];
  isOnboarded: boolean;
  setStage: (stage: NYSCStage) => void;
  setStateOfDeployment: (state: string) => void;
  toggleTask: (taskId: string) => void;
  completeOnboarding: () => void;
  reset: () => void;
}
export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      stage: 'prospective',
      stateOfDeployment: '',
      completedTasks: [],
      isOnboarded: false,
      setStage: (stage) => set({ stage }),
      setStateOfDeployment: (stateOfDeployment) => set({ stateOfDeployment }),
      toggleTask: (taskId) => set((state) => ({
        completedTasks: state.completedTasks.includes(taskId)
          ? state.completedTasks.filter((id) => id !== taskId)
          : [...state.completedTasks, taskId],
      })),
      completeOnboarding: () => set({ isOnboarded: true }),
      reset: () => set({ stage: 'prospective', stateOfDeployment: '', completedTasks: [], isOnboarded: false }),
    }),
    {
      name: 'nysc-companion-storage',
    }
  )
);