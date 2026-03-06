import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero section will be added by Plan 02 */}
        {/* Placeholder sections for future phases */}
        <section id="how-it-works" className="min-h-[200px]" />
        <section id="features" className="min-h-[200px]" />
        <section id="pricing" className="min-h-[200px]" />
      </main>
      <Footer />
    </>
  );
}
