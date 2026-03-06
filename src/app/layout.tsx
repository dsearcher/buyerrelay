import type { Metadata, Viewport } from 'next';
import { outfit, inter } from '@/lib/fonts';
import { HeroUIProvider } from '@/providers/HeroUIProvider';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://buyerrelay.com'),
  title: 'BuyerRelay - AI-Powered Lead Conversion for Real Estate',
  description:
    'BuyerRelay is an AI-powered lead conversion platform for real estate agents. Instantly respond to leads, qualify via AI text and call, nurture automatically, and book 20-50% more appointments.',
  keywords: [
    'AI real estate lead generation',
    'real estate lead conversion',
    'AI ISA',
    'real estate AI calling',
    'lead qualification automation',
    'buyer lead nurturing',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'BuyerRelay',
    title: 'BuyerRelay - AI-Powered Lead Conversion for Real Estate',
    description:
      'BuyerRelay is an AI-powered lead conversion platform for real estate agents. Instantly respond to leads, qualify via AI text and call, nurture automatically, and book 20-50% more appointments.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BuyerRelay - AI-Powered Lead Conversion for Real Estate',
    description:
      'BuyerRelay is an AI-powered lead conversion platform for real estate agents. Instantly respond to leads, qualify via AI text and call, nurture automatically, and book 20-50% more appointments.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0066FF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body className="bg-bg-primary font-body text-text-primary antialiased">
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
