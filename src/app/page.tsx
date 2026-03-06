import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProductOverview />
        <section id="features" className="min-h-[200px]" />
        <section id="pricing" className="min-h-[200px]" />
        <section id="cta" className="min-h-[200px]" />
      </main>
      <Footer />
    </>
  );
}
