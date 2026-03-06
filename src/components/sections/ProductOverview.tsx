'use client';

import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { CountUp } from '@/components/animations/CountUp';
import { staggerContainer, staggerItem, scaleOnHover } from '@/lib/animations';

const stats = [
  {
    value: 50,
    suffix: '%',
    label: 'Lower Overhead',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    value: 17,
    suffix: '%',
    label: 'More Qualified Leads',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    value: 31,
    suffix: '%',
    label: 'Higher Answer Rate',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        <path d="M14.05 2a9 9 0 0 1 8 7.94" />
        <path d="M14.05 6A5 5 0 0 1 18 10" />
      </svg>
    ),
  },
];

export function ProductOverview() {
  return (
    <SectionWrapper id="how-it-works">
      {/* Section Heading */}
      <ScrollReveal>
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="font-heading text-[32px] md:text-[40px] font-bold leading-tight tracking-[-0.02em] text-text-primary mb-4"
          >
            See How It Works
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Watch BuyerRelay convert a cold lead into a booked appointment in under 2 minutes
          </p>
        </div>
      </ScrollReveal>

      {/* Video Placeholder */}
      <ScrollReveal delay={0.1}>
        <div
          className="relative aspect-video rounded-[16px] overflow-hidden mb-12 md:mb-16"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 102, 255, 0.08), rgba(124, 58, 237, 0.08))',
            boxShadow: '0 8px 32px rgba(0, 102, 255, 0.07), 0 2px 8px rgba(0, 102, 255, 0.04)',
          }}
        >
          {/* Subtle grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #0066FF 1px, transparent 0)',
              backgroundSize: '32px 32px',
            }}
          />

          {/* Center content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            {/* Play button */}
            <motion.button
              className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              style={{
                boxShadow: '0 8px 32px rgba(0, 102, 255, 0.15), 0 2px 8px rgba(0, 102, 255, 0.08)',
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              aria-label="Play product demo video"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#0066FF"
                className="ml-1"
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </motion.button>

            <span className="text-sm font-medium text-text-secondary/60">
              Product Demo Coming Soon
            </span>
          </div>

          {/* Border effect */}
          <div className="absolute inset-0 rounded-[16px] border border-[rgba(0,102,255,0.08)]" />
        </div>
      </ScrollReveal>

      {/* Stat Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        {...staggerContainer}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            className="bg-bg-elevated rounded-[16px] p-8 border border-border text-center"
            style={{
              boxShadow: '0 4px 16px rgba(0, 102, 255, 0.05), 0 1px 4px rgba(0, 102, 255, 0.03)',
            }}
            {...staggerItem}
            {...scaleOnHover}
          >
            {/* Icon */}
            <div className="flex justify-center mb-4 text-primary">
              {stat.icon}
            </div>

            {/* Number */}
            <CountUp
              target={stat.value}
              suffix={stat.suffix}
              className="block font-heading text-[48px] font-extrabold leading-none tracking-[-0.02em] text-primary mb-2"
            />

            {/* Label */}
            <p className="text-text-secondary font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
