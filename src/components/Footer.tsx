import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6d6875] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 
              className="text-2xl font-bold text-white mb-4"
              style={{ fontFamily: 'Unkempt, cursive' }}
            >
              Abdul Muhafeez
            </h3>
            <p className="text-white/80 mb-4">
              Full Stack Developer passionate about creating innovative solutions
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={16} className="text-[#ffb4a2]" />
                <span className="text-white/80">abdul.muhafeez@example.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-white/80 hover:text-[#ffb4a2] transition-colors duration-200">About</a>
              <a href="#skills" className="block text-white/80 hover:text-[#ffb4a2] transition-colors duration-200">Skills</a>
              <a href="#projects" className="block text-white/80 hover:text-[#ffb4a2] transition-colors duration-200">Projects</a>
              <a href="#experience" className="block text-white/80 hover:text-[#ffb4a2] transition-colors duration-200">Experience</a>
              <a href="#contact" className="block text-white/80 hover:text-[#ffb4a2] transition-colors duration-200">Contact</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-4">Connect With Me</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a 
                href="https://linkedin.com/in/abdul-muhafeez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ffb4a2] transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://github.com/abdul-muhafeez" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/80 hover:text-[#ffb4a2] transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="mailto:abdul.muhafeez@example.com"
                className="text-white/80 hover:text-[#ffb4a2] transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/80 flex items-center justify-center space-x-2">
            <span>© 2024 Abdul Muhafeez. Made with</span>
            <Heart size={16} className="text-[#ffb4a2]" />
            <span>and passion for code.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;