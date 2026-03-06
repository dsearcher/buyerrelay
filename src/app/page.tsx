import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { CRMIntegrations } from '@/components/sections/CRMIntegrations';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ProductOverview />
        <FeaturesGrid />
        <CRMIntegrations />
        {/* Phase 4: Conversion sections */}
        <section id="pricing" className="min-h-[200px]" />
        <section id="cta" className="min-h-[200px]" />
      </main>
      <Footer />
    </>
  );
}
