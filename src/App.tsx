import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import LetsConnect from './components/LetsConnect';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <div className="min-h-screen bg-[#ffcdb2] relative overflow-x-hidden">
      <BackgroundAnimation />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <LetsConnect />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;