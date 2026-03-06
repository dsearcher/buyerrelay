'use client';

import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  staggerItem,
} from '@/lib/animations';

const useCases = [
  {
    label: 'Old Leads',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary shrink-0">
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 4v4l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Rehashed Leads',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary shrink-0">
        <path d="M13 3l-1.5 1.5M3 13l1.5-1.5M11.5 4.5A4.5 4.5 0 014.5 11.5M4.5 11.5A4.5 4.5 0 0111.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'New Leads Off Hours',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary shrink-0">
        <path d="M13.5 9.5a5.5 5.5 0 01-7-7 5.5 5.5 0 107 7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: 'Uncontacted Leads',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary shrink-0">
        <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 14c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 3l3 3M14 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

const integrations = [
  'HubSpot',
  'Follow Up Boss',
  'BoomTown',
  'Salesforce',
  'Sierra',
  'kvCORE',
  'Firepoint',
  'Chime',
];

export function CRMIntegrations() {
  return (
    <SectionWrapper id="integrations">
      {/* Top 2-column layout */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left column */}
        <motion.div {...slideInLeft}>
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Integrations
          </span>
          <h2 className="font-heading text-[40px] font-bold tracking-[-0.02em] leading-[1.2] text-text-primary mt-4">
            Works With Your CRM
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed mt-4 max-w-lg">
            BuyerRelay plugs into your existing tech stack. Import leads from
            any source and sync results back automatically.
          </p>

          {/* Use-case badges */}
          <div className="grid grid-cols-2 gap-3 mt-8">
            {useCases.map((uc) => (
              <motion.div
                key={uc.label}
                className="flex items-center gap-2.5 bg-bg-elevated rounded-full px-5 py-2.5 border border-border shadow-brand-sm cursor-default"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {uc.icon}
                <span className="font-medium text-sm text-text-primary">
                  {uc.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column - Screenshot placeholder */}
        <motion.div {...slideInRight}>
          <div className="aspect-[4/3] rounded-[16px] bg-gradient-to-br from-primary/5 to-accent/5 shadow-brand-lg flex flex-col items-center justify-center gap-4">
            {/* Simple timeline sketch */}
            <div className="flex flex-col gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                  <div
                    className="h-2 rounded-full bg-primary/10"
                    style={{ width: `${120 - i * 20}px` }}
                  />
                </div>
              ))}
            </div>
            <span className="text-text-muted text-sm font-medium mt-2">
              CRM Sync Timeline
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom logo grid */}
      <div className="mt-16">
        <p className="text-text-secondary text-sm font-medium text-center mb-8">
          Connects with 20+ platforms
        </p>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-6"
          {...staggerContainer}
        >
          {integrations.map((name) => (
            <motion.div
              key={name}
              className="bg-bg-elevated rounded-[12px] p-4 border border-border text-center transition-[border-color,transform] duration-300 hover:border-primary/30 hover:scale-[1.02]"
              {...staggerItem}
            >
              <span className="font-semibold text-text-secondary text-sm">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
