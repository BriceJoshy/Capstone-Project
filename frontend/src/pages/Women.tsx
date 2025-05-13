import React, { useEffect } from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import HowItWorks from '../components/category/HowItWorks';
import Products from '../components/products/Products';

const Women: React.FC = () => {
  useEffect(() => {
    document.title = 'Women\'s Collection - Stitchify';
  }, []);

  return (
    <div>
      <CategoryHeader 
        title="Women's Collection" 
        description="Explore our elegant selection of dresses, blouses, skirts, and more designed for the modern woman."
        backgroundImage="https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg"
      />
      
      <HowItWorks />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Women's Collection</h2>
          <Products category="Women" />
        </div>
      </section>
    </div>
  );
};

export default Women;