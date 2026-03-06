'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

interface Testimonial {
  quote: string;
  metric: string;
  authorName: string;
  authorTitle: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "BuyerRelay's AI texting reactivated leads we'd written off months ago. Within the first 60 days, our pipeline exploded with opportunities we thought were dead.",
    metric: '$2.4M in pipeline reactivated',
    authorName: 'Sarah Mitchell',
    authorTitle: 'Team Lead, Keller Williams Orlando',
    initials: 'SM',
  },
  {
    quote:
      "We used to spend 3 hours a day chasing callbacks. Now BuyerRelay handles qualification and books appointments directly on our calendars. Our agents focus on closing.",
    metric: '34% more appointments booked',
    authorName: 'James Rodriguez',
    authorTitle: 'Broker, RE/MAX Coastal',
    initials: 'JR',
  },
  {
    quote:
      "The live transfer feature is a game-changer. Buyers connect with us at peak motivation, and our average close time dropped dramatically compared to industry benchmarks.",
    metric: '22-day avg close vs 45-day industry avg',
    authorName: 'Michelle Chen',
    authorTitle: 'Managing Partner, Compass NYC',
    initials: 'MC',
  },
];

function QuoteIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.193 11 15c0 1.858-1.567 3.5-3.5 3.5-1.251 0-2.42-.58-2.917-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C19.591 11.69 21 13.193 21 15c0 1.858-1.567 3.5-3.5 3.5-1.251 0-2.42-.58-2.917-1.179z"
        fill="#0066FF"
      />
    </svg>
  );
}

function ChevronLeft() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TestimonialCard({
  testimonial,
  isActive,
  isDesktop,
}: {
  testimonial: Testimonial;
  isActive: boolean;
  isDesktop?: boolean;
}) {
  return (
    <div
      className={`transition-transform transition-opacity duration-300 ease-out ${
        isDesktop
          ? isActive
            ? 'scale-[1.02] opacity-100'
            : 'scale-95 opacity-60'
          : ''
      }`}
    >
      {/* Gradient border wrapper */}
      <div
        className="rounded-2xl p-[1px]"
        style={{
          background: 'linear-gradient(135deg, #0066FF, #7C3AED)',
        }}
      >
        {/* Inner card */}
        <div className="rounded-2xl p-8" style={{ background: '#0F172A' }}>
          <QuoteIcon />

          <p
            className="mt-4 text-lg font-semibold leading-relaxed"
            style={{ color: '#F8FAFC', fontFamily: 'var(--font-outfit)' }}
          >
            &ldquo;{testimonial.quote}&rdquo;
          </p>

          {/* Metric badge */}
          <div className="mt-4">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-sm font-bold"
              style={{
                color: '#7C3AED',
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.2)',
              }}
            >
              {testimonial.metric}
            </span>
          </div>

          {/* Author */}
          <div className="mt-6 flex items-center gap-3">
            <div
              className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-semibold"
              style={{ background: '#334155', color: '#94A3B8' }}
            >
              {testimonial.initials}
            </div>
            <div>
              <p className="font-medium" style={{ color: '#F8FAFC' }}>
                {testimonial.authorName}
              </p>
              <p className="text-sm" style={{ color: '#94A3B8' }}>
                {testimonial.authorTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length);
  }, []);

  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

  // Auto-rotation every 5 seconds, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <SectionWrapper id="testimonials" dark>
      <ScrollReveal>
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            style={{
              fontFamily: 'var(--font-outfit)',
              letterSpacing: '-0.03em',
            }}
          >
            What Agents Are Saying
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg" style={{ color: '#94A3B8' }}>
            Real results from real estate professionals using BuyerRelay
          </p>
        </div>

        {/* Desktop: all 3 cards visible */}
        <div
          className="hidden lg:grid lg:grid-cols-3 lg:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.authorName}
              className="cursor-pointer"
              onClick={() => setActiveIndex(index)}
            >
              <TestimonialCard
                testimonial={testimonial}
                isActive={index === activeIndex}
                isDesktop
              />
            </div>
          ))}
        </div>

        {/* Mobile: single card carousel */}
        <div
          className="lg:hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <TestimonialCard
                  testimonial={testimonials[activeIndex]}
                  isActive
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile navigation arrows */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={goPrev}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
              style={{ borderColor: '#E2E8F0', color: '#94A3B8' }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-6' : 'w-2.5'
                  }`}
                  style={{
                    background:
                      index === activeIndex ? '#0066FF' : '#475569',
                  }}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goNext}
              className="flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-[#0066FF] hover:text-[#0066FF]"
              style={{ borderColor: '#E2E8F0', color: '#94A3B8' }}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* Desktop dot indicators */}
        <div className="mt-8 hidden items-center justify-center gap-2 lg:flex">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-6' : 'w-2.5'
              }`}
              style={{
                background: index === activeIndex ? '#0066FF' : '#475569',
              }}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </ScrollReveal>
    </SectionWrapper>
  );
}
