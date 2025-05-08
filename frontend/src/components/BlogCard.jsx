import React, { useState } from 'react';

const BlogCard = ({ title, images, summary, fullArticle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
      {/* Blog Cover Image and Title */}
      <div className="flex flex-col p-4">
        <img
          src={images[0]} // Display the first image as the cover photo
          alt={`${title}-cover`}
          className="w-full max-w-[300px] h-auto object-contain mx-auto mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{summary}</p>
      </div>

      {/* Toggle for Read More / Read Less */}
      <div className="p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-blue-500 text-sm mt-2"
        >
          {isOpen ? 'Read Less' : 'Read More'}
        </button>
      </div>

      {/* Full Article and Images */}
      {isOpen && (
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">{fullArticle}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${title}-image-${index}`}
                className="max-w-[300px] h-auto object-contain"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
