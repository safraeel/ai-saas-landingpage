import React from 'react';
import { cn } from '../../utils/cn';

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ value, className }) => {
  const safeValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn('h-2 w-full overflow-hidden rounded-full bg-slate-800', className)}>
      <div
        className="h-full rounded-full bg-gradient-to-r from-brand-400 via-emerald-400 to-violet-400 transition-all duration-500"
        style={{ width: `${safeValue}%` }}
      />
    </div>
  );
};
