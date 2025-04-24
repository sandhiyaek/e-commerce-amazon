import React from 'react';
import ProductCard, { Product } from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface DealSectionProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

const DealSection: React.FC<DealSectionProps> = ({ title, products, showViewAll = true }) => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = React.useState(false);
  const [showRightArrow, setShowRightArrow] = React.useState(true);

  const checkScrollButtons = () => {
    if (scrollContainer.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  React.useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainer.current) {
      const scrollAmount = scrollContainer.current.clientWidth * 0.8;
      const currentScroll = scrollContainer.current.scrollLeft;

      scrollContainer.current.scrollTo({
        left: direction === 'left'
          ? currentScroll - scrollAmount
          : currentScroll + scrollAmount,
        behavior: 'smooth',
      });

      setTimeout(checkScrollButtons, 400);
    }
  };

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

        <div className="relative group">
          {showLeftArrow && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Scroll left"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div
            ref={scrollContainer}
            className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar scroll-smooth"
            onScroll={checkScrollButtons}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-[200px] md:w-[220px]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {showRightArrow && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 z-10 p-2 rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Scroll right"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default DealSection;
