import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';
import type { Roadmap } from '../../data/roadmapTypes';
import { useProgressStore } from '../../store/progressStore';

interface RoadmapSidebarProps {
  roadmaps: Roadmap[];
  activeId: Roadmap['id'];
  onChange: (id: Roadmap['id']) => void;
}

export const RoadmapSidebar: React.FC<RoadmapSidebarProps> = ({ roadmaps, activeId, onChange }) => {
  const { roadmapProgress } = useProgressStore();

  return (
    <aside className="glass-panel hidden h-full w-full max-w-xs flex-shrink-0 flex-col border-slate-800/80 p-4 md:flex">
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Delivery stages</p>
      <ul className="mt-3 space-y-1.5 text-xs">
        {roadmaps.map((roadmap) => {
          const isActive = roadmap.id === activeId;
      const totalSteps = roadmap.sections.reduce((acc, section) => acc + section.steps.length, 0);
      const completed = roadmapProgress[roadmap.id]?.completedStepIds.length ?? 0;
      const progressPercent = totalSteps ? Math.round((completed / totalSteps) * 100) : 0;
          return (
            <li key={roadmap.id}>
          <motion.button
            type="button"
            onClick={() => onChange(roadmap.id)}
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={cn(
              'relative flex w-full flex-col rounded-xl border px-3 py-2 text-left transition-colors',
              isActive
                ? 'border-brand-400/70 bg-brand-500/15 text-slate-50'
                : 'border-slate-800/80 bg-slate-950/40 text-slate-300 hover:border-slate-700 hover:bg-slate-900/80',
            )}
          >
            <span className="text-xs font-medium">{roadmap.title}</span>
            <div className="mt-0.5 flex items-center justify-between gap-2 text-[11px]">
              <span className="text-slate-400">{roadmap.level}</span>
              {totalSteps > 0 && (
                <span className="inline-flex items-center rounded-full bg-slate-900/70 px-2 py-[2px] text-[10px] text-slate-300">
                  {progressPercent}%
                </span>
              )}
            </div>
          </motion.button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
