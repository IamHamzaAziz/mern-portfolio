import { useState } from 'react'
import { LuCodeXml, LuX, LuInfo } from 'react-icons/lu'
import { motion, AnimatePresence } from 'framer-motion'

interface SingleProjectProps {
  title: string;
  description: string;
  githubLink?: string;
  techStack: string[];
}

const SingleProject = ({ title, description, githubLink, techStack = [] }: SingleProjectProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className='relative bg-white/50 dark:bg-gray-800/50 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-colors backdrop-blur-sm'
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 text-sm">{description}</p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#ec4e20] text-white rounded-lg hover:bg-[#d84315] transition-colors w-full"
          >
            <LuInfo className='h-5 text-bold' />
            <span>View Details</span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setIsExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <LuX size={24} />
              </button>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>

                <div>
                  <h3 className="text-gray-900 dark:text-white text-lg mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#ec4e20] text-white rounded-lg hover:bg-[#d84315] transition-colors"
                  >
                    <LuCodeXml size={20} />
                    <span>View Source Code</span>
                  </a>   
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SingleProject