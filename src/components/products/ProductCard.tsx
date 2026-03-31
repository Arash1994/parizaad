import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Product } from '@/types/product';
import { generateProductInquiry, generateWhatsAppLink } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <Link href={`/products/${product.id}`} className="block relative h-80 bg-muted overflow-hidden">
        <div className="absolute inset-0 bg-muted">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="text-white space-y-2">
            <p className="text-sm font-medium">View Details</p>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-6 space-y-4">
        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
        </div>

        <p className="text-foreground/70 text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 text-center bg-navy hover:bg-navy/90 text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-all"
          >
            View Details
          </Link>
          <a
            href={generateWhatsAppLink(generateProductInquiry(product.name))}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg transition-all"
            title="Order on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>

        {/* Availability Badge */}
        {product.available && (
          <div className="flex items-center space-x-2 text-xs">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-600 font-medium">Available Now</span>
          </div>
        )}
      </div>
    </div>
  );
}
