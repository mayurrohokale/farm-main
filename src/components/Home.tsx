import React from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Products from './Products';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Products />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;