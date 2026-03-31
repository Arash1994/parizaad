export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  image: string;
  details: string[];
  available: boolean;
}

export type ProductCategory = 'All' | 'Suits' | 'Fusion Wear' | 'Traditional' | 'Designer';
