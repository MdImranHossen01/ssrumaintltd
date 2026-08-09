'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionFadeProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean; // true = animate once, false = every scroll
}

export default function SectionFade({ children, className, delay = 0, once = false }: SectionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.08 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
