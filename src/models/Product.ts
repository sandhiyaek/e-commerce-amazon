export interface Product {
  id: number;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice?: number;
  isPrime?: boolean;
}

export interface ProductCardProps {
  product: Product;
}