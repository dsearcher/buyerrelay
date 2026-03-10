'use client';

import Image from 'next/image';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      aria-label="Hero"
      className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Radial gradient - blue */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 20%, rgba(0,102,255,0.08) 0%, transparent 60%)',
          }}
        />
        {/* Radial gradient - purple */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 80%, rgba(124,58,237,0.06) 0%, transparent 50%)',
          }}
        />
        {/* Dot grid texture */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,102,255,0.04) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-8 items-center">
          {/* Left column - Headline + Phone CTA */}
          <ScrollReveal direction="up" className="order-1">
            {/* Eyebrow badge */}
            <span className="inline-block mb-6 bg-[rgba(0,102,255,0.1)] text-[var(--color-primary)] text-sm font-medium px-4 py-1.5 rounded-[var(--radius-pill)]">
              Built for Real Estate Agents
            </span>

            {/* H1 */}
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[var(--color-text-primary)]">
              Three New Leads Just Came In.{' '}
              <span className="gradient-text">Two Are Already Booked.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed mt-6 max-w-[540px]">
              You&apos;re between showings. Your phone buzzes — not with voicemails to return, but with confirmed appointments BuyerRelay booked while you were closing.
            </p>

            {/* Phone input - Primary CTA */}
            <div className="mt-8 max-w-[440px]">
              <label
                htmlFor="hero-phone"
                className="block text-[var(--color-text-primary)] text-sm font-medium mb-2.5"
              >
                See it work on your phone
              </label>
              <div className="flex">
                <input
                  id="hero-phone"
                  type="tel"
                  placeholder="(555) 123-4567"
                  aria-label="Enter your phone number"
                  className="border-2 border-[var(--color-border)] rounded-l-[var(--radius-pill)] px-6 py-4 text-base w-full focus:outline-none focus:ring-2 focus:ring-[rgba(0,102,255,0.3)] focus:border-[var(--color-primary)] bg-white"
                />
                <button
                  onClick={() => scrollTo('cta')}
                  className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white px-7 py-4 rounded-r-[var(--radius-pill)] font-semibold text-base hover:shadow-[var(--shadow-brand-lg)] hover:scale-[1.02] transition-transform duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:scale-[0.98]"
                >
                  Try It Now
                </button>
              </div>
              {/* Secondary CTA link */}
              <button
                onClick={() => scrollTo('pricing')}
                className="mt-3 text-[var(--color-primary)] text-sm font-medium hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] cursor-pointer"
              >
                or Book a Demo →
              </button>
            </div>

            {/* Trust lines */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-8">
              <p className="text-[var(--color-text-muted)] text-sm flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-success)] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Replacing ISAs for 500+ agents nationwide
              </p>
              <p className="text-[var(--color-text-muted)] text-sm flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-[var(--color-success)] shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Average agent sees first appointment in 48 hours
              </p>
            </div>
          </ScrollReveal>

          {/* Right column - Lifestyle photo */}
          <ScrollReveal direction="right" delay={0.2} className="order-2">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow:
                  '0 8px 32px rgba(0, 102, 255, 0.07), 0 2px 8px rgba(0, 102, 255, 0.04)',
              }}
            >
              <Image
                src="/photos/agent-lifestyle.png"
                alt="Real estate agent receiving confirmed appointments on their phone between showings"
                width={640}
                height={480}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Bottom gradient overlay */}
              <div
                className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(15, 23, 42, 0.4) 0%, transparent 100%)',
                }}
                aria-hidden="true"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
