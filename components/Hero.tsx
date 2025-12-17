import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Initial animations on load
    tl.fromTo(badgeRef.current,
      { opacity: 0, y: 60, rotation: -8 },
      { opacity: 1, y: 0, rotation: -2, duration: 0.8, ease: "back.out(1.7)" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: 80, skewY: 4 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power4.out" },
      "-=0.4"
    )
    .fromTo(subtitleRef.current,
      { opacity: 0, y: 30, scaleX: 0.8 },
      { opacity: 1, y: 0, scaleX: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(arrowRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
      "-=0.3"
    );

    // Parallax scroll effect for background
    gsap.to(backgroundRef.current, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Text parallax (moves faster)
    gsap.to(textRef.current, {
      yPercent: 50,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Bouncing arrow animation
    gsap.to(arrowRef.current, {
      y: 15,
      duration: 1.2,
      ease: "power1.inOut",
      repeat: -1,
      yoyo: true
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/Innenansicht11.webp')",
            filter: "grayscale(30%) contrast(110%) brightness(50%)"
          }}
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Hero Content */}
      <div
        ref={textRef}
        className="relative z-10 text-center px-4"
      >
        <div
          ref={badgeRef}
          className="inline-block bg-skate-red px-6 py-2 mb-4 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)] opacity-0"
          style={{ transform: 'rotate(-2deg)' }}
        >
          <span className="font-marker text-2xl md:text-4xl text-white">EST. 1994 • LOCAL OWNED</span>
        </div>

        <h1
          ref={titleRef}
          className="font-headline text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none mix-blend-difference opacity-0"
        >
          CHECK<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">IN</span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-6 text-xl md:text-2xl font-body text-gray-300 max-w-2xl mx-auto uppercase tracking-widest border-t border-b border-white/20 py-4 opacity-0"
        >
          Hagen City Skateboarding • Premium Goods • Community
        </p>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={arrowRef}
        className="absolute bottom-10 z-10 text-white opacity-0"
      >
        <ArrowDown size={32} />
      </div>
    </div>
  );
};

export default Hero;
