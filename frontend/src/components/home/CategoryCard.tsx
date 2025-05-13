import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="relative group h-[400px] lg:h-[500px] overflow-hidden rounded-xl">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transform transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
      
      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{description}</p>
        <Link 
          to={link}
          className="inline-block bg-white text-indigo-800 px-6 py-2 rounded-md font-medium 
                     hover:bg-indigo-600 hover:text-white transition-all duration-300 
                     transform translate-y-2 group-hover:translate-y-0"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;