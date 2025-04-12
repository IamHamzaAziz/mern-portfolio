import React from 'react'
import { CodeXml } from 'lucide-react'

const SingleProject = ({ title, description, githubLink, className }) => {
  return (
    <div className={`h-[375px] sm:h-[470px] mx-2 w-[255px] sm:w-96 border-2 rounded-3xl hover:shadow-lg p-8 space-y-5 cursor-pointer flex flex-col justify-between ${className}`}>
      <div className='space-y-5'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p className='text-left sm:text-justify'>{description}</p>
      </div>

      <button className='mt-5 bg-gray-200 text-gray-900 w-full px-6 py-2 rounded-3xl'>
        <a href={githubLink} target='_blank' className='flex items-center justify-center space-x-2'>
          <CodeXml />
          <span>Source Code</span>
        </a>
      </button>
    </div>
  )
}

export default SingleProject