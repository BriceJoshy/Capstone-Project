import React from 'react';

const CategoryCard = ({ title, imageUrl, description, link }) => {
  return (
    <div className="relative overflow-hidden rounded-xl group h-[400px] lg:h-[500px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 group-hover:translate-y-0">
        <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
          {description}
        </p>
        <a 
          href={link} 
          className="inline-block px-6 py-2 bg-white text-indigo-900 font-medium rounded-lg transform transition-all duration-300 hover:bg-indigo-600 hover:text-white"
        >
          Explore Collection
        </a>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const categories = [
    {
      title: "Men's Collection",
      imageUrl: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Elevate your style with our premium men's collection featuring tailored shirts, pants, and accessories.",
      link: "/men"
    },
    {
      title: "Women's Collection",
      imageUrl: "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Discover the latest trends in women's fashion with our curated selection of dresses, tops, and more.",
      link: "/women"
    },
    {
      title: "Kid's Collection",
      imageUrl: "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=1600",
      description: "Comfortable and stylish outfits for the little ones, designed with care and attention to detail.",
      link: "/kids"
    }
  ];

  return (
    <section id="categories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collections and find the perfect outfit for every occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard 
              key={index}
              title={category.title}
              imageUrl={category.imageUrl}
              description={category.description}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
