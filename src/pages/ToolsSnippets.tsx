import React, { useMemo, useState } from 'react';
import snippetsData from '../data/snippets.json';
import { SectionWrapper } from '../components/ui/SectionWrapper';
import { Tabs } from '../components/ui/Tabs';
import { SnippetCard, SnippetMeta } from '../components/snippets/SnippetCard';

const snippetTabs = [
  { id: 'all', label: 'All' },
  { id: 'html-css', label: 'HTML & CSS' },
  { id: 'javascript', label: 'JavaScript' },
  { id: 'react', label: 'React Hooks' },
  { id: 'boilerplates', label: 'Boilerplates' },
];

export const ToolsSnippetsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const snippets = snippetsData as unknown as SnippetMeta[];

  const filtered = useMemo(() => {
    if (activeTab === 'all') return snippets;
    return snippets.filter((s) => s.category === activeTab);
  }, [activeTab, snippets]);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">Components</h1>
            <p className="mt-1 text-sm text-slate-400 max-w-xl">
              Reusable UI building blocks for AI landing pages: sections, hooks, and production-ready patterns.
            </p>
          </div>
          <Tabs tabs={snippetTabs} activeId={activeTab} onChange={setActiveTab} />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((snippet) => (
            <SnippetCard key={snippet.id} snippet={snippet} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};
