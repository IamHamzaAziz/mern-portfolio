import {
  LuGrid3X3,
  LuCode,
  LuServer,
  LuDatabase,
  LuWrench,
} from 'react-icons/lu'
import { ICategory, ISkillsData } from '../types/Skills'

const skills: ISkillsData = {
  frontend: [
    { src: 'nextjs', name: 'Next.js' },
    { src: 'react', name: 'React' },
    { src: 'ts', name: 'TypeScript' },
    { src: 'tailwind', name: 'TailwindCSS' },
    { src: 'jquery', name: 'jQuery' },
  ],
  backend: [
    { src: 'nodejs', name: 'Node.js' },
    { src: 'express', name: 'Express' },
    { src: 'laravel', name: 'Laravel' },
    { src: 'redis', name: 'Redis' },
  ],
  database: [
    { src: 'mongodb', name: 'MongoDB' },
    { src: 'mysql', name: 'MySQL' },
  ],
  tools: [
    { src: 'git', name: 'Git' },
    { src: 'github', name: 'GitHub' },
    { src: 'figma', name: 'Figma' },
  ],
}

const categories: ICategory[] = [
  { id: 'all', name: 'All Skills', icon: LuGrid3X3 },
  { id: 'frontend', name: 'Frontend', icon: LuCode },
  { id: 'backend', name: 'Backend', icon: LuServer },
  { id: 'database', name: 'Database', icon: LuDatabase },
  { id: 'tools', name: 'Tools', icon: LuWrench },
]

export { skills, categories }
