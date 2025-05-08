import React from 'react';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
      
      <p className="text-gray-600 text-base leading-relaxed text-justify">
        This project, <span className="font-semibold">Stitchify</span>, was developed by <span className="font-medium text-gray-800">Saran</span> and <span className="font-medium text-gray-800">Brice</span> as part of our training program.
        Our goal was to build a modern platform that supports both boutique shopping and personalized tailoring experiences online.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        Stitchify enables customers to browse ready-made clothing collections for Men, Women, and Kids, 
        with the added flexibility to customize them by size. For users who want something truly unique, 
        we provide a “Build from Scratch” feature where customers can submit their own custom measurements 
        and design preferences.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        The platform also includes key features like a secure login system, shopping cart, responsive navigation, 
        and an order tracking mechanism. Tailors benefit from organized order flow, digital measurement records, 
        and improved delivery tracking, helping reduce manual errors and improve efficiency.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        For the backend, we are using <span className="font-medium text-gray-800">Java Spring Boot</span> to build scalable and maintainable microservices. 
        On the frontend, we are using <span className="font-medium text-gray-800">React.js</span> with <span className="font-medium text-gray-800">Tailwind CSS</span> for building responsive and interactive user interfaces.
      </p>

      <p className="text-gray-600 text-base leading-relaxed mt-4 text-justify">
        This project has helped us learn and apply full-stack development principles while working collaboratively 
        in a real-world scenario.
      </p>
    </div>
  );
};

export default About;
