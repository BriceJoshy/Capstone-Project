import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`http://localhost:8080/api/products/${productId}`);
        setProduct(res.data);
        setImageIndex(0);
      } catch (err) {
        setError('Product not found.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="flex h-[calc(100vh-4rem)] w-screen overflow-hidden">
      {/* Left - Image Section */}
      <div className="w-1/2 h-full flex items-center justify-center bg-gray-50 p-4">
        {product?.productImageUrl?.length > 0 ? (
          <img
            src={product.productImageUrl[imageIndex]}
            alt={product.productName || 'Product'}
            className="w-full h-full object-contain rounded-lg"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-500">No Image Available</span>
          </div>
        )}
      </div>

      {/* Right - Product Info */}
      <div className="w-1/2 h-full p-8 overflow-y-auto bg-white">
        <h1 className="text-3xl font-bold mb-2">{product?.productName || 'Product Name'}</h1>
        <p className="text-xl text-green-600 mb-4">₹{product?.productPrice ?? 'N/A'}</p>
        <p className="text-gray-700 mb-6">{product?.productDescription || 'No description available.'}</p>
        <button
          onClick={toggleForm}
          className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          CUSTOMISE & BUY
        </button>
      </div>

      {/* Form Drawer */}
      <div
        className={`fixed top-16 right-0 w-full md:w-1/2 h-[calc(100vh-4rem)] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          showForm ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative p-6 space-y-6">
          <button
            onClick={toggleForm}
            className="absolute top-4 right-4 text-2xl font-bold text-gray-600 hover:text-black"
          >
            ×
          </button>

          <h2 className="text-2xl font-bold mb-2">Create New Measurement</h2>

          {/* Fit */}
          <div>
            <label className="block text-lg font-medium mb-2">1/4 Select Fit*</label>
            <select className="w-full p-2 border rounded-md">
              <option>Slim - Well fitted pants for a lean look</option>
              <option>Tapered - Wider at hips, slim at bottom</option>
              <option>Relaxed - Generous space throughout</option>
            </select>
          </div>

          {/* Rise */}
          <div>
            <label className="block text-lg font-medium mb-2">2/4 Select Rise*</label>
            <select className="w-full p-2 border rounded-md">
              <option>Low - 2 inches below the belly button</option>
              <option>Mid - 1 inch below the belly button</option>
              <option>High - At the belly button</option>
            </select>
          </div>

          {/* Waist */}
          <div>
            <label className="block text-lg font-medium mb-2">3/4 True Waist Measurement*</label>
            <select className="w-full p-2 border rounded-md">
              {Array.from({ length: 23 }, (_, i) => (
                <option key={i}>{28 + i}</option>
              ))}
            </select>
          </div>

          {/* Inseam */}
          <div>
            <label className="block text-lg font-medium mb-2">4/4 Pant Inseam Length*</label>
            <select className="w-full p-2 border rounded-md">
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i}>{25 + i}</option>
              ))}
            </select>
          </div>

          {/* Monogramming */}
          <div>
            <label className="block text-lg font-medium mb-2">Free Monogramming (Optional)</label>
            <input
              type="text"
              placeholder="Type Text"
              className="w-full p-2 border rounded-md"
            />
          </div>

          {/* Advanced Options */}
          <div>
            <label className="block text-lg font-medium mb-2">Front Panel</label>
            <select className="w-full p-2 border rounded-md">
              <option>Flat Front</option>
              <option>Crease</option>
              <option>Single Pleat</option>
              <option>Double Pleat</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Outer Waistband</label>
            <select className="w-full p-2 border rounded-md">
              <option>Regular</option>
              <option>Extended Tab</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Fastening</label>
            <select className="w-full p-2 border rounded-md">
              <option>Button</option>
              <option>Hook</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Front Pocket</label>
            <select className="w-full p-2 border rounded-md">
              <option>Slant Pocket</option>
            </select>
          </div>

          <div>
            <label className="block text-lg font-medium mb-2">Hem</label>
            <select className="w-full p-2 border rounded-md">
              <option>Regular</option>
              <option>Turn Up</option>
            </select>
          </div>

          <button
            onClick={toggleForm}
            className="bg-black text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
