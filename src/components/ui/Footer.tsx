import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold text-gold">PARIZAAD</h3>
            <p className="text-white/80 leading-relaxed">
              From our hearts to your wardrobe 💕
            </p>
            <p className="text-sm text-white/60">
              Handcrafted ethnic and fusion wear, made with love and attention to detail.
              Worldwide shipping available.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-white/80 hover:text-gold transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/80 hover:text-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/80 hover:text-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gold">Get In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-white/80 text-sm">Chandigarh, India</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919878122555"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  +91 98781 22555
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Instagram className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.instagram.com/parizaadchd_07/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold transition-colors text-sm"
                >
                  @parizaadchd_07
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} PARIZAAD. All rights reserved.
            </p>
            <p className="flex items-center space-x-1 text-white/60 text-sm">
              <span>Crafted with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>in Chandigarh</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
