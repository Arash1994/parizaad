import Link from 'next/link';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { generateGeneralInquiry, generateWhatsAppLink } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light/20 to-primary" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl opacity-20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Tagline */}
          <div className="inline-block px-6 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <p className="text-gold font-medium text-sm md:text-base tracking-wider uppercase">
              ✨ Handcrafted with Love
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-white">
            From Our Hearts to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light">Your Wardrobe</span>
          </h1>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed font-light">
            Discover exquisite ethnic and fusion wear crafted with premium fabrics 
            and intricate detailing. Each piece tells a story of tradition meets modernity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Link
              href="/products"
              className="group flex items-center space-x-2 bg-gold hover:bg-gold-light text-primary px-8 py-4 rounded-lg font-bold text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all hover:-translate-y-1"
            >
              <span>Shop Collection</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={generateWhatsAppLink(generateGeneralInquiry())}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:-translate-y-1"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 flex flex-wrap justify-center gap-8 text-sm text-gold/80 uppercase tracking-widest">
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Worldwide Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 bg-gold rounded-full" />
              <span>Custom Tailoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
