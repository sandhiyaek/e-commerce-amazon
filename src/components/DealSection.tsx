import React from 'react';
import ProductCard, { Product } from './ProductCard';

interface DealSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

const DealSection: React.FC<DealSectionProps> = ({ title, products, showViewAll = true }) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl md:text-2xl font-bold">{title}</h2>
          {showViewAll && (
            <a href="#" className="text-[#007185] hover:text-[#C7511F] hover:underline text-sm">
              View all
            </a>
          )}
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DealSection;