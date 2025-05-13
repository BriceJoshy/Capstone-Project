import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Men',
    description: 'Explore our collection of premium tailored suits, shirts, and trousers for men.',
    image: 'https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg',
    link: '/men'
  },
  {
    id: 2,
    title: 'Women',
    description: 'Discover elegant dresses, blouses, and pants crafted with precision for women.',
    image: 'https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg',
    link: '/women'
  },
  {
    id: 3,
    title: 'Kids',
    description: 'Find comfortable and stylish outfits designed specially for children.',
    image: 'https://images.pexels.com/photos/5905445/pexels-photo-5905445.jpeg',
    link: '/kids'
  }
];

const CategorySection: React.FC = () => {
  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Browse our collections categorized for men, women, and kids. 
            Each piece is crafted with precision and care to ensure the perfect fit.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <CategoryCard 
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;