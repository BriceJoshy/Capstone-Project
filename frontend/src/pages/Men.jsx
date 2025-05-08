import React from 'react';
import MenShirt from '../components/MenShirt';
import { Shirt } from 'lucide-react';

const Men = () => {
  return (
    <div className="pt-1">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Men's Tailored Perfection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Discover our handcrafted men's collection featuring shirts, trousers, and suits tailored to perfection.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">1. Choose Your Style</h3>
              <p className="text-sm text-gray-600">Select from our range of shirts, trousers, suits, and more.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">2. Perfect Measurements</h3>
              <p className="text-sm text-gray-600">Enter your measurements or select from your saved profiles.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">3. Custom Details</h3>
              <p className="text-sm text-gray-600">Customize collars, cuffs, buttons, and more to your preference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Collection Section */}
      <section className="p-4">
        <MenShirt />
      </section>
    </div>
  );
};

export default Men;
