import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter brightness-70"
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg')" 
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto animate-fade-in">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          Tailored <span className="text-indigo-400">Perfection</span>, Every Stitch
        </h1>
        <p className="text-xl text-gray-200 mb-10 max-w-3xl mx-auto animate-fade-in-delay">
          Discover the perfect fit with our custom tailoring services. 
          From ready-to-wear collections to bespoke creations, we craft garments that elevate your style.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
          <Link 
            to="#categories" 
            className="px-8 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-300"
          >
            Shop Now
          </Link>
          <Link 
            to="/custom" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-indigo-800 hover:-translate-y-1 transition-all duration-300"
          >
            Design Custom
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;