import React, { useState } from 'react'
import { CodeXml, X, Info } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const SingleProject = ({ title, description, githubLink, techStack = [] }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -5 }}
        className='relative bg-[#1a1f2e] rounded-2xl shadow-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors'
      >
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-400 line-clamp-3 mb-4 text-sm">{description}</p>
          <button
            onClick={() => setIsExpanded(true)}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors w-full"
          >
            <Info className='h-5 text-bold' />
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
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#1a1f2e] rounded-2xl p-8 shadow-2xl border border-gray-800"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute top-4 right-4 p-2 hover:bg-[#2a2f3d] rounded-full transition-colors text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white">{title}</h2>
                <p className="text-gray-400 leading-relaxed">{description}</p>

                <div>
                  <h3 className="text-white text-lg mb-2">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-[#2a2f3d] text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  <CodeXml size={20} />
                  <span>View Source Code</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SingleProject