import { IExperienceItem } from '../types/Experience'
import { LuCode, LuServer, LuShield } from 'react-icons/lu'

const experiences: IExperienceItem[] = [
  {
    company: 'Axis Coding Solutions, Lahore',
    position: 'Software Engineer',
    duration: 'Nov 2024 – Present',
    coreTech: [
      { name: 'MERN Stack', description: 'Full-stack JavaScript solutions' },
      { name: 'Laravel', description: 'Robust PHP backend systems' },
    ],
    highlights: [
      {
        icon: <LuCode size={20} />,
        title: 'Full Stack Development',
        description: 'Building performant web applications using modern technologies',
      },
      {
        icon: <LuServer size={20} />,
        title: 'API Development',
        description: 'Designing and maintaining robust RESTful APIs',
      },
      {
        icon: <LuShield size={20} />,
        title: 'Security & Optimization',
        description: 'Implementing security best practices and performance enhancements',
      },
    ],
  },
]

export default experiences
