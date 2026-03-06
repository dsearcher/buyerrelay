'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

/**
 * Container that staggers its children's animations.
 * Each direct child should be a StaggerItem for proper stagger behavior.
 * Uses whileInView with once:true.
 */
export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.15,
}: StaggerChildrenProps) {
  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ staggerChildren: staggerDelay }}
    >
      {children}
    </motion.div>
  );
}

/** Child item to be used inside StaggerChildren */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
