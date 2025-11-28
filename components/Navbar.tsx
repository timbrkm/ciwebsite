import React, { useState } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/shop' },
    { name: 'TEAM', path: '/team' },
    { name: 'EVENTS', path: '/events' },
    { name: 'ABOUT', path: '/about' },
    { name: 'AI COACH', path: '/coach' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-skate-black border-b border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center z-50 group">
            <div className="relative">
                <span className="font-headline text-3xl tracking-tighter text-white italic transform -skew-x-12 border-2 border-white px-2 group-hover:bg-white group-hover:text-black transition-colors cursor-pointer block">
                C.I.
                </span>
                <span className="text-[10px] font-mono text-gray-400 absolute -bottom-4 left-0 tracking-widest uppercase">Hagen</span>
            </div>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-headline text-lg xl:text-xl transition-colors tracking-wide relative px-2 ${isActive(link.path) ? 'text-skate-accent' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <motion.div 
                        layoutId="underline"
                        className="absolute bottom-0 left-0 w-full h-1 bg-skate-accent -skew-x-12"
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <button className="text-white hover:text-skate-accent transition-colors relative">
                <ShoppingBag size={24} />
                <span className="absolute -top-2 -right-2 bg-skate-red text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">0</span>
            </button>
          </div>

          <div className="-mr-2 flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed inset-0 bg-skate-black z-40 flex flex-col items-center justify-center"
          >
            <div className="space-y-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-4xl font-headline ${isActive(link.path) ? 'text-skate-accent' : 'text-white'} hover:text-skate-red transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;