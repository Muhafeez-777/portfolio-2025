import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects: React.FC = () => {
  const devopsProjects = [
    {
      title: 'Website Automation Upgrade',
      description: 'Automated deployment pipeline for seamless website updates and maintenance',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Jenkins', 'Docker', 'AWS', 'Bash']
    },
    {
      title: 'Docker in Docker',
      description: 'Advanced containerization setup for nested Docker environments',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Docker', 'Kubernetes', 'Linux', 'CI/CD']
    },
    {
      title: 'Apache Webserver in Docker',
      description: 'Containerized Apache web server with optimized configuration',
      image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Apache', 'Docker', 'Linux', 'Nginx']
    },
    {
      title: 'Menu-Based Docker Control',
      description: 'Interactive CLI tool for managing Docker containers and services',
      image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['Python', 'Docker API', 'CLI', 'Bash']
    }
  ];

  const fullstackProjects = [
    {
      title: 'Task-Based Website',
      description: 'Full-featured task management platform with 16 comprehensive features',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['React', 'Node.js', 'MongoDB', 'Express']
    },
    {
      title: 'Student Data Entry System',
      description: 'Comprehensive student management system with data analytics',
      image: 'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=400',
      tech: ['React', 'PostgreSQL', 'Node.js', 'Chart.js']
    }
  ];

  const ProjectCard: React.FC<{ project: any }> = ({ project }) => (
    <div className="bg-gradient-to-br from-[#ffb4a2] to-[#e5989b] rounded-lg overflow-hidden shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300 transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#6d6875] mb-3">{project.title}</h3>
        <p className="text-white mb-4 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span key={tech} className="bg-[#6d6875] text-white px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <button className="flex items-center space-x-2 bg-[#6d6875] text-white px-4 py-2 rounded-full hover:bg-[#b5838d] transition-colors duration-200">
            <ExternalLink size={16} />
            <span>Demo</span>
          </button>
          <button className="flex items-center space-x-2 border-2 border-[#6d6875] text-[#6d6875] px-4 py-2 rounded-full hover:bg-[#6d6875] hover:text-white transition-all duration-200">
            <Github size={16} />
            <span>Code</span>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6d6875] mb-6"
            style={{ fontFamily: 'Unkempt, cursive' }}
          >
            Featured Projects
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work in DevOps automation and full-stack development
          </p>
        </div>

        {/* DevOps Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#6d6875] mb-8 text-center">DevOps Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {devopsProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>

        {/* Full Stack Projects */}
        <div>
          <h3 className="text-2xl font-bold text-[#6d6875] mb-8 text-center">Full Stack Development</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {fullstackProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;