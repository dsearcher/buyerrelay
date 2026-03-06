'use client';

import { Button, Card, CardBody } from '@heroui/react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  StaggerChildren,
  StaggerItem,
} from '@/components/animations/StaggerChildren';
import { CountUp } from '@/components/animations/CountUp';

const stats = [
  { value: 50, suffix: '%', label: 'More Appointments Booked' },
  { value: 17, suffix: 's', label: 'Average Response Time' },
  { value: 31, suffix: '%', label: 'Lead-to-Close Improvement' },
];

const features = [
  {
    title: 'AI Text Conversations',
    description: 'Instantly engage every lead with natural, human-like texts.',
  },
  {
    title: 'AI Voice Calls',
    description:
      'Qualify leads with intelligent phone calls that feel personal.',
  },
  {
    title: 'Smart Scheduling',
    description: 'Book appointments directly into your calendar automatically.',
  },
  {
    title: 'Live Transfers',
    description:
      'Hot-transfer qualified buyers to your phone when they are ready.',
  },
];

export function VerificationPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-bg-primary">
      {/* Section 1: Typography + Brand Colors */}
      <SectionWrapper id="typography">
        <ScrollReveal>
          <h1 className="font-heading text-[36px] font-[800] leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-[44px] md:text-[56px]">
            BuyerRelay <span className="gradient-text">Foundation</span>
          </h1>
          <p className="mt-4 max-w-2xl font-body text-[16px] leading-[1.6] text-text-secondary sm:text-[18px]">
            This page verifies all foundation elements: typography, colors,
            shadows, animations, and responsive layout.
          </p>
        </ScrollReveal>

        {/* Viewport size indicator */}
        <div className="mt-6 inline-block rounded-[--radius-pill] bg-primary/10 px-4 py-2 font-body text-sm text-primary">
          <span className="sm:hidden">Viewport: Mobile (&lt;640px)</span>
          <span className="hidden sm:inline md:hidden">
            Viewport: Small Tablet (640-767px)
          </span>
          <span className="hidden md:inline lg:hidden">
            Viewport: Tablet (768-1023px)
          </span>
          <span className="hidden lg:inline xl:hidden">
            Viewport: Desktop (1024-1279px)
          </span>
          <span className="hidden xl:inline">
            Viewport: Wide Desktop (1280px+)
          </span>
        </div>

        {/* Typography scale */}
        <div className="mt-8 space-y-3">
          <h2 className="font-heading text-[28px] font-[700] tracking-[-0.02em] text-text-primary sm:text-[34px] md:text-[40px]">
            H2 Heading (40px desktop)
          </h2>
          <h3 className="font-heading text-[22px] font-[600] tracking-[-0.01em] text-text-primary sm:text-[28px]">
            H3 Heading (28px desktop)
          </h3>
          <p className="font-body text-[16px] leading-[1.6] text-text-secondary">
            Body text at 16px with Inter font and 1.6 line height.
          </p>
          <p className="font-body text-[18px] leading-[1.6] text-text-secondary">
            Subtitle text at 18px with Inter font.
          </p>
        </div>

        {/* Brand color swatches */}
        <div className="mt-8 flex flex-wrap gap-4">
          <div
            className="h-16 w-16 rounded-[--radius-card] bg-primary"
            title="primary"
          />
          <div
            className="h-16 w-16 rounded-[--radius-card] bg-primary-light"
            title="primary-light"
          />
          <div
            className="h-16 w-16 rounded-[--radius-card] bg-accent"
            title="accent"
          />
          <div
            className="h-16 w-16 rounded-[--radius-card] bg-success"
            title="success"
          />
          <div
            className="h-16 w-16 rounded-[--radius-card] bg-bg-dark"
            title="bg-dark"
          />
        </div>

        {/* Shadow verification */}
        <div className="mt-8 flex flex-wrap gap-8">
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-sm]" />
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-md]" />
          <div className="h-24 w-24 rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-lg]" />
        </div>

        {/* Pill buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button color="primary" radius="full" className="bg-primary">
            Book a Demo
          </Button>
          <Button variant="bordered" radius="full">
            See It In Action
          </Button>
          <Button
            radius="full"
            className="bg-success text-white"
          >
            Get Started Free
          </Button>
        </div>
      </SectionWrapper>

      {/* Section 2: ScrollReveal Cards (verifies fade-in-up on scroll) */}
      <SectionWrapper id="scroll-reveal">
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-[700] tracking-[-0.02em] text-text-primary sm:text-[34px] md:text-[40px]">
            ScrollReveal Animation
          </h2>
          <p className="mt-2 font-body text-text-secondary">
            Cards below fade in from different directions as you scroll.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ScrollReveal delay={0}>
            <Card className="rounded-[--radius-card] p-8 shadow-[--shadow-brand-md]">
              <CardBody>
                <h3 className="font-heading text-[22px] font-[600] tracking-[-0.01em]">
                  Fade Up
                </h3>
                <p className="mt-2 text-text-secondary">
                  Default direction. Content slides up and fades in.
                </p>
              </CardBody>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.15} direction="left">
            <Card className="rounded-[--radius-card] p-8 shadow-[--shadow-brand-md]">
              <CardBody>
                <h3 className="font-heading text-[22px] font-[600] tracking-[-0.01em]">
                  Slide Left
                </h3>
                <p className="mt-2 text-text-secondary">
                  Slides in from the left side.
                </p>
              </CardBody>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={0.3} direction="right">
            <Card className="rounded-[--radius-card] p-8 shadow-[--shadow-brand-md]">
              <CardBody>
                <h3 className="font-heading text-[22px] font-[600] tracking-[-0.01em]">
                  Slide Right
                </h3>
                <p className="mt-2 text-text-secondary">
                  Slides in from the right side.
                </p>
              </CardBody>
            </Card>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      {/* Section 3: StaggerChildren (verifies staggered animation) */}
      <SectionWrapper id="stagger" className="bg-bg-elevated">
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-[700] tracking-[-0.02em] text-text-primary sm:text-[34px] md:text-[40px]">
            Staggered Animation
          </h2>
          <p className="mt-2 font-body text-text-secondary">
            Feature cards animate one after another with a 150ms stagger delay.
          </p>
        </ScrollReveal>

        <StaggerChildren className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <Card className="h-full rounded-[--radius-card] p-8 shadow-[--shadow-brand-md]">
                <CardBody>
                  <h3 className="font-heading text-[20px] font-[600] tracking-[-0.01em]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-text-secondary">
                    {feature.description}
                  </p>
                </CardBody>
              </Card>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </SectionWrapper>

      {/* Section 4: CountUp Stats (verifies count-up on scroll) */}
      <SectionWrapper id="count-up" dark>
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-[700] tracking-[-0.02em] sm:text-[34px] md:text-[40px]">
            CountUp Animation
          </h2>
          <p className="mt-2 font-body text-text-muted">
            Numbers animate from 0 to target when this section enters the
            viewport.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <CountUp
                target={stat.value}
                suffix={stat.suffix}
                className="font-heading text-[48px] font-[800] tracking-[-0.03em] text-primary-light sm:text-[56px]"
              />
              <p className="mt-2 font-body text-[16px] text-text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Section 5: SectionWrapper dark variant + responsive grid */}
      <SectionWrapper id="responsive-grid">
        <ScrollReveal>
          <h2 className="font-heading text-[28px] font-[700] tracking-[-0.02em] text-text-primary sm:text-[34px] md:text-[40px]">
            Responsive Grid Test
          </h2>
          <p className="mt-2 font-body text-text-secondary">
            1 column on mobile, 2 columns on tablet, 4 columns on desktop.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="flex h-32 items-center justify-center rounded-[--radius-card] bg-bg-elevated shadow-[--shadow-brand-sm]"
            >
              <span className="font-heading text-[24px] font-[600] text-text-primary">
                {n}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Spacer for scroll testing */}
      <SectionWrapper id="footer-spacer" className="bg-bg-elevated">
        <ScrollReveal direction="fade">
          <p className="text-center font-body text-text-muted">
            End of foundation verification page. All animation and layout
            primitives tested above.
          </p>
        </ScrollReveal>
      </SectionWrapper>
    </main>
  );
}
