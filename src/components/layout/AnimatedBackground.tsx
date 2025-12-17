import React from 'react';

const starPositions = [
  { top: '10%', left: '15%', delay: 0 },
  { top: '22%', left: '65%', delay: 1.3 },
  { top: '35%', left: '40%', delay: 2.1 },
  { top: '48%', left: '75%', delay: 0.7 },
  { top: '60%', left: '18%', delay: 1.8 },
  { top: '72%', left: '55%', delay: 2.7 },
  { top: '82%', left: '32%', delay: 0.4 },
  { top: '15%', left: '82%', delay: 2.3 },
];

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Static blobs (no motion) */}
      <div className="absolute -top-32 left-1/4 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[-2rem] h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
      <div className="absolute top-1/3 -left-24 h-72 w-72 rounded-full bg-emerald-400/16 blur-3xl" />

      {/* Static stars (no twinkle) */}
      {starPositions.map((star) => (
        <span
          key={`${star.top}-${star.left}`}
          className="absolute h-1 w-1 rounded-full bg-white/70 shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ top: star.top, left: star.left }}
        />
      ))}
    </div>
  );
};
