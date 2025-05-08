import React from 'react';

const Women = () => {
  return (
    <div className="pt-1">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-r from-pink-50 to-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Women's Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Explore our exquisite women's collection of blouses, dresses, and traditional wear crafted with precision.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">1. Select Your Style</h3>
              <p className="text-sm text-gray-600">Choose from blouses, dresses, kurtis, and traditional wear.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">2. Your Measurements</h3>
              <p className="text-sm text-gray-600">Provide accurate measurements for a perfect fit.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">3. Personalized Details</h3>
              <p className="text-sm text-gray-600">Select necklines, sleeves, patterns, and embellishments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Women;
