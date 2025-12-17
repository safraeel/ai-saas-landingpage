import React, { useMemo, useState } from 'react';
import articlesData from '../data/articles.json';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { ArticleListItem } from '../components/learn/ArticleListItem';

const PAGE_SIZE = 5;

export const LearnPage: React.FC = () => {
  const [page, setPage] = useState(1);

  const total = (articlesData as unknown[]).length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return (articlesData as any[]).slice(start, start + PAGE_SIZE);
  }, [page]);

  return (
    <SectionWrapper>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">Insights</h1>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              Short, focused notes on landing page conversion, UX details, performance, and shipping AI marketing sites.
            </p>
          </div>
          <p className="text-xs text-slate-500">
            Page {page} of {totalPages}
          </p>
        </div>

        <div className="space-y-4">
          {pageItems.map((article: any) => (
            <ArticleListItem
              key={article.id}
              id={article.id}
              slug={article.slug}
              title={article.title}
              summary={article.summary}
              difficulty={article.difficulty}
              tags={article.tags}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between pt-2 text-xs text-slate-400">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[11px] disabled:opacity-40"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="rounded-xl border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-[11px] disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};
