import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { motion } from 'framer-motion';

const Shop: React.FC = () => {
  return (
    <div className="pt-24 pb-20 bg-skate-black min-h-screen">
       <div className="max-w-7xl mx-auto px-4 mb-12 text-center">
            <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-7xl md:text-9xl font-headline text-white uppercase italic tracking-tighter"
            >
                The <span className="text-skate-accent">Stash</span>
            </motion.h1>
            <p className="font-marker text-gray-400 text-xl mt-4 rotate-1 inline-block border-b-2 border-skate-red">
                Alles was du brauchst um zu shredden.
            </p>
       </div>
       <ProductGrid showTitle={false} />
    </div>
  );
};

export default Shop;