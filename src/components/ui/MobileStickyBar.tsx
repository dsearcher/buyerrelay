'use client';

import { useState, useEffect } from 'react';

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~500px (roughly past the hero)
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {/* Glass backdrop */}
      <div className="border-t border-white/10 bg-[#0F172A]/95 backdrop-blur-lg px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-white text-sm font-semibold truncate">See BuyerRelay work</p>
            <p className="text-slate-400 text-xs truncate">Enter your number for a live demo</p>
          </div>
          <button
            onClick={scrollToCTA}
            className="shrink-0 bg-gradient-to-r from-[#0066FF] to-[#7C3AED] text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 active:scale-[0.97] transition-[opacity,transform]"
          >
            Try It →
          </button>
        </div>
      </div>
    </div>
  );
}
