import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import BuildFromScratch from '../components/BuildFromScratch';
import FeaturesSection from '../components/FeaturesSection';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <CategorySection />
        <BuildFromScratch/>
        <FeaturesSection/>
      </main>
    </div>
  );
};

export default Home;
