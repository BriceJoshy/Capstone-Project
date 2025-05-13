import React, { useEffect } from 'react';
import CategoryHeader from '../components/category/CategoryHeader';
import HowItWorks from '../components/category/HowItWorks';
import Products from '../components/products/Products';

const Kids: React.FC = () => {
  useEffect(() => {
    document.title = 'Kids\' Collection - Stitchify';
  }, []);

  return (
    <div>
      <CategoryHeader 
        title="Kid's Collection" 
        description="Adorable outfits crafted with care for comfort and style. Perfect for special occasions and everyday wear."
        backgroundImage="https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg"
      />
      
      <HowItWorks />
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Kids' Collection</h2>
          <Products category="Kids" />
        </div>
      </section>
    </div>
  );
};

export default Kids;