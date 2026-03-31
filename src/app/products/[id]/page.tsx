import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { MessageCircle, ArrowLeft, Check } from 'lucide-react';
import { getProductById, getAllProducts } from '@/data/products';
import { generateProductInquiry, generateWhatsAppLink } from '@/utils/whatsapp';
import ProductGrid from '@/components/products/ProductGrid';

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  // Get related products from same category (excluding current product)
  const allProducts = getAllProducts();
  const relatedProducts = allProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center space-x-2 text-foreground/60 hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <div className="relative h-96 md:h-[600px] bg-muted rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">
                {product.category}
              </p>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                {product.name}
              </h1>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              {product.description}
            </p>

            {/* Availability */}
            {product.available && (
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-green-600 font-semibold">Available Now</span>
              </div>
            )}

            {/* Product Details */}
            <div className="bg-muted rounded-lg p-6 space-y-3">
              <h3 className="font-semibold text-lg mb-3">Product Details</h3>
              {product.details.map((detail, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/70">{detail}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <a
                href={generateWhatsAppLink(generateProductInquiry(product.name))}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl transition-all w-full"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order on WhatsApp</span>
              </a>
              <p className="text-sm text-foreground/60 text-center">
                Contact us for pricing and custom tailoring options
              </p>
            </div>

            {/* Additional Info */}
            <div className="border-t border-border pt-6 space-y-2 text-sm text-foreground/60">
              <p>✓ Worldwide shipping available</p>
              <p>✓ Custom tailoring on request</p>
              <p>✓ Premium quality guarantee</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-serif font-bold mb-8">You May Also Like</h2>
            <ProductGrid products={relatedProducts} />
          </section>
        )}
      </div>
    </main>
  );
}
