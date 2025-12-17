import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import challengesData from '../data/challenges.json';

interface ChallengeDetail {
  id: string;
  title: string;
  difficulty: string;
  type: string;
  thumbnailColor: string;
  summary: string;
  requirements: string[];
  assets: string[];
  acceptanceCriteria: string[];
  evaluationTips: string[];
}

export const ChallengeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const challenge = useMemo(
    () => (challengesData as ChallengeDetail[]).find((c) => c.id === id),
    [id],
  );

  if (!challenge) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-400">Case study not found.</p>
        <button
          type="button"
          onClick={() => navigate('/challenges')}
          className="rounded-xl bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-950"
        >
          Back to Case Studies
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="glass-panel border-slate-800/80 p-5 text-xs text-slate-200">
        <p className="text-[11px] text-slate-400">{challenge.difficulty} · {challenge.type}</p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-50">{challenge.title}</h1>
        <p className="mt-2 text-[11px] text-slate-400 max-w-xl">{challenge.summary}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-3 text-xs text-slate-200">
        <div className="glass-panel border-slate-800/80 p-4">
          <h2 className="text-sm font-semibold text-slate-50">Requirements</h2>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
            {challenge.requirements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-panel border-slate-800/80 p-4">
          <h2 className="text-sm font-semibold text-slate-50">Assets</h2>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
            {challenge.assets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="glass-panel border-slate-800/80 p-4">
          <h2 className="text-sm font-semibold text-slate-50">Evaluation tips</h2>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
            {challenge.evaluationTips.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="glass-panel border-slate-800/80 p-4 text-xs text-slate-200">
        <h2 className="text-sm font-semibold text-slate-50">Acceptance criteria</h2>
        <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
          {challenge.acceptanceCriteria.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
