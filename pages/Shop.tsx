import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ProductGrid from '../components/ProductGrid';

const Shop: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(headerRef.current?.querySelector('h1'),
      { opacity: 0, y: 60, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power3.out" }
    )
    .fromTo(headerRef.current?.querySelector('p'),
      { opacity: 0, y: 20, rotation: -5 },
      { opacity: 1, y: 0, rotation: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    );

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-skate-black min-h-screen">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 mb-12 text-center">
        <h1
          className="text-7xl md:text-9xl font-headline text-white uppercase italic tracking-tighter opacity-0"
        >
          The <span className="text-skate-accent">Stash</span>
        </h1>
        <p className="font-marker text-gray-400 text-xl mt-4 rotate-1 inline-block border-b-2 border-skate-red opacity-0">
          Alles was du brauchst um zu shredden.
        </p>
      </div>
      <ProductGrid showTitle={false} />
    </div>
  );
};

export default Shop;
