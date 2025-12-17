import { create } from 'zustand';

interface RoadmapProgress {
  [roadmapId: string]: {
    completedStepIds: string[];
  };
}

interface ProgressState {
  roadmapProgress: RoadmapProgress;
  toggleStep: (roadmapId: string, stepId: string) => void;
}

export const useProgressStore = create<ProgressState>((set) => ({
  roadmapProgress: {},
  toggleStep: (roadmapId, stepId) =>
    set((state) => {
      const existing = state.roadmapProgress[roadmapId]?.completedStepIds ?? [];
      const has = existing.includes(stepId);
      const nextSteps = has ? existing.filter((id) => id !== stepId) : [...existing, stepId];

      return {
        roadmapProgress: {
          ...state.roadmapProgress,
          [roadmapId]: {
            completedStepIds: nextSteps,
          },
        },
      };
    }),
}));
