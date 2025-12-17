import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface MarqueeProps {
  text: string;
  direction?: 'left' | 'right';
  className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // GSAP infinite marquee animation
    gsap.fromTo(sliderRef.current,
      { xPercent: direction === 'left' ? 0 : -50 },
      {
        xPercent: direction === 'left' ? -50 : 0,
        ease: "none",
        duration: 20,
        repeat: -1
      }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap py-4 bg-skate-accent ${className}`}>
      <div
        ref={sliderRef}
        className="inline-flex space-x-8"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-headline text-black uppercase tracking-tight font-black italic">
            {text} <span className="text-transparent text-stroke-black mx-4">★</span>
          </span>
        ))}
      </div>
      <style>{`
        .text-stroke-black {
            -webkit-text-stroke: 1px black;
        }
      `}</style>
    </div>
  );
};

export default Marquee;
