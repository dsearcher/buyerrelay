import Image from 'next/image';
import { SectionWrapper } from '@/components/ui/SectionWrapper';

const productLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Integrations', href: '#integrations' },
];

const resourceLinks = [
  { label: 'Blog', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'Help Center', href: '#' },
  { label: 'API Docs', href: '#' },
];

const companyLinks = [
  { label: 'About', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Contact', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-heading text-sm uppercase tracking-wider text-text-muted mb-4">
      {children}
    </h3>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="text-sm text-gray-400 hover:text-white transition-colors duration-200 focus-visible:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
      >
        {label}
      </a>
    </li>
  );
}

function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-text-muted hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <SectionWrapper dark id="footer">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logo.png"
            alt="BuyerRelay"
            width={140}
            height={36}
            className="h-9 w-auto brightness-0 invert mb-4"
          />
          <p className="text-sm text-gray-400 mb-6 max-w-xs">
            AI-powered lead conversion for real estate agents. Turn every lead into a booked appointment.
          </p>
          <div className="flex items-center gap-4">
            <SocialIcon href="#" label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="X (Twitter)">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </SocialIcon>
            <SocialIcon href="#" label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* Column 2: Product */}
        <div>
          <FooterHeading>Product</FooterHeading>
          <ul className="space-y-3">
            {productLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <FooterHeading>Resources</FooterHeading>
          <ul className="space-y-3">
            {resourceLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <FooterHeading>Company</FooterHeading>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <FooterLink key={link.label} {...link} />
            ))}
          </ul>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 pt-8 mt-8">
        <p className="text-sm text-text-muted text-center">
          &copy; {new Date().getFullYear()} BuyerRelay. All rights reserved.
        </p>
      </div>
    </SectionWrapper>
  );
}
