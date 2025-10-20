import { useState } from 'react'
import { LuSchool, LuCalendar, LuUniversity } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { IEducation } from '../types/Education'

const schools: IEducation[] = [
  {
    name: 'Lahore Garrison University',
    degree: 'Bachelor of Science in Computer Science',
    year: '2025',
  },
  {
    name: 'Government College University Lahore',
    degree: 'FSC Pre Engineering',
    year: '2021',
  },
  {
    name: 'Garrison Academy for Boys Lahore',
    degree: 'Matric with Computer Science',
    year: '2019',
  },
]

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="py-20 section-border-bottom overflow-hidden">
      <div className="container">
        <motion.h1
          className="section-heading text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LuUniversity className="section-heading-icon" />
          <span className="hidden sm:inline">Educational Journey</span>
          <span className="sm:hidden">Education</span>
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4">
          A glimpse into my continuous journey of knowledge and growth
        </p>

        <div className="flex flex-col lg:flex-row gap-6 mt-12">
          <div className="lg:w-1/3 xl:w-1/4 relative">
            <div className="hidden lg:block absolute left-8 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700 -z-10"></div>
            <div className="flex lg:flex-col gap-3 overflow-x-auto pb-4 lg:pb-0 custom-scrollbar">
              {schools.map((school, index) => (
                <motion.button
                  key={index}
                  className={`px-5 py-3 rounded-xl text-left transition-all flex-shrink-0 lg:flex-shrink ${
                    activeIndex === index
                      ? 'bg-[#ec4e20] text-white shadow-md'
                      : 'bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm text-gray-900 dark:text-gray-100'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div>
                    <div className="text-sm font-medium line-clamp-2">
                      {school.degree}
                    </div>
                    <div
                      className={`text-xs mt-1 ${
                        activeIndex === index
                          ? 'text-white/80'
                          : 'text-gray-600 dark:text-gray-400'
                      }`}
                    >
                      {school.year}
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3 xl:w-3/4">
            <motion.div
              className="relative bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 h-full backdrop-blur-sm"
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#ec4e20] to-[#ff8c5a]"></div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-[#ec4e20] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                    <LuSchool className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                      {schools[activeIndex].name}
                    </h3>
                  </div>
                </div>

                <div>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4">
                    {schools[activeIndex].degree}
                  </p>

                  <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                    <LuCalendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                    <span className="font-medium">
                      {schools[activeIndex].year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#ec4e20] opacity-10 rounded-tl-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
