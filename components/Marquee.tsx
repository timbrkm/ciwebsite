import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeProps {
    text: string;
    direction?: 'left' | 'right';
    className?: string;
}

const Marquee: React.FC<MarqueeProps> = ({ text, direction = 'left', className = '' }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap py-4 bg-skate-accent ${className}`}>
      <motion.div
        className="inline-flex space-x-8"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-headline text-black uppercase tracking-tight font-black italic">
            {text} <span className="text-transparent text-stroke-black mx-4">★</span>
          </span>
        ))}
      </motion.div>
      <style>{`
        .text-stroke-black {
            -webkit-text-stroke: 1px black;
        }
      `}</style>
    </div>
  );
};

export default Marquee;