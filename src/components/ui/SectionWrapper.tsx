import type { SectionProps } from '@/types';
import type { ElementType, ReactNode } from 'react';

interface SectionWrapperProps extends SectionProps {
  children: ReactNode;
  dark?: boolean;
  noPadding?: boolean;
  ariaLabel?: string;
  as?: ElementType;
}

/**
 * Provides consistent section layout: max-width 1280px, horizontal padding,
 * vertical padding (96px desktop / 64px mobile), scroll-mt-20 for navbar offset.
 */
export function SectionWrapper({
  children,
  id,
  className = '',
  style,
  dark = false,
  noPadding = false,
  ariaLabel,
  as: Tag = 'section',
}: SectionWrapperProps) {
  return (
    <Tag
      id={id}
      style={style}
      aria-label={ariaLabel}
      className={`scroll-mt-20 ${dark ? 'bg-bg-dark text-white' : ''} ${noPadding ? '' : 'py-16 md:py-24'} ${className}`}
    >
      <div
        className={`mx-auto max-w-[1280px] ${noPadding ? '' : 'px-4 sm:px-6 lg:px-8'}`}
      >
        {children}
      </div>
    </Tag>
  );
}
