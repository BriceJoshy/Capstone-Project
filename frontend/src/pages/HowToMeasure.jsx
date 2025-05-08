import React from 'react';
import { useNavigate } from 'react-router-dom';
import menImage from '../assets/men.jpg';
import womenImage from '../assets/women.jpg';
import kidsImage from '../assets/kids.jpg';

const HowToMeasure = () => {
  const navigate = useNavigate();

  const blocks = [
    { label: 'Men', image: menImage, path: '/how-to-measure/men' },
    { label: 'Women', image: womenImage, path: '/how-to-measure/women' },
    { label: 'Kids', image: kidsImage, path: '/how-to-measure/kids' },
  ];

  return (
    <div className="bg-gray-100 px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {blocks.map((block) => (
        <div
          key={block.label}
          className="cursor-pointer group"
          onClick={() => navigate(block.path)}
        >
          <div className="h-64 sm:h-80 md:h-96 rounded-xl shadow-md overflow-hidden">
            <div
              className="w-full h-full transition-transform duration-300 transform group-hover:scale-105"
              style={{
                backgroundImage: `url(${block.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-3 text-center">
            <span className="text-lg font-semibold text-gray-800 group-hover:text-blue-600">
              {block.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HowToMeasure;

