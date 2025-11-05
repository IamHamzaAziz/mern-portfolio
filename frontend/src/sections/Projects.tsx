import SingleProject from '../components/SingleProject'
import { LuFolderCode } from 'react-icons/lu'
import { motion } from 'framer-motion'
import projects from '../data/Projects'

const Projects = () => {
  return (
    <section className="py-20 section-border-bottom">
      <div className="container">
        <motion.h1
          className="section-heading text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LuFolderCode className="section-heading-icon" />
          <span>Key Projects</span>
        </motion.h1>

        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mt-4">
          Showcasing hands-on experience through practical and impactful
          projects
        </p>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mt-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]"
            >
              <SingleProject {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
