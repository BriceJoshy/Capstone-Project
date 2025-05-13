import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: "Choose Your Style",
      description: "Browse our collection and select the perfect style that matches your taste and occasion."
    },
    {
      id: 2,
      title: "Perfect Measurements",
      description: "Enter your measurements or use our guided measurement tool for the perfect fit."
    },
    {
      id: 3,
      title: "Custom Details",
      description: "Personalize your garment with custom details like fabric, collar style, buttons, and more."
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.id}
              </div>
              
              {/* Step Content */}
              <div className="bg-white p-6 pt-10 rounded-lg shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
              
              {/* Connector Line - but not on the last item */}
              {step.id < steps.length && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-indigo-300">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-500 rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;