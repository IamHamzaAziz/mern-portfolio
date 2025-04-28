import React from 'react'
import SingleProject from '../components/SingleProject'
import { LuFolderCode } from 'react-icons/lu'

const Projects = () => {
  const projects = [
    {
      title: 'Real Estate Website',
      description: 'A comprehensive real estate platform featuring property listings with detailed information, OTP-based authentication, and an admin panel for managing properties and users. The platform includes rich text descriptions and a robust contact system.',
      githubLink: 'https://github.com/IamHamzaAziz/real-estate-website-mern',
      techStack: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Shadcn UI', 'Tailwind CSS']
    },
    {
      title: 'Blogging Website',
      description: 'A feature-rich blogging platform that allows users to create and manage their blog posts with a modern rich text editor. The platform includes secure user authentication and a clean, responsive interface.',
      githubLink: 'https://github.com/IamHamzaAziz/blogging-website-mern',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'React Quill', 'Tailwind CSS']
    },
    {
      title: 'Events Sharing Website',
      description: 'A dynamic events platform where users can discover, create, and manage events. Features include category-based filtering, search functionality, and a responsive design for optimal user experience.',
      githubLink: 'https://github.com/IamHamzaAziz/events-webapp-django-react',
      techStack: ['React', 'Django', 'Django REST Framework', 'PostgreSQL', 'Tailwind CSS']
    },
    {
      title: 'Recipe Sharing Website',
      description: 'A social platform for food enthusiasts to share and discover recipes. The application features image uploads, recipe filtering, and secure user authentication using UUIDs.',
      githubLink: 'https://github.com/IamHamzaAziz/flavor-quest-django',
      techStack: ['Django', 'PostgreSQL', 'Tailwind CSS', 'JavaScript']
    },
    {
      title: 'Expenses Tracking Website',
      description: 'A personal finance management tool that helps users track their income and expenses. Features include Google authentication, detailed transaction history, and comprehensive financial summaries.',
      githubLink: 'https://github.com/IamHamzaAziz/expense-tracker-react-firebase',
      techStack: ['React', 'TypeScript', 'Firebase', 'Firestore', 'Tailwind CSS']
    }
  ];

  return (
    <section className="py-20 section-border-bottom">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3 mb-12 text-white">
          <LuFolderCode className='section-heading-icon' />
          <span>Key Projects</span>
        </h1>

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