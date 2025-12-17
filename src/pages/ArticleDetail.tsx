import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import articlesData from '../data/articles.json';

interface ArticleSection {
  id: string;
  title: string;
  content: string;
}

interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  difficulty: string;
  tags: string[];
  sections: ArticleSection[];
}

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = useMemo(
    () => (articlesData as Article[]).find((a) => a.slug === slug),
    [slug],
  );

  if (!article) {
    return (
      <div className="space-y-4">
        <p className="text-sm text-slate-400">Article not found.</p>
        <button
          type="button"
          onClick={() => navigate('/learn')}
          className="rounded-xl bg-slate-50 px-3 py-1.5 text-[11px] font-medium text-slate-950"
        >
          Back to Learn
        </button>
      </div>
    );
  }

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,0.9fr)]">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="prose prose-invert max-w-none prose-p:text-slate-200 prose-li:text-slate-200"
      >
        <h1>{article.title}</h1>
        <p className="lead text-slate-300">{article.summary}</p>
        {article.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2>{section.title}</h2>
            {section.content.split('\n').map((para, idx) =>
              para.trim() ? <p key={idx}>{para}</p> : null,
            )}
          </section>
        ))}
      </motion.article>

      <aside className="glass-panel h-fit border-slate-800/80 p-4 text-xs text-slate-200">
        <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">On this page</p>
        <ul className="mt-3 space-y-1.5">
          {article.sections.map((section) => (
            <li key={section.id}>
              <button
                type="button"
                onClick={() => handleScrollTo(section.id)}
                className="text-left text-[11px] text-slate-300 hover:text-slate-50"
              >
                {section.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};
