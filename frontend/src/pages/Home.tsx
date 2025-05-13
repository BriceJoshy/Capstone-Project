import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import BuildFromScratch from '../components/home/BuildFromScratch';
import FeaturesSection from '../components/home/FeaturesSection';

const Home: React.FC = () => {
  // Update the document title
  React.useEffect(() => {
    document.title = 'Stitchify - Premium Tailoring Services';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <CategorySection />
      <BuildFromScratch />
      <FeaturesSection />
    </div>
  );
};

export default Home;