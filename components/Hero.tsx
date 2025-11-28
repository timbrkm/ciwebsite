import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0"
      >
        <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
                // Updated to a high-contrast street skate action shot
                backgroundImage: "url('https://images.unsplash.com/photo-1596726848148-d306b38c234a?w=2000&h=1333&fit=crop')",
                // Reduced grayscale slightly so the image pops more, but kept dark for text contrast
                filter: "grayscale(80%) contrast(120%) brightness(60%)"
            }}
        />
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        style={{ y: textY }}
        className="relative z-10 text-center px-4"
      >
        <motion.div
            initial={{ opacity: 0, y: 50, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block bg-skate-red px-6 py-2 mb-4 shadow-[5px_5px_0px_0px_rgba(255,255,255,1)]"
        >
             <span className="font-marker text-2xl md:text-4xl text-white">EST. 1994 • LOCAL OWNED</span>
        </motion.div>
        
        <h1 className="font-headline text-7xl md:text-9xl text-white uppercase tracking-tighter leading-none mix-blend-difference">
          CHECK<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">IN</span>
        </h1>
        
        <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5, duration: 1 }}
             className="mt-6 text-xl md:text-2xl font-body text-gray-300 max-w-2xl mx-auto uppercase tracking-widest border-t border-b border-white/20 py-4"
        >
          Hagen City Skateboarding • Premium Goods • Community
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 z-10 text-white"
      >
        <ArrowDown size={32} />
      </motion.div>
    </div>
  );
};

export default Hero;