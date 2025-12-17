import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const allProducts = [
  { id: 1, name: "C.I. OG Logo Deck", price: "59.99€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "C.I. ORIGINALS" },
  { id: 2, name: "Street Demon 8.25", price: "64.99€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "BAKER" },
  { id: 3, name: "Classic Hoodie Black", price: "79.99€", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", brand: "THRASHER" },
  { id: 4, name: "Pro Wheels 52mm", price: "45.00€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "SPITFIRE" },
  { id: 5, name: "Ceramic Bearings", price: "35.00€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "BONES" },
  { id: 6, name: "Indy Trucks 149", price: "74.99€", img: "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=800&fit=crop", brand: "INDEPENDENT" },
  { id: 7, name: "Grip Tape", price: "9.99€", img: "https://images.unsplash.com/photo-1564982752979-3f7bc974d29a?w=600&h=800&fit=crop", brand: "MOB" },
  { id: 8, name: "Beanie Orange", price: "24.99€", img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop", brand: "CARHARTT" },
];

interface ProductGridProps {
  limit?: number;
  showTitle?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ limit, showTitle = true }) => {
  const products = limit ? allProducts.slice(0, limit) : allProducts;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Title animation
    if (titleRef.current && showTitle) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, x: -100, skewX: -5 },
        {
          opacity: 1,
          x: 0,
          skewX: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }

    // Products stagger animation
    const productCards = gridRef.current?.querySelectorAll('.product-card');
    if (productCards) {
      gsap.fromTo(productCards,
        { opacity: 0, y: 60, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: {
            amount: 0.8,
            from: "start"
          },
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {showTitle && (
        <div ref={titleRef} className="flex justify-between items-end mb-12 opacity-0">
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

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card group relative cursor-pointer opacity-0"
          >
            <div className="relative overflow-hidden aspect-[3/4] border-2 border-transparent group-hover:border-skate-accent transition-all duration-300">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />

              {/* Sticker overlay on hover */}
              <div className="absolute top-4 right-4 bg-skate-red text-white font-marker text-sm px-2 py-1 rotate-12 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                HOT
              </div>

              {/* Add to cart overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white text-black p-3 rounded-full hover:bg-skate-accent transition-colors transform hover:scale-110">
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-gray-400 font-headline text-sm tracking-widest">{product.brand}</p>
              <h3 className="text-white font-headline text-2xl uppercase italic">{product.name}</h3>
              <p className="text-skate-accent font-bold font-body text-xl">{product.price}</p>
            </div>
          </div>
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
