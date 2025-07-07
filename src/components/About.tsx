import React from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6d6875] mb-6"
            style={{ fontFamily: 'Unkempt, cursive' }}
          >
            About Me
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            I'm a passionate Full Stack Developer with expertise in modern web technologies. 
            I love creating efficient, scalable solutions that make a real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Code className="text-[#6d6875] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#6d6875]">Frontend Development</h3>
              </div>
              <p className="text-white">
                Crafting beautiful, responsive user interfaces with React, TypeScript, and modern CSS frameworks.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Server className="text-[#6d6875] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#6d6875]">Backend Development</h3>
              </div>
              <p className="text-white">
                Building robust server-side applications with Node.js, Python, and cloud technologies.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Database className="text-[#6d6875] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#6d6875]">Database Management</h3>
              </div>
              <p className="text-white">
                Designing efficient database schemas and optimizing queries for better performance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex items-center mb-4">
                <Globe className="text-[#6d6875] mr-3" size={28} />
                <h3 className="text-xl font-bold text-[#6d6875]">DevOps & Deployment</h3>
              </div>
              <p className="text-white">
                Automating deployment processes and managing infrastructure with Docker and cloud platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;