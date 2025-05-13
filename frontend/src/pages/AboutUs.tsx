import React, { useEffect } from 'react';

const AboutUs: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us - Stitchify';
  }, []);

  return (
    <div className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">About Us</h1>
        
        <div className="space-y-6 text-justify text-gray-700">
          <p>
            Stitchify is a project developed by <span className="font-medium text-gray-800">Saran</span> and <span className="font-medium text-gray-800">Brice</span> during a training program to revolutionize the tailoring industry by bridging the gap between traditional craftsmanship and modern technology. Our platform aims to support boutique shopping and provide a seamless online tailoring experience.
          </p>
          
          <p>
            Our platform offers a comprehensive solution for tailoring businesses and customers alike. We feature ready-made clothing collections for <span className="font-medium text-gray-800">Men</span>, <span className="font-medium text-gray-800">Women</span>, and <span className="font-medium text-gray-800">Kids</span>, all available at your fingertips. What sets us apart is our innovative <span className="font-medium text-gray-800">"Build from Scratch"</span> feature, allowing customers to create fully customized garments based on their exact measurements and preferences.
          </p>
          
          <p>
            Stitchify comes equipped with a range of powerful features to enhance user experience, including secure login and authentication, an intuitive shopping cart system, fully responsive UI design for any device, and comprehensive order tracking capabilities. For tailors and business owners, our platform offers benefits such as digital record-keeping of customer measurements, efficient order management, and streamlined delivery processes.
          </p>
          
          <p>
            From a technical perspective, Stitchify is built on a robust stack featuring <span className="font-medium text-gray-800">Java Spring Boot</span> for the backend services, providing a secure and scalable foundation for our application. The frontend is developed using <span className="font-medium text-gray-800">React.js</span> with <span className="font-medium text-gray-800">Tailwind CSS</span>, ensuring a modern, responsive, and visually appealing user interface.
          </p>
          
          <p>
            This project represents not just a technical achievement but also a collaborative effort between team members with diverse skills and perspectives. Through its development, we've gained valuable real-world experience in creating solutions that address genuine business needs while delivering an exceptional user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;