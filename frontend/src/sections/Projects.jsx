import React from 'react'
import SingleProject from '../components/SingleProject'
import { LuFolderCode } from 'react-icons/lu'
import { motion } from 'framer-motion'

const Projects = () => {
  const projects = [
    {
      title: 'SkyEstate',
      description: 'A comprehensive real estate website featuring property listings with images uploaded on Cloudinary, details, filtering, saving property options, OTP-based authentication, admin panel for managing properties, blogs and users. The platform includes rich text descriptions and a robust contact system.',
      githubLink: 'https://github.com/IamHamzaAziz/real-estate-website-mern',
      techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Shadcn UI', 'Tailwind CSS']
    },
    {
      title: 'Expensy',
      description: 'A personal finance management website that helps users manage and track their income and expenses. Features include Google authentication, transaction history and comprehensive financial summaries.',
      githubLink: 'https://github.com/IamHamzaAziz/expense-tracker-react-firebase',
      techStack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS']
    },
    {
      title: 'AutoDealers Club',
      description: 'Developed backend for an automobile mobile app devloped for dealers and brokers. Implemented JWT authentication, OTP based password reset, added complex filtering and enabled users to reserve vehicles for 48 hours.',
      techStack: ['Laravel', 'MySQL', 'REST APIs']
    },
    {
      title: 'Blogging Platform',
      description: 'A feature-rich blogging website that allows users to create and manage their blog posts with a modern rich text editor. The platform includes secure user authentication and a clean, responsive interface.',
      githubLink: 'https://github.com/IamHamzaAziz/blogging-website-mern',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'React Quill', 'Tailwind CSS']
    },
    {
      title: 'Flavor Quest',
      description: 'A social platform for food enthusiasts to share and discover recipes. The application features image uploads, recipe filtering, saving recipes, secure user authentication and uses UUIDs for enhanced security.',
      githubLink: 'https://github.com/IamHamzaAziz/flavor-quest-django',
      techStack: ['Django', 'Tailwind CSS', 'JavaScript']
    }
  ];

  return (
    <section className="py-20 section-border-bottom">
      <div className="container mx-auto px-4">
        <motion.h1
          className='section-heading mb-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LuFolderCode className='section-heading-icon' />
          <span>Key Projects</span>
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] min-w-[280px] max-w-[400px]">
              <SingleProject {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects