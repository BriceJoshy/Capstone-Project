import React from 'react';

interface CategoryHeaderProps {
  title: string;
  description: string;
  backgroundImage: string;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ title, description, backgroundImage }) => {
  return (
    <div className="relative py-20 mb-10">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/80 to-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl max-w-2xl">{description}</p>
      </div>
    </div>
  );
};

export default CategoryHeader;