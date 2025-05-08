import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.pexels.com/photos/5709661/pexels-photo-5709661.jpeg?auto=compress&cs=tinysrgb&w=1600")',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      
      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in">
            Fashion Tailored to Your <span className="text-indigo-400">Unique Style</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
            Discover the perfect fit with clothes designed for your personality and comfort.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <a 
              href="#categories" 
              className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
              Shop Now
            </a>
            <a 
              href="#build" 
              className="px-8 py-3 bg-transparent border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-indigo-900 transition-all transform hover:-translate-y-1"
            >
              Design Custom
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
