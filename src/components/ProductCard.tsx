import React from 'react';
import { Star } from 'lucide-react';
import { Product, ProductCardProps } from '../models';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-md transition-shadow duration-300">
      <div className="aspect-square mb-3 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <h3 className="text-sm font-medium line-clamp-2 mb-1 h-10">{product.title}</h3>
      <div className="flex items-center mb-1">
        <div className="flex items-center text-[#FF9900]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={14}
              fill={index < Math.floor(product.rating) ? "#FF9900" : "none"}
              className={index < Math.floor(product.rating) ? "text-[#FF9900]" : "text-gray-300"}
            />
          ))}
        </div>
        <span className="text-xs text-gray-600 ml-1">({product.reviewCount})</span>
      </div>
      <div className="mb-2">
        <span className="font-bold">${product.price.toFixed(2)}</span>
        {product.originalPrice && (
          <>
            <span className="text-gray-500 line-through text-sm ml-2">
              ${product.originalPrice.toFixed(2)}
            </span>
            <span className="text-green-600 text-sm ml-2">
              {discountPercentage}% off
            </span>
          </>
        )}
      </div>
      {product.isPrime && (
        <div className="mb-2">
          <span className="inline-block bg-[#232F3E] text-white text-xs px-2 py-0.5 rounded">
            Prime
          </span>
        </div>
      )}
      <button 
        className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-sm font-medium py-1 px-3 rounded-full border border-[#FCD200] transition-colors"
        aria-label={`Add ${product.title} to Cart`}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;