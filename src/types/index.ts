export interface SectionProps {
  id?: string;
  className?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
}

export interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  photo: string;
  metric: string;
  metricLabel: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}
