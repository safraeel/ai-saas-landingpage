import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, delay = 0 }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.4, ease: 'easeOut', delay }}
      className="space-y-6"
    >
      {children}
    </motion.section>
  );
};
