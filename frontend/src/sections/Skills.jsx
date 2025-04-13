import React from 'react'
import { Layers } from 'lucide-react'

const Skills = () => {
  const skills = [
    { src: "react", name: "React" },
    { src: "nextjs", name: "Next.js" },
    { src: "ts", name: "TypeScript" },
    { src: "nodejs", name: "Node.js" },
    { src: "express", name: "Express" },
    { src: "laravel", name: "Laravel" },
    { src: "django", name: "Django" },
    { src: "tailwind", name: "TailwindCSS" },
    { src: "mongodb", name: "MongoDB" },
    { src: "mysql", name: "MySQL" },
    { src: "git", name: "Git" },
    { src: "github", name: "GitHub" },
    { src: "figma", name: "Figma" },
    { src: "bootstrap", name: "Bootstrap" },
  ]

  return (
    <div className='py-20 section-border-bottom'>
      <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
        <Layers className="section-heading-icon" />
        <span>Key Skills</span>
      </h1>

      <div className="w-3/4 md:w-1/2 mx-auto mt-14 flex flex-wrap justify-center items-center gap-4">
        {
          skills.map((icon, index) => (
            <div key={index} className="relative group cursor-pointer">
              <img
                src={`https://skillicons.dev/icons?i=${icon.src}`}
                alt={icon.name}
                className="h-16 w-16"
              />
              
              {/* Popover when user hovers over a skill */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-y-2 bg-gray-800 text-white text-sm font-medium px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-in-out pointer-events-none">
                {icon.name}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills