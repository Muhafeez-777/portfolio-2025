import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const LetsConnect: React.FC = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/abdul-muhafeez',
      color: 'hover:text-blue-400'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/abdul-muhafeez',
      color: 'hover:text-gray-300'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:abdul.muhafeez@example.com',
      color: 'hover:text-red-400'
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#6d6875]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 
          className="text-4xl md:text-5xl font-bold text-white mb-8"
          style={{ fontFamily: 'Unkempt, cursive' }}
        >
          Let's Connect and Build Something Awesome Together!
        </h2>
        
        <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          I'm always excited to collaborate on new projects and discuss innovative ideas. 
          Let's connect and create something amazing!
        </p>
        
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex flex-col items-center space-y-2 p-6 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:animate-bounce ${link.color}`}
              >
                <Icon size={48} className="text-white group-hover:text-current transition-colors duration-300" />
                <span className="text-white font-semibold">{link.label}</span>
              </a>
            );
          })}
        </div>
        
        <div className="mt-12">
          <button className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] text-[#6d6875] px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[#ffb4a2]/30 transition-all duration-300 transform hover:scale-105">
            Start a Conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default LetsConnect;