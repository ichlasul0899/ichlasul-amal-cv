import React from 'react'
// import Slider from '../Slider';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Footer from '../Footer';
import HeroSection from '../HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;