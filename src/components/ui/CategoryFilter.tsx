'use client';

import { useState } from 'react';
import { ProductCategory } from '@/types/product';

interface CategoryFilterProps {
  selectedCategory: ProductCategory;
  onCategoryChange: (category: ProductCategory) => void;
}

const categories: ProductCategory[] = ['All', 'Suits', 'Fusion Wear', 'Traditional', 'Designer'];

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${
            selectedCategory === category
              ? 'gradient-primary text-white shadow-lg scale-105'
              : 'bg-white text-foreground/70 hover:bg-muted hover:text-foreground border border-border'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
