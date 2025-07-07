import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 88 },
    { name: 'Python', level: 85 },
    { name: 'Docker', level: 82 },
    { name: 'AWS', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 83 }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#6d6875] mb-6"
            style={{ fontFamily: 'Unkempt, cursive' }}
          >
            Skills & Technologies
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={skill.name} className="bg-gradient-to-r from-[#ffb4a2] to-[#e5989b] p-6 rounded-lg shadow-lg hover:shadow-[#6d6875]/20 transition-all duration-300">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-[#6d6875]">{skill.name}</h3>
                <span className="text-[#6d6875] font-bold">{skill.level}%</span>
              </div>
              <div className="w-full bg-[#fff0f3] rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-[#6d6875] to-[#b5838d] h-3 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;