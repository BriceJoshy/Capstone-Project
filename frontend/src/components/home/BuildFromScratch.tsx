import React from 'react';
import { Link } from 'react-router-dom';
import { PencilRuler, Scissors, Shirt } from 'lucide-react';

const BuildFromScratch: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full filter blur-2xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-2xl opacity-60"></div>
            
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <img 
                src="https://images.pexels.com/photos/4620623/pexels-photo-4620623.jpeg" 
                alt="Tailor measuring fabric" 
                className="object-cover w-full h-full rounded-2xl"
              />
              <div className="absolute inset-0 bg-indigo-900 opacity-10"></div>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Build Your Outfit From Scratch
            </h2>
            <p className="text-gray-700 mb-8">
              Create a completely custom garment tailored to your exact specifications. 
              Our expert tailors will work with you to bring your vision to life, 
              ensuring the perfect fit and finish.
            </p>
            
            {/* Features */}
            <div className="space-y-6 mb-8">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <PencilRuler className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Measurements</h3>
                  <p className="text-gray-700">
                    Enter your precise measurements or schedule a professional measuring session.
                  </p>
                </div>
              </div>
              
              {/* Feature 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Scissors className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Fabric</h3>
                  <p className="text-gray-700">
                    Choose from our premium fabric collection or provide your own special material.
                  </p>
                </div>
              </div>
              
              {/* Feature 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Shirt className="h-6 w-6 text-indigo-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Style</h3>
                  <p className="text-gray-700">
                    Customize every detail from collar to cuffs, buttons to pleats.
                  </p>
                </div>
              </div>
            </div>
            
            {/* CTA Button */}
            <Link 
              to="/custom" 
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md 
                         transition-all duration-300 hover:-translate-y-1 hover:shadow-lg text-center"
            >
              Start Designing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildFromScratch;