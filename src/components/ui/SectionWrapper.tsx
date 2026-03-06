import type { SectionProps } from '@/types';
import type { ReactNode } from 'react';

interface SectionWrapperProps extends SectionProps {
  children: ReactNode;
  dark?: boolean;
  noPadding?: boolean;
}

/**
 * Provides consistent section layout: max-width 1280px, horizontal padding,
 * vertical padding (96px desktop / 64px mobile), scroll-mt-20 for navbar offset.
 */
export function SectionWrapper({
  children,
  id,
  className = '',
  dark = false,
  noPadding = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 ${dark ? 'bg-bg-dark text-white' : ''} ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      <div
        className={`mx-auto max-w-[1280px] ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}`}
      >
        {children}
      </div>
    </section>
  );
}
