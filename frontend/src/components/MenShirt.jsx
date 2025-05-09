import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MenShirt = () => {
  const [shirts, setShirts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/products');
        const filtered = res.data.filter(product => product.productCategory === 'Men');
        setShirts(filtered);
      } catch (err) {
        setError('Failed to fetch shirts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShirts();
  }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const nextImage = (shirtId) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[shirtId] || 0;
      const nextIndex = (currentIndex + 1) % shirts.find(shirt => shirt.productId === shirtId).productImageUrl.length;
      return { ...prev, [shirtId]: nextIndex };
    });
  };

  const prevImage = (shirtId) => {
    setCurrentImageIndex(prev => {
      const currentIndex = prev[shirtId] || 0;
      const imageArray = shirts.find(shirt => shirt.productId === shirtId).productImageUrl;
      const prevIndex = (currentIndex - 1 + imageArray.length) % imageArray.length;
      return { ...prev, [shirtId]: prevIndex };
    });
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
      {shirts.map(shirt => (
        <Link to={`/product/${shirt.productId}`} key={shirt.productId}>
          <div className="group bg-white shadow-lg p-2 transition-all duration-300 hover:shadow-2xl">
            <div className="relative overflow-hidden">
              <img
                src={shirt.productImageUrl[currentImageIndex[shirt.productId] || 0]}
                alt={`shirt-${shirt.productId}`}
                className="w-full h-92 object-cover border border-gray-200 transform transition-transform duration-500 group-hover:scale-110"
              />
              {shirt.productImageUrl.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      prevImage(shirt.productId);
                    }}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black opacity-0 hover:opacity-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
                  >
                    ❮
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      nextImage(shirt.productId);
                    }}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black opacity-0 hover:opacity-100 hover:bg-gray-200 rounded-full p-2 transition-all duration-200"
                  >
                    ❯
                  </button>
                </>
              )}
            </div>
            <h2 className="text-lg font-semibold mt-2 text-center">{shirt.productName}</h2>
            <p className="text-sm text-gray-600 text-center">₹{shirt.productPrice}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenShirt;