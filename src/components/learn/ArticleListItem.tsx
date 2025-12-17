import React from 'react';
import { Link } from 'react-router-dom';

interface ArticleListItemProps {
  id: string;
  slug: string;
  title: string;
  summary: string;
  difficulty: string;
  tags: string[];
}

export const ArticleListItem: React.FC<ArticleListItemProps> = ({ id, slug, title, summary, difficulty, tags }) => {
  return (
    <article className="glass-panel border-slate-800/80 p-4 text-xs text-slate-200">
      <p className="text-[11px] text-slate-400">{difficulty}</p>
      <h3 className="mt-1 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-[11px] text-slate-400">{summary}</p>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-900/80 px-2 py-0.5 border border-slate-800/80">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-3">
        <Link
          to={`/learn/${slug}`}
          className="inline-flex items-center rounded-xl bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-950 shadow-soft hover:bg-slate-200"
        >
          Read article
        </Link>
      </div>
    </article>
  );
};
