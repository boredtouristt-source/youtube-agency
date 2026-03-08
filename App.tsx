import React from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import Brands from './components/Sections/Brands';
import Services from './components/Sections/Services';
import Work from './components/Sections/Work';
import Philosophy from './components/Sections/Philosophy';
import Process from './components/Sections/Process';
import CTA from './components/Sections/CTA';
import Footer from './components/Layout/Footer';

function App() {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-[#f3fc46] selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Brands />
        <Philosophy />
        <Services />
        <Process />
        <Work />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;