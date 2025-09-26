import SingleProject from '../components/SingleProject'
import { LuFolderCode } from 'react-icons/lu'
import { motion } from 'framer-motion'
import { ProjectInterface } from '../types/Project'

const Projects = () => {
  const projects: ProjectInterface[] = [
    {
      title: 'SkyEstate',
      description:
        'A comprehensive real estate website featuring property listings with images uploaded on Cloudinary, details, filtering, saving property options, OTP-based authentication, admin panel for managing properties, blogs and users. The platform includes rich text descriptions and a robust contact system.',
      githubLink: 'https://github.com/IamHamzaAziz/real-estate-website-mern',
      techStack: [
        'React',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'Express',
        'Shadcn UI',
        'Tailwind CSS',
      ],
    },
    {
      title: 'Legend EHR',
      description:
        'An advanced EHR system with Sequelize ORM APIs, supporting patient reports, insurance workflows and EMR management. Integrated UDI and barcode systems for streamlined medical device tracking and compliance.',
      techStack: ['Express', 'Node.js', 'MySQL', 'Sequelize'],
    },
    {
      title: 'Expensy',
      description:
        'A personal finance management website that helps users manage and track their income and expenses. Features include Google authentication, transaction history and comprehensive financial summaries.',
      githubLink:
        'https://github.com/IamHamzaAziz/expense-tracker-react-firebase',
      techStack: [
        'React',
        'TypeScript',
        'Firebase',
        'Firestore',
        'Tailwind CSS',
      ],
    },
    {
      title: 'AutoDealers Club',
      description:
        'Developed backend for an automobile mobile app developed for dealers and brokers. Implemented JWT authentication, OTP based password reset, added complex filtering and enabled users to reserve vehicles for 48 hours.',
      techStack: ['Laravel', 'MySQL', 'REST APIs'],
    },
    {
      title: 'Flavor Quest',
      description:
        'A social platform for food enthusiasts to share and discover recipes. The application features image uploads, recipe filtering, saving recipes, secure user authentication and uses UUIDs for enhanced security.',
      githubLink: 'https://github.com/IamHamzaAziz/flavor-quest-django',
      techStack: ['Django', 'Tailwind CSS', 'SQLite'],
    },
  ]

  return (
    <section className="py-20 section-border-bottom">
      <div className="container mx-auto px-4">
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
