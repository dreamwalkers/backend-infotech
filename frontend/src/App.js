import React from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;