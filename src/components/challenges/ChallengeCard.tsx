import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { cn } from '../../utils/cn';

export type ChallengeDifficulty = 'Beginner' | 'Intermediate' | 'Advanced';

export interface ChallengeMeta {
  id: string;
  title: string;
  difficulty: ChallengeDifficulty;
  type: string;
  thumbnailColor: string;
  summary: string;
}

interface ChallengeCardProps {
  challenge: ChallengeMeta;
  index?: number;
}

const difficultyColor: Record<ChallengeDifficulty, string> = {
  Beginner: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/40',
  Intermediate: 'bg-amber-500/15 text-amber-300 border-amber-400/40',
  Advanced: 'bg-rose-500/15 text-rose-300 border-rose-400/40',
};

export const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge, index = 0 }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 22,
        opacity: { duration: 0.35, ease: 'easeOut', delay: index * 0.04 },
        y: { duration: 0.35, ease: 'easeOut', delay: index * 0.04 },
      }}
      className="glass-panel flex flex-col border-slate-800/80 p-4 text-xs text-slate-200"
    >
      <div
        className={cn(
          'mb-3 flex h-24 items-center justify-center rounded-2xl bg-gradient-to-tr text-[11px] font-medium text-slate-50',
          challenge.thumbnailColor,
        )}
      >
        {challenge.type}
      </div>
      <div className="flex-1">
        <p className="text-[11px] text-slate-400">{challenge.difficulty} scope · {challenge.type}</p>
        <h3 className="mt-1 text-sm font-semibold text-slate-50">{challenge.title}</h3>
        <p className="mt-2 text-[11px] text-slate-400 line-clamp-3">{challenge.summary}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className={cn('inline-flex items-center rounded-full border px-2.5 py-1 text-[10px]', difficultyColor[challenge.difficulty])}>
          {challenge.difficulty}
        </span>
        <Link
          to={`/challenges/${challenge.id}`}
          className="inline-flex items-center gap-1 rounded-xl bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-950 shadow-soft hover:bg-slate-200"
        >
          View breakdown
          <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
};
