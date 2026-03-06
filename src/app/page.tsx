import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { SocialProof } from '@/components/sections/SocialProof';
import { ProductOverview } from '@/components/sections/ProductOverview';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { CRMIntegrations } from '@/components/sections/CRMIntegrations';
import { Testimonials } from '@/components/sections/Testimonials';
import { Comparison } from '@/components/sections/Comparison';
import { Pricing } from '@/components/sections/Pricing';
import { FinalCTA } from '@/components/sections/FinalCTA';
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
        <Testimonials />
        <Comparison />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
