import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const allProducts = [
  // Decks
  { id: 1, name: "C.I. OG Logo Deck", price: "59.99€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "C.I. ORIGINALS" },
  { id: 2, name: "Street Demon 8.25", price: "64.99€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "BAKER" },
  // Hoodies/Clothes
  { id: 3, name: "Classic Hoodie Black", price: "79.99€", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", brand: "THRASHER" },
  // Wheels
  { id: 4, name: "Pro Wheels 52mm", price: "45.00€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "SPITFIRE" },
  // Bearings (using a detail shot)
  { id: 5, name: "Ceramic Bearings", price: "35.00€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "BONES" },
  // Trucks
  { id: 6, name: "Indy Trucks 149", price: "74.99€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "INDEPENDENT" },
  // Grip
  { id: 7, name: "Grip Tape", price: "9.99€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "MOB" },
  // Beanie
  { id: 8, name: "Beanie Orange", price: "24.99€", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", brand: "CARHARTT" },
];

interface ProductGridProps {
    limit?: number;
    showTitle?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ limit, showTitle = true }) => {
  const products = limit ? allProducts.slice(0, limit) : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showTitle && (
            <div className="flex justify-between items-end mb-12">
                <h2 className="text-6xl md:text-8xl font-headline text-white uppercase italic transform -skew-x-6">
                    Fresh <br/><span className="text-skate-accent">Goods</span>
                </h2>
                {limit && (
                    <Link to="/shop" className="hidden md:flex items-center gap-2 border-2 border-white px-6 py-2 font-headline text-xl hover:bg-white hover:text-black transition-all uppercase group">
                        View Full Shop <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                )}
            </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group relative cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[3/4] border-2 border-transparent group-hover:border-skate-accent transition-all duration-300">
                <img 
                    src={product.img} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                
                {/* Sticker overlay on hover */}
                <div className="absolute top-4 right-4 bg-skate-red text-white font-marker text-sm px-2 py-1 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity">
                    HOT
                </div>

                {/* Add to cart overlay */}
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="bg-white text-black p-3 rounded-full hover:bg-skate-accent transition-colors">
                        <ShoppingCart size={24} />
                    </button>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-gray-400 font-headline text-sm tracking-widest">{product.brand}</p>
                <h3 className="text-white font-headline text-2xl uppercase italic">{product.name}</h3>
                <p className="text-skate-accent font-bold font-body text-xl">{product.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {limit && (
             <div className="mt-12 text-center md:hidden">
                <Link to="/shop" className="inline-flex items-center gap-2 border-2 border-white px-6 py-2 font-headline text-xl text-white hover:bg-white hover:text-black transition-all uppercase">
                    View All
                </Link>
             </div>
        )}
      </div>
  );
};

export default ProductGrid;