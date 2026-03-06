'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { animate } from 'motion';

interface CountUpProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

/**
 * Animated number counter that starts when scrolled into view.
 * Uses Motion's animate() function for smooth number interpolation.
 * Do NOT replace with react-countup -- it has React 19 compatibility issues.
 */
export function CountUp({
  target,
  duration = 2,
  suffix = '',
  className,
}: CountUpProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      animate(0, target, {
        duration,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (latest) => setDisplayValue(Math.round(latest)),
      });
    }
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {displayValue}
      {suffix}
    </span>
  );
}
