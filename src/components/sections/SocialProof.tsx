'use client';

import { SectionWrapper } from '@/components/ui/SectionWrapper';

const statQuotes = [
  'Appointments lifted by 20-50%',
  '$72M in transactions closed',
  '31% higher answer rate',
  'AI responds in under 5 seconds',
  '500+ agents trust BuyerRelay',
  '17% more qualified leads',
];

const integrationLogos = [
  'Follow Up Boss',
  'Sierra',
  'CINC',
  'BoomTown',
  'HubSpot',
  'Salesforce',
  'kvCORE',
  'Chime',
];

function StatMarquee() {
  const doubled = [...statQuotes, ...statQuotes];

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-4">
        {doubled.map((quote, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center rounded-full bg-primary/5 px-5 py-2.5 font-heading text-sm font-semibold tracking-tight text-primary whitespace-nowrap"
          >
            {quote}
          </span>
        ))}
      </div>
    </div>
  );
}

function LogoMarquee() {
  const doubled = [...integrationLogos, ...integrationLogos];

  return (
    <div
      className="overflow-hidden"
      style={{
        maskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    >
      <div className="flex w-max animate-[marquee_40s_linear_infinite] gap-6">
        {doubled.map((name, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center rounded-lg border border-border bg-bg-elevated px-5 py-2.5 font-body text-sm font-semibold text-text-secondary shadow-[var(--shadow-brand-sm)] transition-[filter] duration-300 grayscale hover:grayscale-0 whitespace-nowrap"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SocialProof() {
  return (
    <SectionWrapper noPadding ariaLabel="Social Proof">
      <div className="border-t border-b border-border py-8 md:py-12">
        <div className="space-y-6">
          <StatMarquee />
          <LogoMarquee />
        </div>
      </div>
    </SectionWrapper>
  );
}
