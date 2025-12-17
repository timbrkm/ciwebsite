import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ProductGrid from '../components/ProductGrid';
import BrandSlider from '../components/BrandSlider';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const connectRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Connect Section animations
    const connectTl = gsap.timeline({
      scrollTrigger: {
        trigger: connectRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    connectTl.fromTo(connectRef.current?.querySelector('.connect-title'),
      { opacity: 0, x: -80, skewX: -3 },
      { opacity: 1, x: 0, skewX: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo(connectRef.current?.querySelector('.connect-text'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(connectRef.current?.querySelectorAll('.connect-btn'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "power2.out" },
      "-=0.3"
    );

    // Image section with parallax
    const imageContainer = connectRef.current?.querySelector('.connect-image');
    if (imageContainer) {
      gsap.fromTo(imageContainer,
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Sticker animation
      gsap.fromTo(connectRef.current?.querySelector('.sticker'),
        { opacity: 0, scale: 0, rotation: -30 },
        {
          opacity: 1,
          scale: 1,
          rotation: 12,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          scrollTrigger: {
            trigger: imageContainer,
            start: "top 60%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // CTA Section animations
    const ctaTl = gsap.timeline({
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 70%",
        toggleActions: "play none none reverse"
      }
    });

    ctaTl.fromTo(ctaRef.current?.querySelector('.cta-title'),
      { opacity: 0, y: 60, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(ctaRef.current?.querySelector('.cta-text'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(ctaRef.current?.querySelector('.cta-button'),
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

  });

  return (
    <div className="bg-skate-black">
      <Hero />
      <BrandSlider />
      <Marquee text="HAGEN CITY SKATEBOARDING • EST. 1994 • CHECK IN NOW •" />

      <section className="py-20 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
        <ProductGrid limit={4} />
      </section>

      {/* Local Scene Teaser */}
      <section ref={connectRef} className="py-24 bg-white text-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="connect-title text-6xl md:text-8xl font-headline leading-[0.85] mb-6 opacity-0">
              THE HAGEN<br/><span className="text-skate-red">CONNECT</span>
            </h2>
            <p className="connect-text font-body text-xl text-gray-700 mb-8 max-w-md opacity-0">
              Wir sind mehr als ein Shop. Wir sind der Treffpunkt für die Szene in Hagen und Umgebung.
              Check unsere Events oder komm im CHECK IN vorbei.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/events" className="connect-btn inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 font-headline text-xl uppercase hover:bg-skate-accent hover:text-black transition-colors opacity-0">
                <Calendar size={20} /> Upcoming Events
              </Link>
              <Link to="/about" className="connect-btn inline-flex items-center justify-center gap-2 border-2 border-black text-black px-6 py-3 font-headline text-xl uppercase hover:bg-black hover:text-white transition-colors opacity-0">
                <MapPin size={20} /> Visit Shop
              </Link>
            </div>
          </div>
          <div className="connect-image relative h-[400px] md:h-[500px] group opacity-0">
            <div className="absolute inset-0 bg-black transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <img
              src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=800&h=600&fit=crop"
              alt="Hagen Skatepark"
              className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Sticker style overlay */}
            <div className="sticker absolute -top-6 -right-6 bg-skate-accent w-24 h-24 rounded-full flex items-center justify-center font-marker text-sm shadow-lg z-10 opacity-0">
              OPEN <br/> DAILY
            </div>
          </div>
        </div>
      </section>

      <div className="bg-skate-black py-12">
        <Marquee text="RIDE THE CONCRETE • OWN THE STREETS • NO POSERS •" direction="right" className="bg-skate-accent text-black" />
      </div>

      {/* CTA Section for AI Coach */}
      <section ref={ctaRef} className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-skate-black/90 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=1920&h=1080&fit=crop')",
            backgroundPosition: "center 30%"
          }}
        ></div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <h2 className="cta-title text-6xl md:text-8xl font-headline text-white uppercase italic mb-6 text-shadow-lg opacity-0">
            STUCK ON A <br/> <span className="text-skate-accent">KICKFLIP?</span>
          </h2>
          <p className="cta-text text-xl md:text-2xl font-body text-gray-300 mb-8 max-w-2xl mx-auto opacity-0">
            Unser C.I. AI Coach analysiert dein Problem und gibt dir Tipps. 24/7 verfügbar.
          </p>
          <Link to="/coach" className="cta-button inline-flex items-center gap-2 bg-skate-red text-white px-8 py-4 font-headline text-2xl uppercase transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_white] transition-all opacity-0">
            ASK THE COACH <ArrowRight />
          </Link>
        </div>

        <style>{`
            .text-shadow-lg {
                text-shadow: 4px 4px 0px rgba(0,0,0,0.5);
            }
        `}</style>
      </section>
    </div>
  );
};

export default Home;
