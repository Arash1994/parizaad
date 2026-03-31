import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Mirror Work Ethnic Suit',
    category: 'Suits',
    description: 'Exquisite handcrafted suit with intricate mirror work and golden embroidery',
    image: '/images/products/suit-1.jpg',
    details: [
      'Hand embroidered mirror work',
      'Premium quality fabric',
      'Golden floral detailing',
      'Comes with matching dupatta',
      'Custom tailoring available'
    ],
    available: true
  },
  {
    id: '2',
    name: 'Bottle Green Farshi Salwar',
    category: 'Traditional',
    description: 'Traditional farshi salwar in premium bottle green fabric with heavy embroidery',
    image: '/images/products/traditional-1.jpg',
    details: [
      'Pure khandi silk fabric',
      'Heavy golden embroidery',
      'Traditional farshi style',
      'Complete 3-piece set',
      'Worldwide shipping available'
    ],
    available: true
  },
  {
    id: '3',
    name: 'Designer Black Indowestern',
    category: 'Fusion Wear',
    description: 'Chic black indowestern dress with modern silhouette and ethnic touches',
    image: '/images/products/fusion-1.jpg',
    details: [
      'Contemporary fusion design',
      'Premium black fabric',
      'Embroidered detailing',
      'Comfortable fit',
      'Perfect for occasions'
    ],
    available: true
  },
  {
    id: '4',
    name: 'Navy Blue Embellished Suit',
    category: 'Suits',
    description: 'Stunning navy blue suit with intricate embellishments and shimmer fabric',
    image: '/images/products/suit-2.jpg',
    details: [
      'Jimmy Choo shimmer fabric',
      'Golden floral embroidery',
      'Intricate beadwork',
      'Matching accessories',
      'Made with love'
    ],
    available: true
  },
  {
    id: '5',
    name: 'Teal Embroidered Cord Set',
    category: 'Fusion Wear',
    description: 'Modern teal cord set with beautiful embroidery and contemporary design',
    image: '/images/products/fusion-2.jpg',
    details: [
      'Trendy cord set design',
      'Vibrant teal color',
      'Hand embroidered details',
      '2-piece set',
      'Comfortable and stylish'
    ],
    available: true
  },
  {
    id: '6',
    name: 'Golden Silk Handcrafted Suit',
    category: 'Designer',
    description: 'Luxurious handcrafted suit in pure silk with golden embroidery',
    image: '/images/products/designer-1.jpg',
    details: [
      'Pure silk fabric',
      'Handcrafted detailing',
      'Golden thread work',
      'Royal aesthetic',
      'Premium quality'
    ],
    available: true
  },
  {
    id: '7',
    name: 'Elegant Designer Jumpsuit',
    category: 'Designer',
    description: 'Sophisticated designer jumpsuit with modern cut and ethnic embellishments',
    image: '/images/products/designer-2.jpg',
    details: [
      'Contemporary jumpsuit design',
      'Ethnic embellishments',
      'Comfortable fabric',
      'Unique silhouette',
      'Statement piece'
    ],
    available: true
  },
  {
    id: '8',
    name: 'Maroon Velvet Festive Suit',
    category: 'Suits',
    description: 'Rich maroon velvet suit perfect for festive occasions with heavy work',
    image: '/images/products/suit-3.jpg',
    details: [
      'Luxurious velvet fabric',
      'Deep maroon color',
      'Heavy embroidery work',
      'Festive collection',
      'Limited edition'
    ],
    available: true
  },
  {
    id: '9',
    name: 'Peach Anarkali with Mirror Work',
    category: 'Traditional',
    description: 'Beautiful peach anarkali with traditional mirror work and sequins',
    image: '/images/products/traditional-2.jpg',
    details: [
      'Flowing anarkali style',
      'Soft peach shade',
      'Mirror and sequin work',
      'Traditional charm',
      'Elegant drape'
    ],
    available: true
  },
  {
    id: '10',
    name: 'Mint Green Palazzo Set',
    category: 'Fusion Wear',
    description: 'Refreshing mint green palazzo set with contemporary design',
    image: '/images/products/fusion-3.jpg',
    details: [
      'Modern palazzo style',
      'Fresh mint green',
      'Comfortable fit',
      '3-piece set',
      'Perfect for summer'
    ],
    available: true
  },
  {
    id: '11',
    name: 'Cream Chikankari Kurta Set',
    category: 'Traditional',
    description: 'Classic cream kurta with delicate chikankari embroidery',
    image: '/images/products/traditional-3.jpg',
    details: [
      'Handcrafted chikankari',
      'Pure cotton fabric',
      'Timeless design',
      'Complete kurta set',
      'Breathable and elegant'
    ],
    available: true
  },
  {
    id: '12',
    name: 'Burgundy Sequin Gown',
    category: 'Designer',
    description: 'Glamorous burgundy gown with heavy sequin work and modern cut',
    image: '/images/products/designer-3.jpg',
    details: [
      'Premium sequin work',
      'Rich burgundy shade',
      'Modern gown silhouette',
      'Party wear special',
      'Show-stopping piece'
    ],
    available: true
  }
];

/**
 * Get all products
 */
export function getAllProducts(): Product[] {
  return products;
}

/**
 * Get products by category
 */
export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') {
    return products;
  }
  return products.filter(product => product.category === category);
}

/**
 * Get product by ID
 */
export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

/**
 * Get featured products (first 6)
 */
export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}
