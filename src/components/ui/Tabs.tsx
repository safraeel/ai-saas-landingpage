import React from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, activeId, onChange, className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 rounded-2xl bg-slate-900/70 p-1.5', className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={cn(
              'relative rounded-xl px-3.5 py-1.5 text-xs font-medium transition-colors',
              isActive
                ? 'bg-slate-50 text-slate-950 shadow-soft'
                : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/80',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};
