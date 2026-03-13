import React from 'react';
import { motion } from 'framer-motion';

const starPositions = Array.from({ length: 20 }).map((_, i) => ({
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 5,
  duration: Math.random() * 3 + 2
}));

export const AnimatedBackground: React.FC = () => {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-100 dark:bg-slate-950">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-multiply dark:opacity-20 dark:mix-blend-overlay"></div>
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.3, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 left-1/4 h-[40rem] w-[40rem] rounded-full bg-brand-500/20 blur-[120px] dark:bg-brand-500/20" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[-10rem] right-[-10rem] h-[50rem] w-[50rem] rounded-full bg-violet-500/20 blur-[120px] dark:bg-violet-600/20" 
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.25, 0.1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 5 }}
        className="absolute top-1/3 -left-24 h-[45rem] w-[45rem] rounded-full bg-blue-400/10 blur-[120px] dark:bg-blue-500/10" 
      />
      
      {starPositions.map((star, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: star.duration, delay: star.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute rounded-full bg-slate-300/70 shadow-[0_0_8px_rgba(71,85,105,0.45)] dark:bg-white dark:shadow-[0_0_12px_rgba(255,255,255,0.8)]"
          style={{ top: star.top, left: star.left, height: star.size, width: star.size }}
        />
      ))}
    </div>
  );
};
