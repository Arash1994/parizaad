'use client';

import { useState } from 'react';
import ProductGrid from '@/components/products/ProductGrid';
import CategoryFilter from '@/components/ui/CategoryFilter';
import { getAllProducts, getProductsByCategory } from '@/data/products';
import { ProductCategory } from '@/types/product';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('All');
  const [products, setProducts] = useState(getAllProducts());

  const handleCategoryChange = (category: ProductCategory) => {
    setSelectedCategory(category);
    const filteredProducts = category === 'All'
      ? getAllProducts()
      : getProductsByCategory(category);
    setProducts(filteredProducts);
  };

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our Collection
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Explore our handcrafted designs featuring premium fabrics and intricate detailing
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Products Grid */}
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
