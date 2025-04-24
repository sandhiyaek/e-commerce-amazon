import React from 'react';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import CategoryGrid from './components/CategoryGrid';
import DealSection from './components/DealSection';
import RecommendationSection from './components/RecommendationSection';
import Footer from './components/Footer';
import { dealsProducts, electronicsProducts, recommendedProducts } from './data/productData';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <DealSection title="Today's Deals" products={dealsProducts} />
        <DealSection title="Popular in Electronics" products={electronicsProducts} />
        <RecommendationSection title="Recommended for you" products={recommendedProducts} />
      </main>
      <Footer />
    </div>
  );
}

export default App;