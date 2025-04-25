import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import BrandStory from '../components/home/BrandStory';
import LocationCTA from '../components/home/LocationCTA';
import Values from '../components/home/Values';

export const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle scroll to section when navigating from another page
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <Hero />
      <BrandStory />
      <LocationCTA />
      <Values />
    </>
  );
};