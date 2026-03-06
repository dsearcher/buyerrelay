'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { staggerContainer } from '@/lib/animations';

const CheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className="mt-0.5 shrink-0"
    aria-hidden="true"
  >
    <path
      d="M13.5 4.5L6.5 11.5L2.5 7.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface Feature {
  icon: React.ReactNode;
  heading: string;
  description: string;
  bullets: string[];
  screenshot: string;
  screenshotAlt: string;
}

const PhoneIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

const MessageIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const TransferIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 1l4 4-4 4" />
    <path d="M3 11V9a4 4 0 014-4h14" />
    <path d="M7 23l-4-4 4-4" />
    <path d="M21 13v2a4 4 0 01-4 4H3" />
  </svg>
);

const features: Feature[] = [
  {
    icon: <PhoneIcon />,
    heading: 'AI-Powered Calling',
    description:
      'Your leads get a human-sounding call within 60 seconds — while they\'re still on the listing page.',
    bullets: [
      'Calls before competitors even see the lead',
      'Natural conversation — not a robocall',
      'Handles "I\'m just looking" objections',
      'Hot leads transfer to you live, mid-call',
    ],
    screenshot: '/screenshots/mobile-app.png',
    screenshotAlt: 'BuyerRelay mobile notification showing warm buyer ready to tour',
  },
  {
    icon: <MessageIcon />,
    heading: 'Intelligent Text Conversations',
    description:
      'Real two-way conversations — not blast texts. Leads think they\'re texting your assistant.',
    bullets: [
      'References the exact listing they viewed',
      'Follows up at the right time, every time',
      'Reads intent — knows when to push, when to wait',
      'Warm handoff when they\'re ready to talk',
    ],
    screenshot: '/screenshots/ai-conversation.png',
    screenshotAlt: 'BuyerRelay AI conversation qualifying a lead with intent scoring',
  },
  {
    icon: <CalendarIcon />,
    heading: 'Automated Appointment Setting',
    description:
      'No more phone tag. Qualified buyers land directly on your calendar — pre-screened and ready.',
    bullets: [
      'Syncs with Google, Outlook, iCal',
      'Sends reminders so they actually show up',
      'Reschedules no-shows automatically',
      'You only meet pre-qualified buyers',
    ],
    screenshot: '/screenshots/features-dashboard.png',
    screenshotAlt: 'BuyerRelay dashboard showing lead funnel from inquiry to booked appointment',
  },
  {
    icon: <TransferIcon />,
    heading: 'Live Call Transfers',
    description:
      'The moment a lead says "I\'m ready" — you\'re on the phone with them, full context in hand.',
    bullets: [
      'Lead summary delivered before you say hello',
      'Only transfers when you\'re available',
      'Catches buyers at peak motivation',
      'Every text and call logged in your CRM',
    ],
    screenshot: '/screenshots/crm-sync.png',
    screenshotAlt: 'BuyerRelay CRM sync timeline showing lead handoff to agent',
  },
];

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <motion.div
      variants={{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col bg-bg-elevated rounded-[16px] p-8 shadow-brand-md border border-border hover:shadow-brand-lg"
      style={{ transition: 'box-shadow 300ms' }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-primary/5 text-primary mb-5">
        {feature.icon}
      </div>

      {/* Heading */}
      <h3
        className="font-heading text-[20px] font-bold text-text-primary mb-2"
        style={{ letterSpacing: '-0.01em' }}
      >
        {feature.heading}
      </h3>

      {/* Description */}
      <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Bullet points */}
      <ul className="flex flex-col gap-2 mb-6">
        {feature.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex items-start gap-2 text-[14px] text-text-secondary font-body"
          >
            <span className="text-primary">
              <CheckIcon />
            </span>
            {bullet}
          </li>
        ))}
      </ul>

      {/* Product screenshot */}
      <div className="mt-auto aspect-[16/10] rounded-[12px] overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 relative">
        <Image
          src={feature.screenshot}
          alt={feature.screenshotAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </motion.div>
  );
}

export function FeaturesGrid() {
  return (
    <SectionWrapper id="features" ariaLabel="Features">
      {/* Section heading */}
      <ScrollReveal className="text-center mb-12">
        <h2
          className="font-heading text-[32px] md:text-[40px] font-bold text-text-primary mb-4"
          style={{ letterSpacing: '-0.02em', lineHeight: '1.2' }}
        >
          One AI. Four Ways to Close.
        </h2>
        <p className="font-body text-[16px] md:text-[18px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
          Every lead gets called, texted, qualified, and booked — without you lifting a finger
        </p>
      </ScrollReveal>

      {/* Feature cards grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        {...staggerContainer}
      >
        {features.map((feature) => (
          <FeatureCard key={feature.heading} feature={feature} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
