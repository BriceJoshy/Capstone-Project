import React from 'react';

const Kids = () => {
  return (
    <div className="pt-1">
      {/* Hero/Header Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Kids' Collection
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
            Browse our adorable children's collection designed for comfort, style, and durability.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">1. Pick a Style</h3>
              <p className="text-sm text-gray-600">Browse our collection of comfortable and stylish kids' wear.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">2. Growing Measurements</h3>
              <p className="text-sm text-gray-600">Enter measurements with growth allowance for longer wear.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-2">3. Fun Customizations</h3>
              <p className="text-sm text-gray-600">Add fun elements, colors, and comfortable details.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kids;
