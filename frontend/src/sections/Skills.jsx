import React from 'react'
import SkillsAccordian from '../components/SkillsAccordian'

const Skills = () => {
  return (
    <div className='py-20 border-b border-gray-700 rounded-ee-[50px] rounded-es-[50px] sm:rounded-ee-[125px] sm:rounded-es-[125px]'>
        <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-library h-7 w-7 sm:h-10 sm:w-10"><path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/></svg>
            <span>Key Skills</span>
        </h1>

        <SkillsAccordian />
    </div>
  )
}

export default Skills