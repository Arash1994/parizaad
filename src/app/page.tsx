import Hero from '@/components/ui/Hero';
import ProductGrid from '@/components/products/ProductGrid';
import { getFeaturedProducts } from '@/data/products';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import CategoryCarousel from '@/components/ui/CategoryCarousel';

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      
      {/* Category Carousel */}
      <CategoryCarousel />

      {/* Featured Products Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Featured Collection
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Handpicked designs that showcase the finest craftsmanship and premium quality
            </p>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center space-x-2 gradient-primary text-white px-8 py-3.5 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-serif font-bold">
                Crafted with Love & Passion
              </h2>
              <p className="text-foreground/70 leading-relaxed">
                At PARIZAAD, every piece is more than just clothing - it&apos;s a work of art. 
                We combine traditional craftsmanship with modern design to create unique pieces 
                that celebrate your individuality.
              </p>
              <p className="text-foreground/70 leading-relaxed">
                From our hearts to your wardrobe, we bring you handcrafted ethnic and fusion 
                wear made with premium fabrics, intricate embroidery, and attention to every detail.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-navy transition-colors"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-primary mb-2">100+</p>
                <p className="text-sm text-foreground/70">Unique Designs</p>
              </div>
              <div className="bg-navy/10 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-navy mb-2">500+</p>
                <p className="text-sm text-foreground/70">Happy Customers</p>
              </div>
              <div className="bg-green/10 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-green mb-2">50+</p>
                <p className="text-sm text-foreground/70">Countries Shipped</p>
              </div>
              <div className="bg-gold/20 rounded-lg p-6 text-center">
                <p className="text-3xl font-bold text-gold mb-2">5★</p>
                <p className="text-sm text-foreground/70">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
