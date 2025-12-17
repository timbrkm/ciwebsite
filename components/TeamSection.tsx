import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TeamSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  const team = [
    { name: "KEVIN", style: "STREET", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", stance: "GOOFY" },
    { name: "LENA", style: "BOWL", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", stance: "REGULAR" },
    { name: "MO", style: "TECH", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", stance: "GOOFY" },
    { name: "DENNIS", style: "ALL TERRAIN", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", stance: "REGULAR" },
  ];

  useGSAP(() => {
    // Intro section animation
    const introTl = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    introTl.fromTo(introRef.current?.querySelector('h2'),
      { opacity: 0, x: -80, skewX: -3 },
      { opacity: 1, x: 0, skewX: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(introRef.current?.querySelector('p'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Team cards stagger animation
    const teamCards = gridRef.current?.querySelectorAll('.team-card');
    if (teamCards) {
      gsap.fromTo(teamCards,
        { opacity: 0, y: 80, rotationY: -15 },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            amount: 0.6,
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Video section animation
    gsap.fromTo(videoRef.current,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Video label pop animation
    const videoLabel = videoRef.current?.querySelector('.video-label');
    if (videoLabel) {
      gsap.fromTo(videoLabel,
        { opacity: 0, scale: 0, rotation: -20 },
        {
          opacity: 1,
          scale: 1,
          rotation: -12,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: videoRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="team" className="py-20 bg-skate-black text-white relative">
      <div className="max-w-7xl mx-auto px-4">

        {/* Intro */}
        <div ref={introRef} className="mb-20 border-l-4 border-skate-accent pl-8">
          <h2 className="text-7xl md:text-9xl font-headline uppercase leading-[0.8] opacity-0">
            C.I.<br/>
            <span className="text-transparent text-stroke-white">SQUAD</span>
          </h2>
          <p className="text-gray-400 font-body text-xl max-w-lg mt-6 opacity-0">
            Unsere Locals. Unsere Familie. Die Jungs und Mädels, die Hagen jeden Tag auseinandernehmen.
          </p>
        </div>

        {/* Riders Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {team.map((rider, index) => (
            <div
              key={index}
              className="team-card group relative h-[600px] overflow-hidden border border-white/10 bg-neutral-900 opacity-0"
            >
              <img
                src={rider.img}
                alt={rider.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale contrast-125"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

              {/* Hover Info */}
              <div className="absolute bottom-0 left-0 w-full p-6">
                <div className="overflow-hidden">
                  <h3 className="text-white font-headline text-5xl uppercase italic transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {rider.name}
                  </h3>
                </div>
                <div className="flex items-center space-x-4 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                  <span className="text-skate-accent font-marker text-lg">{rider.style}</span>
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <span className="text-gray-400 font-body text-sm tracking-widest">{rider.stance}</span>
                </div>
              </div>

              {/* Tape effect */}
              <div className="absolute top-4 left-4 w-8 h-32 border-l-2 border-t-2 border-skate-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Latest Edit Section */}
        <div ref={videoRef} className="relative border-2 border-white/10 bg-neutral-900 p-2 md:p-8 opacity-0">
          <div className="video-label absolute -top-6 left-1/2 -translate-x-1/2 bg-skate-red px-6 py-2 transform -skew-x-12 z-10 shadow-[4px_4px_0px_0px_white] opacity-0">
            <span className="font-headline text-2xl text-white uppercase tracking-widest">Latest Tape</span>
          </div>

          <div className="relative aspect-video w-full overflow-hidden bg-black group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=1920&h=1080&fit=crop"
              alt="Video Thumbnail"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white flex items-center justify-center group-hover:scale-110 transition-transform bg-black/50 backdrop-blur-sm">
                <Play size={40} className="ml-2 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 text-right">
              <h4 className="text-4xl font-headline text-white uppercase">Summer in Hagen</h4>
              <p className="text-gray-400 font-body">Filmed by C.I. Crew</p>
            </div>
          </div>
        </div>

      </div>
      <style>{`
        .text-stroke-white {
            -webkit-text-stroke: 1px white;
            color: transparent;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;
