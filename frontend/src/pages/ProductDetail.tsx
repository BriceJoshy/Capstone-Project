import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  productId: string;
  productName: string;
  productPrice: number;
  productDescription?: string;
  productImageUrl: string[];
  productCategory: string;
}

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showCustomization, setShowCustomization] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get<Product>(`http://localhost:8080/api/products/${productId}`);
        setProduct(res.data);
        setCurrentImageIndex(0);

        document.title = `${res.data.productName} - Stitchify`;
      } catch (err) {
        console.error(err);
        setError('Product not found.');
        document.title = 'Product Not Found - Stitchify';
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const nextImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev + 1) % product.productImageUrl.length);
  };

  const prevImage = () => {
    if (!product) return;
    setCurrentImageIndex((prev) => (prev - 1 + product.productImageUrl.length) % product.productImageUrl.length);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  const images = Array.isArray(product.productImageUrl)
    ? product.productImageUrl
    : [product.productImageUrl];

  return (
    <div className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Image Section */}
          <div className="relative ">
            <div className=" relative h-[500px] overflow-hidden rounded-lg bg-gray-100">
              <img
                src={images[currentImageIndex]}
                alt={product.productName}
                className="w-full h-full object-contain"
              />
              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-800" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-md"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-800" />
                  </button>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div className="flex mt-4 space-x-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-indigo-600' : 'border-gray-200'
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.productName}</h1>
            <p className="text-2xl font-medium text-green-600 mb-6">₹{product.productPrice.toFixed(2)}</p>
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
              {product.productDescription ? (
                <p className="text-gray-700">{product.productDescription}</p>
              ) : (
                <p className="text-gray-500 italic">No description available.</p>
              )}
            </div>

            <button
              onClick={() => setShowCustomization((prev) => !prev)}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 transition-colors mb-6"
            >
              {showCustomization ? 'Hide Customization Options' : 'Customize & Buy'}
            </button>

            {/* Customization Form */}
            {showCustomization && (
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 transition-all space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Customize Your {product.productName}</h2>

                <div>
                  <label className="block text-sm font-medium mb-1">Fit</label>
                  <select className="w-full p-2 border rounded">
                    <option>Slim Fit</option>
                    <option>Regular Fit</option>
                    <option>Relaxed Fit</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Rise</label>
                  <select className="w-full p-2 border rounded">
                    <option>Low Rise</option>
                    <option>Mid Rise</option>
                    <option>High Rise</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Waist</label>
                  <select className="w-full p-2 border rounded">
                    {Array.from({ length: 23 }, (_, i) => (
                      <option key={i}>{28 + i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Inseam</label>
                  <select className="w-full p-2 border rounded">
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i}>{25 + i}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">Monogram (Optional)</label>
                  <input type="text" className="w-full p-2 border rounded" placeholder="Your text" />
                </div>

                {/* Add more customization fields here if needed */}

                <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition">
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
