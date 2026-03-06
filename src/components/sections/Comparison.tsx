'use client';

import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from '@/lib/animations';

const comparisonRows = [
  { with: 'Two-way AI text conversations', without: 'One-way blast texts' },
  { with: '24/7 instant lead response', without: 'Leads wait hours for callback' },
  { with: 'AI qualifies before handoff', without: 'Agents waste time on cold leads' },
  { with: 'Smart appointment scheduling', without: 'Manual back-and-forth booking' },
  { with: 'Automated lead nurturing', without: 'Leads fall through the cracks' },
  { with: 'Live call transfers to agents', without: 'Voicemail tag for days' },
  { with: 'CRM auto-sync on every touch', without: 'Manual data entry after calls' },
  { with: 'Consistent follow-up on every lead', without: 'Cherry-picking only hot leads' },
];

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M5 10l3.5 3.5L15 7"
        stroke="#10B981"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className="shrink-0"
      aria-hidden="true"
    >
      <path
        d="M6 6l8 8M14 6l-8 8"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Comparison() {
  return (
    <SectionWrapper id="comparison" ariaLabel="Comparison">
      {/* Heading */}
      <div className="mb-12 text-center md:mb-16">
        <motion.h2
          className="font-heading text-[32px] font-bold leading-tight tracking-[-0.02em] text-text-primary md:text-[40px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          Ditch the Status Quo
        </motion.h2>
        <motion.p
          className="mx-auto mt-4 max-w-2xl text-base text-text-secondary md:text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
        >
          See why top-producing agents are switching to AI-powered lead conversion
        </motion.p>
      </div>

      {/* Comparison columns */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {/* With BuyerRelay column */}
        <motion.div
          {...slideInLeft}
          className="rounded-2xl border-l-4 border-l-[#10B981] bg-white p-6 md:p-8"
          style={{
            boxShadow:
              '0 1px 3px rgba(0, 102, 255, 0.04), 0 4px 16px rgba(0, 102, 255, 0.07)',
          }}
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-[#10B981]">
            With BuyerRelay
          </h3>
          <motion.ul {...staggerContainer} className="space-y-0">
            {comparisonRows.map((row, i) => (
              <motion.li
                key={i}
                {...staggerItem}
                className={`flex items-center gap-3 py-3 ${
                  i < comparisonRows.length - 1
                    ? 'border-b border-[#F1F5F9]'
                    : ''
                }`}
              >
                <CheckIcon />
                <span className="text-base text-text-primary">{row.with}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Without BuyerRelay column */}
        <motion.div
          {...slideInRight}
          className="rounded-2xl border-l-4 border-l-[#E2E8F0] bg-white p-6 md:p-8"
          style={{
            boxShadow:
              '0 1px 3px rgba(0, 102, 255, 0.04), 0 4px 16px rgba(0, 102, 255, 0.07)',
          }}
        >
          <h3 className="mb-6 font-heading text-lg font-semibold text-[#94A3B8]">
            Without BuyerRelay
          </h3>
          <motion.ul {...staggerContainer} className="space-y-0">
            {comparisonRows.map((row, i) => (
              <motion.li
                key={i}
                {...staggerItem}
                className={`flex items-center gap-3 py-3 ${
                  i < comparisonRows.length - 1
                    ? 'border-b border-[#F1F5F9]'
                    : ''
                }`}
              >
                <XIcon />
                <span className="text-base text-[#94A3B8]">
                  {row.without}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
