import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/Slider';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* Skip Dulu Slider nya karena menggunakan jQuery */}
      <Slider />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
