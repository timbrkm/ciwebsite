import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 60, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 1, ease: "power3.out" }
    );

    // Content paragraph animation
    gsap.fromTo(contentRef.current?.querySelector('.intro-text'),
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Images stagger animation
    const images = imagesRef.current?.querySelectorAll('img');
    if (images) {
      gsap.fromTo(images,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: imagesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Support section animation
    gsap.fromTo(contentRef.current?.querySelector('.support-title'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current?.querySelector('.support-title'),
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      }
    );

    gsap.fromTo(contentRef.current?.querySelectorAll('.support-text'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: contentRef.current?.querySelector('.support-title'),
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // FAQ section animation
    gsap.fromTo(faqRef.current?.querySelector('h2'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: faqRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // FAQ items stagger
    const faqItems = faqRef.current?.querySelectorAll('.faq-item');
    if (faqItems) {
      gsap.fromTo(faqItems,
        { opacity: 0, x: -40, skewX: -2 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: faqRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-skate-black min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h1
          ref={headerRef}
          className="text-6xl md:text-8xl font-headline uppercase mb-8 leading-none opacity-0"
        >
          We are <br/> <span className="text-skate-accent">CHECK IN.</span>
        </h1>

        <div ref={contentRef} className="prose prose-invert prose-lg max-w-none font-body">
          <p className="intro-text text-2xl text-white leading-relaxed mb-8 opacity-0">
            CHECK IN (ehem. Concrete Infinity) wurde 1994 mit einer einfachen Mission gegründet: Hagen eine Heimat für Skateboarding zu geben. Keine Mall-Kette, kein Sellout. 100% Core Skateboarding.
          </p>
          <div ref={imagesRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
            <img src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=400&fit=crop" alt="Shop Interior" className="w-full h-64 object-cover border-2 border-white/20 hover:border-skate-accent transition-colors opacity-0" />
            <img src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=400&fit=crop" alt="Shop Counter" className="w-full h-64 object-cover border-2 border-white/20 hover:border-skate-accent transition-colors opacity-0" />
          </div>
          <h3 className="support-title text-3xl font-headline uppercase text-skate-red mb-4 opacity-0">Support Your Local Dealer</h3>
          <p className="support-text text-gray-400 opacity-0">
            Wir glauben an die lokale Community. Bei uns bekommst du nicht nur Hardware, sondern auch ehrliche Beratung von Leuten, die jeden Tag auf dem Board stehen. Wir organisieren Contests, unterstützen den Bau von DIY-Spots und fördern junge Talente aus der Region.
          </p>
          <p className="support-text text-gray-400 mt-4 opacity-0">
            Komm vorbei auf einen Kaffee oder eine Session am Curb vor dem Laden.
          </p>
        </div>

        {/* FAQ Section */}
        <div ref={faqRef} className="mt-20 border-t border-white/20 pt-12">
          <h2 className="text-4xl font-headline uppercase mb-8 opacity-0">F.A.Q.</h2>
          <div className="space-y-6">
            <div className="faq-item border border-white/10 p-6 bg-neutral-900 opacity-0">
              <h4 className="text-xl font-headline uppercase text-skate-accent mb-2">Montiert ihr Griptape?</h4>
              <p className="text-gray-400">Klar. Wenn du ein Deck bei uns kaufst, ist das Griptape und die Montage inklusive.</p>
            </div>
            <div className="faq-item border border-white/10 p-6 bg-neutral-900 opacity-0">
              <h4 className="text-xl font-headline uppercase text-skate-accent mb-2">Habt ihr Gutscheine?</h4>
              <p className="text-gray-400">Yes, wir haben Geschenkgutscheine in beliebiger Höhe. Nur im Laden erhältlich.</p>
            </div>
            <div className="faq-item border border-white/10 p-6 bg-neutral-900 opacity-0">
              <h4 className="text-xl font-headline uppercase text-skate-accent mb-2">Versendet ihr auch?</h4>
              <p className="text-gray-400">Wir fokussieren uns auf den lokalen Verkauf. Ruf an, wenn du etwas Spezielles suchst.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
