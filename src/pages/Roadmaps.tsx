import React, { useMemo, useState } from 'react';
import roadmapsData from '../data/roadmaps.json';
import { Roadmap } from '../data/roadmapTypes';
import { RoadmapSidebar } from '../components/roadmaps/RoadmapSidebar';
import { Accordion } from '../components/ui/Accordion';
import { ProgressBar } from '../components/ui/ProgressBar';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { useProgressStore } from '../store/progressStore';

const typedRoadmaps = roadmapsData as Roadmap[];

export const RoadmapsPage: React.FC = () => {
	const [activeId, setActiveId] = useState<Roadmap['id']>('discovery');
  const { roadmapProgress, toggleStep } = useProgressStore();

  const activeRoadmap = useMemo(
    () => typedRoadmaps.find((r) => r.id === activeId) ?? typedRoadmaps[0],
    [activeId],
  );

  const totalSteps = activeRoadmap.sections.reduce((acc, section) => acc + section.steps.length, 0);
  const completed = roadmapProgress[activeRoadmap.id]?.completedStepIds.length ?? 0;
  const progressPercent = totalSteps ? Math.round((completed / totalSteps) * 100) : 0;

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 md:flex-row">
        <RoadmapSidebar
          roadmaps={typedRoadmaps}
          activeId={activeRoadmap.id}
          onChange={setActiveId}
        />

        <div className="flex-1 space-y-6">
          <div className="glass-panel border-slate-800/80 p-5">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Process</p>
            <h1 className="mt-2 text-xl sm:text-2xl font-semibold text-slate-50">{activeRoadmap.title}</h1>
            <p className="mt-2 text-xs text-slate-400 max-w-xl">{activeRoadmap.description}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px]">{activeRoadmap.level}</span>
              <span>{totalSteps} steps · {progressPercent}% complete</span>
            </div>
            <div className="mt-3">
              <ProgressBar value={progressPercent} />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">Sections</p>
            <Accordion
              items={activeRoadmap.sections.map((section) => ({
                id: section.id,
                title: section.title,
                meta: `${section.difficulty} · ${section.steps.length} steps`,
                content: (
                  <ul className="space-y-2">
                    {section.steps.map((step, index) => {
                      const stepId = `${section.id}-${index}`;
                      const isDone = roadmapProgress[activeRoadmap.id]?.completedStepIds.includes(stepId) ?? false;
                      return (
                        <li key={stepId} className="flex items-start gap-2">
                          <button
                            type="button"
                            onClick={() => toggleStep(activeRoadmap.id, stepId)}
                            className={
                              'mt-[2px] inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-[10px] text-slate-300'
                            }
                            aria-label={isDone ? 'Mark step as incomplete' : 'Mark step as complete'}
                          >
                            {isDone && <span>✓</span>}
                          </button>
                          <p className="text-[11px] leading-snug text-slate-200">{step}</p>
                        </li>
                      );
                    })}
                  </ul>
                ),
              }))}
              defaultOpenId={activeRoadmap.sections[0]?.id}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
