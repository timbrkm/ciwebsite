import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  "THRASHER", "POLAR", "DIME", "NIKE SB", "VANS", 
  "CARHARTT WIP", "SPITFIRE", "INDEPENDENT", "DICKIES", 
  "BUTTER GOODS", "LAST RESORT AB", "HOCKEY", "FA"
];

const BrandSlider: React.FC = () => {
  return (
    <div className="py-12 bg-white border-y-4 border-black overflow-hidden relative">
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>
      <motion.div
        className="flex space-x-16 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <span key={i} className="text-4xl md:text-5xl font-headline text-black opacity-40 hover:opacity-100 transition-opacity cursor-default tracking-tighter">
            {brand}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default BrandSlider;