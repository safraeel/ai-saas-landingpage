import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={cn('glass-panel relative overflow-hidden', className)}
    >
      {children}
    </motion.div>
  );
};
