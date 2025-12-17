import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const brands = [
  "THRASHER", "POLAR", "DIME", "NIKE SB", "VANS",
  "CARHARTT WIP", "SPITFIRE", "INDEPENDENT", "DICKIES",
  "BUTTER GOODS", "LAST RESORT AB", "HOCKEY", "FA"
];

const BrandSlider: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Infinite scroll animation with GSAP
    gsap.to(sliderRef.current, {
      xPercent: -50,
      ease: "none",
      duration: 25,
      repeat: -1
    });

    // Entrance animation
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="py-12 bg-white border-y-4 border-black overflow-hidden relative opacity-0">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <div
        ref={sliderRef}
        className="flex space-x-16 whitespace-nowrap"
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span key={i} className="text-4xl md:text-5xl font-headline text-black opacity-40 hover:opacity-100 transition-opacity cursor-default tracking-tighter">
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandSlider;
