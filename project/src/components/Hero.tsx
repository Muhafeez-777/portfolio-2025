import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left Text */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#e5989b] to-[#b5838d] bg-clip-text text-transparent"
            style={{ fontFamily: 'Bonheur Royale, cursive' }}
          >
            Hello!
          </h2>
          <p className="text-2xl md:text-3xl text-white mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
            I'm
          </p>
          <h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#b5838d] via-[#6d6875] to-[#fff0f3] bg-clip-text text-transparent animate-gradient"
            style={{ fontFamily: 'Rubik Spray Paint, cursive' }}
          >
            Abdul Muhafeez
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed" style={{ fontFamily: 'Unkempt, cursive' }}>
            Full Stack Developer passionate about creating innovative solutions with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] text-[#6d6875] px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300 transform hover:scale-105">
              View My Work
            </button>
            <button className="border-2 border-[#6d6875] text-[#6d6875] px-8 py-3 rounded-full font-semibold hover:bg-[#6d6875] hover:text-white transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right Profile Photo */}
        <div className="flex justify-center order-1 md:order-2">
          <div className="relative">
            <div className="w-80 h-80 rounded-full bg-gradient-to-br from-[#ffb4a2] to-[#e5989b] p-1 animate-float">
              <div className="w-full h-full rounded-full bg-[#ffcdb2] flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Abdul Muhafeez"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;