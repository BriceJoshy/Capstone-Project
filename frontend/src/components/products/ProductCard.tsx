import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProductCardProps {
  product: {
    productId: string;
    productName: string;
    productPrice: number;
    productImageUrl: string | string[];
    productCategory: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Convert single image to array for consistent handling
  const images = Array.isArray(product.productImageUrl) 
    ? product.productImageUrl 
    : [product.productImageUrl];

  const nextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <Link to={`/product/${product.productId}`} className="group">
      <div className="relative overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Image with carousel functionality */}
        <div className="relative h-94 overflow-hidden">
          <img 
            src={images[currentImageIndex]} 
            alt={product.productName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Navigation arrows - only show if more than one image */}
          {images.length > 1 && (
            <>
              <button 
                onClick={prevImage} 
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronLeft className="h-5 w-5 text-gray-800" />
              </button>
              <button 
                onClick={nextImage} 
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full 
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <ChevronRight className="h-5 w-5 text-gray-800" />
              </button>
            </>
          )}
        </div>
        
        {/* Product info */}
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1 truncate">{product.productName}</h3>
          <p className="text-green-600 font-semibold">Rs.{product.productPrice.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;