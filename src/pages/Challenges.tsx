import React, { useMemo, useState } from 'react';
import challengesData from '../data/challenges.json';
import { ChallengeCard, ChallengeDifficulty, ChallengeMeta } from '../components/challenges/ChallengeCard';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Tabs } from '../components/ui/Tabs';

const difficultyTabs = [
  { id: 'all', label: 'All' },
  { id: 'Beginner', label: 'Quick' },
  { id: 'Intermediate', label: 'Standard' },
  { id: 'Advanced', label: 'Complex' },
];

export const ChallengesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const challenges = challengesData as unknown as ChallengeMeta[];

  const filtered = useMemo(() => {
    if (activeTab === 'all') return challenges;
    return challenges.filter((c) => c.difficulty === activeTab);
  }, [activeTab, challenges]);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">Case Studies</h1>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              AI landing page demos: conversion-first sections, clean component systems, and premium motion.
            </p>
          </div>
          <Tabs tabs={difficultyTabs} activeId={activeTab} onChange={setActiveTab} />
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {filtered.map((challenge, index) => (
            <ChallengeCard key={challenge.id} challenge={challenge} index={index} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
