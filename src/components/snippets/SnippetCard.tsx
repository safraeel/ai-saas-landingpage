import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useCopyToClipboard } from '../../hooks/useCopyToClipboard';
import { cn } from '../../utils/cn';

export interface SnippetMeta {
  id: string;
  category: 'html-css' | 'javascript' | 'react' | 'boilerplates';
  title: string;
  description: string;
  tags: string[];
  code: string;
  language: string;
}

interface SnippetCardProps {
  snippet: SnippetMeta;
}

export const SnippetCard: React.FC<SnippetCardProps> = ({ snippet }) => {
  const { copied, copy } = useCopyToClipboard();

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      className="glass-panel flex h-full flex-col border-slate-800/80 p-4 text-xs text-slate-200"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.16em] text-slate-500">Snippet</p>
          <h3 className="mt-1 text-sm font-semibold text-slate-50">{snippet.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => copy(snippet.code)}
          className={cn(
            'inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-[10px] font-medium transition-colors',
            copied
              ? 'border-emerald-400/60 bg-emerald-500/10 text-emerald-200'
              : 'border-slate-700 bg-slate-900/70 text-slate-200 hover:border-slate-600 hover:bg-slate-800',
          )}
        >
          {copied ? <CheckIcon className="h-3.5 w-3.5" /> : <ClipboardDocumentIcon className="h-3.5 w-3.5" />}
          {copied ? 'Copied' : 'Copy code'}
        </button>
      </div>
      <p className="mt-2 text-[11px] text-slate-400">{snippet.description}</p>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px] text-slate-400">
        {snippet.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-300 border border-slate-800/80"
          >
            {tag}
          </span>
        ))}
      </div>
      <pre className="mt-3 flex-1 overflow-x-auto rounded-2xl bg-slate-950/80 p-3 text-[11px] leading-relaxed text-slate-200">
        <code>{snippet.code}</code>
      </pre>
    </motion.article>
  );
};
