'use client';

import { FormEvent, useState } from 'react';
import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

const teamSizeOptions = [
  { value: '', label: 'Team Size' },
  { value: 'solo', label: 'Just Me' },
  { value: '2-5', label: '2-5 Agents' },
  { value: '6-20', label: '6-20 Agents' },
  { value: '20+', label: '20+ Agents' },
];

const trustBadges = [
  {
    label: '256-bit Encryption',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Trusted by 500+ Agents',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: '14-Day Free Trial',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

const inputClasses =
  'w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 outline-none transition-[border-color,box-shadow] duration-300 focus:border-[#0066FF] focus:ring-2 focus:ring-[#0066FF]/20';

export function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <SectionWrapper
      id="cta"
      dark
      ariaLabel="Book a Demo"
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0F172A, #1E293B)',
      }}
    >
      {/* Subtle radial glow overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(0,102,255,0.1), transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-xl text-center">
        {/* Heading */}
        <ScrollReveal>
          <h2 className="font-outfit text-[clamp(28px,5vw,40px)] font-bold leading-tight tracking-[-0.02em] text-white">
            Ready to Convert More Leads?
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Join 500+ real estate professionals using AI to close more deals
          </p>
        </ScrollReveal>

        {/* Form */}
        <ScrollReveal delay={0.15} direction="fade">
          <form onSubmit={handleSubmit} className="mt-10 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your name"
                required
                className={inputClasses}
              />
              <input
                type="email"
                placeholder="work@email.com"
                aria-label="Work email"
                required
                className={inputClasses}
              />
              <input
                type="tel"
                placeholder="(555) 123-4567"
                aria-label="Phone number"
                className={inputClasses}
              />
              <select
                defaultValue=""
                aria-label="Team size"
                required
                className={`${inputClasses} appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2216%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%2394a3b8%22%20stroke-width%3D%222%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%2F%3E%3C%2Fsvg%3E')] bg-[length:16px] bg-[position:right_12px_center] bg-no-repeat pr-10`}
              >
                {teamSizeOptions.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ''}
                    className="bg-slate-800 text-white"
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ opacity: 0.9, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-lg font-semibold text-white"
              style={{
                background: 'linear-gradient(135deg, #0066FF, #7C3AED)',
              }}
            >
              {submitted ? (
                'Thank You! We\'ll Be in Touch'
              ) : (
                <>
                  Book Your Demo
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </>
              )}
            </motion.button>
          </form>
        </ScrollReveal>

        {/* Trust badges */}
        <ScrollReveal delay={0.3} direction="fade">
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 text-sm text-slate-400"
              >
                {badge.icon}
                <span>{badge.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
