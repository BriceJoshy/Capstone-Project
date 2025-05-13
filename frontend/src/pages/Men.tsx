import React, { useEffect } from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import HowItWorks from '../components/category/HowItWorks';
import Products from '../components/products/Products';

const Men: React.FC = () => {
  useEffect(() => {
    document.title = 'Men\'s Collection - Stitchify';
  }, []);

  return (
    <div>
      <CategoryHeader 
        title="Men's Collection" 
        description="Discover our premium collection of tailored suits, shirts, trousers, and more for the modern gentleman."
        backgroundImage="https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg"
      />
      
      <HowItWorks />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Men's Collection</h2>
          <Products category="Men" />
        </div>
      </section>
    </div>
  );
};

export default Men;