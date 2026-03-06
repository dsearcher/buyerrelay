'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ChatMockup } from '@/components/sections/ChatMockup';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
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
          {/* Left column - Headline + CTAs */}
          <ScrollReveal direction="up" className="order-1">
            {/* Eyebrow badge */}
            <span className="inline-block mb-6 bg-[rgba(0,102,255,0.1)] text-[var(--color-primary)] text-sm font-medium px-4 py-1.5 rounded-[var(--radius-pill)]">
              AI-Powered Lead Conversion
            </span>

            {/* H1 */}
            <h1 className="font-[var(--font-heading)] text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-[-0.03em] leading-[1.1] text-[var(--color-text-primary)]">
              Turn Cold Leads Into{' '}
              <span className="gradient-text">Closed Deals</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed mt-6 max-w-[540px]">
              BuyerRelay instantly responds to your leads, qualifies them via AI
              text and call, nurtures automatically, and delivers ready-to-close
              buyers straight to your calendar.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button
                onClick={() => scrollTo('pricing')}
                className="bg-[var(--color-primary)] text-white font-medium px-8 py-3.5 rounded-[var(--radius-pill)] shadow-[var(--shadow-brand-md)] hover:shadow-[var(--shadow-brand-lg)] hover:scale-[1.02] transition-transform duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:scale-[0.98]"
              >
                Book a Demo
              </button>
              <button
                onClick={() => scrollTo('how-it-works')}
                className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-medium px-8 py-3.5 rounded-[var(--radius-pill)] hover:bg-[rgba(0,102,255,0.05)] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:scale-[0.98]"
              >
                See It In Action
              </button>
            </div>

            {/* Trust line */}
            <p className="text-[var(--color-text-muted)] text-sm mt-6 flex items-center gap-2">
              <svg
                className="w-4 h-4 text-[var(--color-success)]"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              Trusted by 500+ real estate agents
            </p>
          </ScrollReveal>

          {/* Right column - Chat mockup + phone input */}
          <ScrollReveal direction="right" delay={0.2} className="order-2">
            <ChatMockup />

            {/* Try the AI phone input */}
            <p className="text-[var(--color-text-muted)] text-xs mt-4 mb-2">
              See how it works
            </p>
            <div className="flex max-w-full lg:max-w-[380px]">
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="border border-[var(--color-border)] rounded-l-[var(--radius-pill)] px-5 py-3.5 text-sm w-full max-w-[280px] focus:outline-none focus:ring-2 focus:ring-[rgba(0,102,255,0.3)] focus:border-[var(--color-primary)] bg-white"
              />
              <button
                onClick={() => scrollTo('cta')}
                className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] text-white px-6 py-3.5 rounded-r-[var(--radius-pill)] font-medium hover:shadow-[var(--shadow-brand-md)] transition-transform duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] active:scale-[0.98]"
              >
                Try It
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
