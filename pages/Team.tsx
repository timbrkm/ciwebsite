import React from 'react';
import TeamSection from '../components/TeamSection';
import { motion } from 'framer-motion';

const Team: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-skate-black">
        <TeamSection />
        
        {/* Call to Action */}
        <div className="max-w-4xl mx-auto px-4 py-20 text-center border-t border-white/10">
             <h3 className="text-4xl font-headline uppercase mb-6 text-white italic">Wanna join the flow team?</h3>
             <p className="font-body text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                Wir supporten den Nachwuchs in Hagen. Schick uns dein Footage. 
                Keine Musik-Edits länger als 2 Minuten. Raw files preferred.
             </p>
             <a href="mailto:team@concrete-infinity.de" className="inline-block border-2 border-white px-8 py-3 font-headline text-xl text-white uppercase hover:bg-white hover:text-black transition-all">
                Send Sponsor Tape
             </a>
        </div>
    </div>
  );
};

export default Team;