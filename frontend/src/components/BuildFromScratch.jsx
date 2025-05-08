import React from 'react';
import { Scissors, PencilRuler, Shirt } from 'lucide-react';

const BuildFromScratch = () => {
  return (
    <section id="build" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-indigo-100 rounded-full opacity-70"></div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-100 rounded-full opacity-70"></div>
            
            <div className="relative overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4940756/pexels-photo-4940756.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Custom Tailoring" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-indigo-900 opacity-10"></div>
            </div>
          </div>
          
          {/* Content Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Build Your Outfit From Scratch
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Create clothing that's uniquely yours. Our custom design service lets you choose fabrics, styles, and details for a perfectly tailored experience.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <PencilRuler size={24} className="text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Custom Measurements</h3>
                  <p className="mt-1 text-gray-600">Perfect fit guaranteed with precise measurements tailored to your body.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <Scissors size={24} className="text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Fabric Selection</h3>
                  <p className="mt-1 text-gray-600">Choose from premium fabrics, patterns, and textures for your unique style.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  <Shirt size={24} className="text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Style Customization</h3>
                  <p className="mt-1 text-gray-600">Personalize every detail from collars to buttons for a truly unique piece.</p>
                </div>
              </div>
            </div>
            
            <a 
              href="/custom" 
              className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
            >
              Start Designing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildFromScratch;
