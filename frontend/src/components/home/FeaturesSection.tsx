import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Award, RefreshCw, CheckCircle } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition-shadow duration-300">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Ruler size={24} />,
      title: "Tailored Fit",
      description: "Every garment is precision-crafted to your measurements for the perfect fit."
    },
    {
      icon: <Award size={24} />,
      title: "Premium Quality",
      description: "We use only the finest materials and craftsmanship for long-lasting garments."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Easy Returns",
      description: "Not satisfied? Our hassle-free return policy has got you covered."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Fabric Variety",
      description: "Choose from hundreds of premium fabrics to match your style and comfort."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Stitchify, we combine traditional tailoring craftsmanship with modern technology
            to deliver an exceptional experience and perfectly fitted garments.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title} 
              description={feature.description}
            />
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-700 mb-6">
            Join thousands of satisfied customers who trust Stitchify for their tailoring needs.
          </p>
          <Link 
            to="#categories"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-8 py-3 rounded-md 
                       transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;