import React, { useState } from 'react'
import { LuLayers, LuCode, LuDatabase, LuWrench, LuServer, LuGrid3X3 } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const skills = {
    frontend: [
      { src: "react", name: "React" },
      { src: "nextjs", name: "Next.js" },
      { src: "ts", name: "TypeScript" },
      { src: "tailwind", name: "TailwindCSS" },
      { src: "jquery", name: "jQuery" },
    ],
    backend: [
      { src: "nodejs", name: "Node.js" },
      { src: "express", name: "Express" },
      { src: "laravel", name: "Laravel" },
    ],
    database: [
      { src: "mongodb", name: "MongoDB" },
      { src: "mysql", name: "MySQL" },
    ],
    tools: [
      { src: "git", name: "Git" },
      { src: "github", name: "GitHub" },
      { src: "figma", name: "Figma" },
    ]
  }

  const categories = [
    { id: 'all', name: 'All Skills', icon: LuGrid3X3 },
    { id: 'frontend', name: 'Frontend', icon: LuCode },
    { id: 'backend', name: 'Backend', icon: LuServer },
    { id: 'database', name: 'Database', icon: LuDatabase },
    { id: 'tools', name: 'Tools', icon: LuWrench },
  ]

  const getFilteredSkills = () => {
    if (activeCategory === 'all') {
      return Object.values(skills).flat()
    }
    return skills[activeCategory] || []
  }

  return (
    <div className='py-20 section-border-bottom'>
      <motion.h1
        className='section-heading'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <LuLayers className="section-heading-icon" />
        <span>Key Skills</span>
      </motion.h1>
      <p className="text-gray-400 text-center max-w-2xl mx-auto mt-4">
        Equipped with a strong foundation of modern tools and technologies
      </p>

      <div className="flex justify-center items-center gap-2 sm:gap-4 mt-12 flex-wrap px-4">
        {categories.map((category) => {
          const Icon = category.icon
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base rounded-full transition-all duration-300 ${activeCategory === category.id
                ? 'bg-[#ec4e20] text-white'
                : 'bg-gray-800 hover:bg-gray-700'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} className="sm:w-5 sm:h-5 w-4 h-4" />
              <span>{category.name}</span>
            </motion.button>
          )
        })}
      </div>

      <div className="max-w-6xl mx-auto mt-8 sm:mt-12 px-2 sm:px-4">
        <div className="flex flex-wrap justify-center gap-3 sm:gap-6">
          <AnimatePresence mode="wait">
            {getFilteredSkills().map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-gray-800 rounded-xl p-3 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-[140px] sm:w-[200px]"
              >
                <div className="flex flex-col items-center">
                  <motion.img
                    src={`https://skillicons.dev/icons?i=${skill.src}`}
                    alt={skill.name}
                    className="h-12 w-12 sm:h-16 sm:w-16 mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-110"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  />
                  <h3 className="text-sm sm:text-lg font-semibold text-white text-center">
                    {skill.name}
                  </h3>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-16 text-center px-4">
        <blockquote className="text-gray-400 italic text-lg sm:text-xl max-w-2xl mx-auto">
          "The only true wisdom is in knowing you know nothing."
        </blockquote>
        <p className="text-gray-500 mt-2">- Socrates</p>
        <p className="text-gray-300 font-bold mt-4 text-2xl">Always Learning</p>
      </div>
    </div>
  )
}

export default Skills