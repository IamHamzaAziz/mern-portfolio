import React from 'react';
import { LuBriefcase, LuCalendar, LuCode, LuServer, LuShield, LuLayers, LuPuzzle } from "react-icons/lu";
import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Axis Coding Solutions, Lahore",
    position: "Software Engineer",
    duration: "Nov 2024 – Present",
    coreTech: [
      { name: "MERN Stack", description: "Full-stack JavaScript solutions" },
      { name: "Laravel", description: "Robust PHP backend systems" }
    ],
    highlights: [
      {
        icon: <LuCode size={20} />,
        title: "Full Stack Development",
        description: "Building performant web applications using modern technologies"
      },
      {
        icon: <LuServer size={20} />,
        title: "API Development",
        description: "Designing and maintaining robust RESTful APIs"
      },
      {
        icon: <LuShield size={20} />,
        title: "Security & Optimization",
        description: "Implementing security best practices and performance enhancements"
      }
    ]
  }
];

const Experience = () => {
  return (
    <div className='py-20 section-border-bottom' id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <motion.h1
            className='section-heading'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <LuBriefcase className="section-heading-icon" />
            <span>
              Experience
            </span>
          </motion.h1>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
            Building solutions with cutting-edge technologies and modern practices
          </p>
        </div>

        <div className="mt-12 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{exp.position}</h3>
                    <h4 className="text-lg sm:text-xl text-[#ec4e20] mt-1">{exp.company}</h4>
                  </div>
                  <div className="flex items-center text-sm sm:text-base text-gray-400 bg-gray-700/50 px-3 py-1.5 rounded-full">
                    <LuCalendar className="mr-2" size={16} />
                    {exp.duration}
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-4 text-gray-300">
                    <LuLayers size={18} />
                    <h4 className="font-medium">Core Technologies</h4>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {exp.coreTech.map((tech, i) => (
                      <div key={i} className="bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                        <h5 className="font-semibold text-[#ec4e20]">{tech.name}</h5>
                        <p className="text-sm text-gray-400 mt-1">{tech.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <div className="flex items-center gap-2 mb-4 text-gray-300">
                    <LuPuzzle size={18} />
                    <h4 className="font-medium">Key Contributions</h4>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {exp.highlights.map((item, i) => (
                      <div
                        key={i}
                        className="group relative bg-gray-800 p-5 rounded-lg border border-gray-700 hover:border-[#ec4e20]/30 transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="text-[#ec4e20]">
                            {item.icon}
                          </div>
                          <h4 className="font-semibold">{item.title}</h4>
                        </div>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-gray-400 italic text-lg sm:text-xl max-w-2xl mx-auto">
            "The expert in anything was once a beginner."
          </blockquote>
          <p className="text-gray-500 mt-2">- Helen Hayes</p>
          <p className="text-gray-300 font-bold mt-4 text-xl sm:text-2xl">
            Continuously growing through challenges
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience