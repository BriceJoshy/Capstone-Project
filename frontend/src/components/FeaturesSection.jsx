import React from 'react';
import { CheckCircle, RefreshCw, Ruler, Award } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Ruler size={32} />,
      title: "Tailored Fit",
      description: "All our clothes are made to measure for a perfect fit that enhances your style and comfort."
    },
    {
      icon: <Award size={32} />,
      title: "Premium Quality",
      description: "We use only the finest fabrics and materials to ensure durable, comfortable, and stylish clothing."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "Easy Returns",
      description: "Not satisfied? Return within 30 days for a full refund or exchange with our hassle-free policy."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Fabric Variety",
      description: "Choose from hundreds of premium fabrics and patterns to create your perfect outfit."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what sets Stitchify apart and why customers love our clothing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have experienced the perfect fit with Stitchify's custom tailoring.
          </p>
          <a 
            href="#categories" 
            className="inline-block px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg shadow-lg hover:bg-indigo-700 transition-all transform hover:-translate-y-1"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
