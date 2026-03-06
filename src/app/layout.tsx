import type { Metadata } from 'next';
import { outfit, inter } from '@/lib/fonts';
import { HeroUIProvider } from '@/providers/HeroUIProvider';
import './globals.css';

export const metadata: Metadata = {
  title: 'BuyerRelay - AI-Powered Lead Conversion for Real Estate',
  description: 'Instantly respond to leads, qualify via AI text and call, nurture automatically, and deliver ready-to-close buyers to your calendar.',
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
