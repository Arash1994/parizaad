"use client";
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const categories = [
  {
    id: 'wedding',
    name: 'Wedding',
    image: '/images/categories/wedding.png',
    link: '/products?category=Wedding'
  },
  {
    id: 'puja',
    name: 'Puja',
    image: '/images/categories/puja.png',
    link: '/products?category=Puja'
  },
  {
    id: 'festival',
    name: 'Festival',
    image: '/images/categories/festival.png',
    link: '/products?category=Festival'
  },
  {
    id: 'fashion',
    name: 'Fashion',
    image: '/images/categories/fashion.png',
    link: '/products?category=Fashion'
  }
];

export default function CategoryCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
            Shop by Occasion
          </h2>
          
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-colors"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((category) => (
            <Link 
              key={category.id} 
              href={category.link}
              className="group relative flex-none w-72 h-96 rounded-2xl overflow-hidden snap-center cursor-pointer shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-serif font-bold text-white tracking-wide">
                  {category.name}
                </h3>
                <span className="inline-flex items-center text-gold text-sm font-medium mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Explore Collection <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
          
          {/* Placeholder for Parties (could substitute with Festival image or link if needed) */}
        </div>
      </div>
    </section>
  );
}
