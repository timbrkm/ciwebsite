import React from 'react';
import { Instagram, Facebook, MapPin, Clock, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-skate-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 font-headline text-[20rem] text-white opacity-[0.02] leading-none pointer-events-none select-none">
        CI
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand */}
        <div className="md:col-span-1">
            <h2 className="text-7xl font-headline text-white uppercase italic tracking-tighter">C.I.</h2>
            <p className="mt-4 text-gray-400 font-body text-lg">
                CHECK IN.<br/>
                Hagen City Skateboarding.<br/>
                Since 1994.
            </p>
            <div className="flex space-x-4 mt-6">
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-skate-accent hover:text-black hover:border-skate-accent transition-all rounded-full"><Instagram size={20} /></a>
                <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:bg-skate-accent hover:text-black hover:border-skate-accent transition-all rounded-full"><Facebook size={20} /></a>
            </div>
        </div>

        {/* Location */}
        <div className="md:col-span-1">
            <h3 className="text-xl font-headline text-white uppercase mb-6 flex items-center tracking-widest">
                <MapPin className="mr-2 text-skate-red" size={18} /> Location
            </h3>
            <p className="text-gray-400 font-body text-lg mb-4">
                Elberfelder Str. 84<br/>
                58095 Hagen<br/>
                Deutschland
            </p>
            <a href="https://maps.google.com" target="_blank" className="text-skate-accent text-sm uppercase font-bold hover:underline">Get Directions &rarr;</a>
        </div>

         {/* Contact */}
         <div className="md:col-span-1">
            <h3 className="text-xl font-headline text-white uppercase mb-6 flex items-center tracking-widest">
                <Mail className="mr-2 text-skate-red" size={18} /> Contact
            </h3>
            <ul className="space-y-3">
                <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <Phone size={16} className="mr-3" /> 02331 123456
                </li>
                <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                    <Mail size={16} className="mr-3" /> info@checkin-hagen.de
                </li>
            </ul>
        </div>

        {/* Hours */}
        <div className="md:col-span-1">
            <h3 className="text-xl font-headline text-white uppercase mb-6 flex items-center tracking-widest">
                <Clock className="mr-2 text-skate-accent" size={18} /> Hours
            </h3>
            <ul className="text-gray-400 font-body text-lg space-y-2">
                <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon - Fri</span>
                    <span className="text-white">10:00 - 18:30</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sat</span>
                    <span className="text-white">10:00 - 16:00</span>
                </li>
                <li className="flex justify-between pb-2">
                    <span>Sun</span>
                    <span className="text-skate-red font-bold">Closed</span>
                </li>
            </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center text-gray-600 font-body text-sm">
        <p>&copy; {new Date().getFullYear()} Check In Hagen. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Impressum</a>
            <a href="#" className="hover:text-white">Datenschutz</a>
            <a href="#" className="hover:text-white">AGB</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;