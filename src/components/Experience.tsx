import React from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing DevOps best practices.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions LLC',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality solutions.',
      achievements: [
        'Delivered 15+ successful projects',
        'Reduced deployment time by 60%',
        'Implemented automated testing'
      ]
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudTech Systems',
      location: 'Seattle, WA',
      period: '2019 - 2020',
      description: 'Managed cloud infrastructure and automated deployment processes. Worked with Docker, Kubernetes, and AWS services to ensure reliable and scalable applications.',
      achievements: [
        'Automated 90% of deployment processes',
        'Reduced infrastructure costs by 30%',
        'Implemented monitoring solutions'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6d6875] mb-6"
            style={{ fontFamily: 'Unkempt, cursive' }}
          >
            Work Experience
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development and DevOps
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-8 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#6d6875] mb-2">{exp.title}</h3>
                  <p className="text-lg text-[#6d6875] font-semibold">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end mt-4 md:mt-0">
                  <div className="flex items-center text-[#6d6875] mb-2">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center text-[#6d6875]">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-white mb-6 leading-relaxed">{exp.description}</p>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-[#6d6875] flex items-center">
                  <Award size={20} className="mr-2" />
                  Key Achievements
                </h4>
                <ul className="space-y-1 ml-6">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-white flex items-start">
                      <span className="text-[#6d6875] mr-2">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;