import React, { useState, useEffect } from 'react';
import { Download, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#ffcdb2]/95 backdrop-blur-md shadow-lg' : 'bg-[#ffcdb2]/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 
              className="text-2xl font-bold text-[#6d6875] hover:scale-105 transition-transform duration-300 cursor-pointer"
              style={{ fontFamily: 'Texturina, serif' }}
              onClick={() => scrollToSection('hero')}
            >
              Abdul Muhafeez
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#6d6875] hover:text-[#b5838d] px-3 py-2 text-sm font-medium transition-colors duration-200 hover:underline"
                  style={{ fontFamily: 'Bonheur Royale, cursive' }}
                >
                  {item.label}
                </button>
              ))}
              <button className="bg-[#6d6875] text-white px-4 py-2 rounded-full hover:bg-[#b5838d] transition-colors duration-200 flex items-center space-x-2">
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#6d6875] hover:text-[#b5838d] hover:bg-[#ffb4a2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#6d6875]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#ffcdb2]/95 backdrop-blur-md border-t border-[#e5989b]/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#6d6875] hover:text-[#b5838d] block px-3 py-2 text-base font-medium w-full text-left"
                style={{ fontFamily: 'Bonheur Royale, cursive' }}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-[#6d6875] text-white px-4 py-2 rounded-full hover:bg-[#b5838d] transition-colors duration-200 flex items-center space-x-2 mt-4">
              <Download size={16} />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;