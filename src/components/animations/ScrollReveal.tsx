'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}

const directionVariants = {
  up: { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: 40 }, whileInView: { opacity: 1, x: 0 } },
  fade: { initial: { opacity: 0 }, whileInView: { opacity: 1 } },
};

/**
 * Wraps any content in a scroll-triggered fade-in animation.
 * Uses whileInView with once:true so animation only fires once.
 * Respects prefers-reduced-motion via Motion's built-in support.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollRevealProps) {
  const variant = directionVariants[direction];

  return (
    <motion.div
      className={className}
      initial={variant.initial}
      whileInView={variant.whileInView}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  );
}
