'use client';

import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { staggerContainer, staggerItem } from '@/lib/animations';

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

const tiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$299',
    period: '/mo',
    description: 'For solo agents getting started',
    features: [
      'Up to 100 leads/month',
      'AI text conversations',
      'Basic lead qualification',
      'CRM integration (1 platform)',
      'Email support',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$499',
    period: '/mo',
    description: 'For teams ready to scale',
    features: [
      'Up to 500 leads/month',
      'AI text + voice calling',
      'Advanced qualification scoring',
      'CRM integration (unlimited)',
      'Live call transfers',
      'Priority support',
      'Custom scripts',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For brokerages and large teams',
    features: [
      'Unlimited leads',
      'AI text + voice + live transfers',
      'Custom AI training',
      'Dedicated account manager',
      'Multi-office support',
      'SLA guarantee',
      'API access',
    ],
    cta: 'Contact Sales',
  },
];

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0 mt-0.5"
      aria-hidden="true"
    >
      <path
        d="M3 8.5L6.5 12L13 4"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M8 1L2 4V7.5C2 11.09 4.56 14.41 8 15C11.44 14.41 14 11.09 14 7.5V4L8 1Z"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5 8L7 9.5L10.5 6"
        stroke="#94A3B8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ tier }: { tier: PricingTier }) {
  const cardContent = (
    <div
      className={`relative flex flex-col h-full bg-white rounded-[16px] p-8 ${
        tier.highlighted ? '' : 'shadow-[0_4px_24px_rgba(0,102,255,0.07)]'
      }`}
    >
      {/* Most Popular badge */}
      {tier.highlighted && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-block bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      {/* Tier name */}
      <h3
        className="font-heading text-xl font-semibold text-[#0F172A] mt-2"
      >
        {tier.name}
      </h3>

      {/* Description */}
      <p className="text-[#475569] text-sm mt-1">{tier.description}</p>

      {/* Price */}
      <div className="flex items-baseline mt-6 mb-6">
        {tier.period ? (
          <>
            <span className="text-lg text-[#475569]">$</span>
            <span className="font-heading text-5xl font-bold text-[#0F172A] tracking-[-0.03em]">
              {tier.price.replace('$', '')}
            </span>
            <span className="text-lg text-[#475569] ml-1">{tier.period}</span>
          </>
        ) : (
          <span className="font-heading text-5xl font-bold text-[#0F172A] tracking-[-0.03em]">
            {tier.price}
          </span>
        )}
      </div>

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon />
            <span className="text-sm text-[#475569]">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8">
        {tier.highlighted ? (
          <button
            className="w-full py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white font-semibold text-sm hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] active:opacity-80"
          >
            {tier.cta}
          </button>
        ) : (
          <button
            className="w-full py-3 rounded-full border-2 border-[#E2E8F0] text-[#0F172A] font-semibold text-sm hover:border-[#0066FF] hover:text-[#0066FF] transition-[border-color,color] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0066FF] active:bg-[#F8FAFC]"
          >
            {tier.cta}
          </button>
        )}
      </div>
    </div>
  );

  if (tier.highlighted) {
    return (
      <motion.div
        {...staggerItem}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative scale-105 z-10"
      >
        {/* Gradient border wrapper */}
        <div className="bg-gradient-to-br from-[#0066FF] to-[#7C3AED] rounded-[18px] p-[2px] shadow-[0_8px_40px_rgba(0,102,255,0.15)]">
          {cardContent}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div {...staggerItem}>
      {cardContent}
    </motion.div>
  );
}

export function Pricing() {
  return (
    <SectionWrapper id="pricing" ariaLabel="Pricing">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="font-heading text-4xl md:text-[40px] font-bold text-[#0F172A] tracking-[-0.02em]">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-[#475569] max-w-2xl mx-auto">
          Start converting more leads today. No setup fees, cancel anytime.
        </p>
      </div>

      {/* Pricing cards */}
      <motion.div
        {...staggerContainer}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto"
      >
        {tiers.map((tier) => (
          <PricingCard key={tier.name} tier={tier} />
        ))}
      </motion.div>

      {/* Trial notice */}
      <div className="text-center mt-12 space-y-2">
        <p className="text-[#475569] text-sm font-medium">
          All plans include a 14-day free trial
        </p>
        <p className="flex items-center justify-center gap-2 text-[#94A3B8] text-sm">
          <ShieldIcon />
          No credit card required
        </p>
      </div>
    </SectionWrapper>
  );
}
