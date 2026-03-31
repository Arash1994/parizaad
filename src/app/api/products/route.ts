import { NextRequest, NextResponse } from 'next/server';
import { getAllProducts, getProductsByCategory } from '@/data/products';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');

  try {
    const products = category
      ? getProductsByCategory(category)
      : getAllProducts();

    return NextResponse.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Error fetching products',
      },
      { status: 500 }
    );
  }
}
