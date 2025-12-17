import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    id: 1,
    title: "GO SKATEBOARDING DAY 2025",
    date: "21. JUNI",
    time: "14:00",
    location: "Bodelschwinghplatz, Hagen",
    description: "Der größte Tag des Jahres. Best Trick Contest, Free BBQ und Goodies for days. Kommt vorbei!",
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&h=600&fit=crop",
    tag: "CONTEST"
  },
  {
    id: 2,
    title: "VIDEO PREMIERE: 'CONCRETE JUNGLE'",
    date: "15. AUGUST",
    time: "20:00",
    location: "Kulturzentrum Pelmke",
    description: "Unser neues Shop Video ist fertig. 2 Jahre Filming in Hagen und Umgebung. Eintritt frei.",
    image: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=800&h=600&fit=crop",
    tag: "PREMIERE"
  },
  {
    id: 3,
    title: "SKATE SCHOOL: BEGINNER WORKSHOP",
    date: "JEDEN SAMSTAG",
    time: "10:00 - 12:00",
    location: "Skatepark Hagen",
    description: "Für Kids und Anfänger. Lerne die Basics mit unseren Teamfahrern. Anmeldung im Shop erforderlich.",
    image: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=800&h=600&fit=crop",
    tag: "WORKSHOP"
  }
];

const Events: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    const headerTl = gsap.timeline();

    headerTl.fromTo(headerRef.current?.querySelector('.tag'),
      { opacity: 0, y: -30, rotation: -8 },
      { opacity: 1, y: 0, rotation: -2, duration: 0.6, ease: "back.out(1.7)" }
    )
    .fromTo(headerRef.current?.querySelector('h1'),
      { opacity: 0, y: 50, skewY: 3 },
      { opacity: 1, y: 0, skewY: 0, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    );

    // Event cards stagger animation
    const eventCards = eventsRef.current?.querySelectorAll('.event-card');
    if (eventCards) {
      eventCards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -80 : 80;

        gsap.fromTo(card,
          { opacity: 0, x: direction, rotationY: direction > 0 ? 5 : -5 },
          {
            opacity: 1,
            x: 0,
            rotationY: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Animate the date badge
        const dateBadge = card.querySelector('.date-badge');
        if (dateBadge) {
          gsap.fromTo(dateBadge,
            { opacity: 0, scale: 0, rotation: -15 },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: card,
                start: "top 70%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }

        // Animate the tag
        const tag = card.querySelector('.event-tag');
        if (tag) {
          gsap.fromTo(tag,
            { opacity: 0, x: -30 },
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white min-h-screen">
      <div ref={headerRef} className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center">
          <span className="tag bg-skate-accent text-black px-4 py-1 font-headline text-lg mb-4 inline-block transform -rotate-2 opacity-0">
            WHAT'S HAPPENING
          </span>
          <h1 className="text-6xl md:text-9xl font-headline text-black uppercase tracking-tighter opacity-0">
            EVENTS
          </h1>
        </div>
      </div>

      <div ref={eventsRef} className="max-w-5xl mx-auto px-4 space-y-12">
        {events.map((event) => (
          <div
            key={event.id}
            className="event-card flex flex-col md:flex-row bg-skate-black text-white group overflow-hidden border-2 border-black hover:shadow-[10px_10px_0px_0px_#ffeb3b] transition-all opacity-0"
          >
            <div className="md:w-1/2 relative overflow-hidden h-64 md:h-auto">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="event-tag absolute top-4 left-4 bg-skate-red text-white px-3 py-1 font-headline text-sm tracking-widest uppercase opacity-0">
                {event.tag}
              </div>
            </div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
              {/* Date Badge */}
              <div className="date-badge absolute top-0 right-0 bg-skate-accent text-black p-4 text-center leading-none opacity-0">
                <span className="block font-headline text-2xl">{event.date.split('.')[0]}</span>
                <span className="block font-body text-xs font-bold uppercase">{event.date.split(' ')[1]}</span>
              </div>

              <h3 className="text-3xl font-headline uppercase leading-tight mb-4 pr-16 text-white group-hover:text-skate-accent transition-colors">
                {event.title}
              </h3>

              <div className="space-y-2 mb-6 text-gray-400 font-body">
                <div className="flex items-center">
                  <Clock size={16} className="mr-2" /> {event.time}
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2" /> {event.location}
                </div>
              </div>

              <p className="text-gray-300 mb-6 font-body leading-relaxed">
                {event.description}
              </p>

              <button className="self-start border border-white px-6 py-2 uppercase font-headline text-sm hover:bg-white hover:text-black transition-colors">
                Mehr Infos
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
