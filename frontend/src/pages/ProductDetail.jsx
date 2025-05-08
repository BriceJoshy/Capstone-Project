import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="text-center mt-10">Loading...</div>;

  return (
    <div className="container mx-auto p-4 grid md:grid-cols-2 gap-8">
      <div className="relative">
        <img
          src={product.productImageUrl[currentImageIndex]}
          alt="product"
          className="w-full h-auto rounded-lg border"
        />
        {product.productImageUrl.length > 1 && (
          <>
            <button
              onClick={() =>
                setCurrentImageIndex((currentImageIndex - 1 + product.productImageUrl.length) % product.productImageUrl.length)
              }
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow"
            >
              ❮
            </button>
            <button
              onClick={() =>
                setCurrentImageIndex((currentImageIndex + 1) % product.productImageUrl.length)
              }
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow"
            >
              ❯
            </button>
          </>
        )}
        <div className="flex mt-4 gap-2">
          {product.productImageUrl.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`thumb-${idx}`}
              onClick={() => setCurrentImageIndex(idx)}
              className={`w-20 h-20 object-cover border cursor-pointer rounded ${idx === currentImageIndex ? 'border-blue-500' : 'border-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-2">{product.productName}</h2>
        <p className="text-lg text-gray-700 mb-2">₹{product.productPrice}</p>
        <p className="mb-2"><strong>Description:</strong> {product.productDescription}</p>
        <p className="mb-2"><strong>Details:</strong> {product.productDetails}</p>
        <p className="mb-4"><strong>Care:</strong> {product.productCare}</p>

        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Size Chart</h3>
          {/* Replace with actual size chart image or table later */}
          <div className="border p-2 text-gray-500 italic">Size chart placeholder</div>
        </div>

        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded">Add to Cart</button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
