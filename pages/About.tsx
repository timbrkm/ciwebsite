import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-skate-black min-h-screen text-white">
       <div className="max-w-4xl mx-auto px-4">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl font-headline uppercase mb-8 leading-none"
            >
                We are <br/> <span className="text-skate-accent">CHECK IN.</span>
            </motion.h1>

            <div className="prose prose-invert prose-lg max-w-none font-body">
                <p className="text-2xl text-white leading-relaxed mb-8">
                    CHECK IN (ehem. Concrete Infinity) wurde 1994 mit einer einfachen Mission gegründet: Hagen eine Heimat für Skateboarding zu geben. Keine Mall-Kette, kein Sellout. 100% Core Skateboarding.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                    {/* Skate shop interior vibe */}
                    <img src="https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=400&fit=crop" alt="Shop Interior" className="w-full h-64 object-cover border-2 border-white/20 hover:border-skate-accent transition-colors" />
                    {/* Deck wall vibe */}
                    <img src="https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=400&fit=crop" alt="Shop Counter" className="w-full h-64 object-cover border-2 border-white/20 hover:border-skate-accent transition-colors" />
                </div>
                <h3 className="text-3xl font-headline uppercase text-skate-red mb-4">Support Your Local Dealer</h3>
                <p className="text-gray-400">
                    Wir glauben an die lokale Community. Bei uns bekommst du nicht nur Hardware, sondern auch ehrliche Beratung von Leuten, die jeden Tag auf dem Board stehen. Wir organisieren Contests, unterstützen den Bau von DIY-Spots und fördern junge Talente aus der Region.
                </p>
                <p className="text-gray-400 mt-4">
                    Komm vorbei auf einen Kaffee oder eine Session am Curb vor dem Laden.
                </p>
            </div>

            {/* FAQ Section */}
            <div className="mt-20 border-t border-white/20 pt-12">
                <h2 className="text-4xl font-headline uppercase mb-8">F.A.Q.</h2>
                <div className="space-y-6">
                    <div className="border border-white/10 p-6 bg-neutral-900">
                        <h4 className="text-xl font-headline uppercase text-skate-accent mb-2">Montiert ihr Griptape?</h4>
                        <p className="text-gray-400">Klar. Wenn du ein Deck bei uns kaufst, ist das Griptape und die Montage inklusive.</p>
                    </div>
                    <div className="border border-white/10 p-6 bg-neutral-900">
                        <h4 className="text-xl font-headline uppercase text-skate-accent mb-2">Habt ihr Gutscheine?</h4>
                        <p className="text-gray-400">Yes, wir haben Geschenkgutscheine in beliebiger Höhe. Nur im Laden erhältlich.</p>
                    </div>
                     <div className="border border-white/10 p-6 bg-neutral-900">
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