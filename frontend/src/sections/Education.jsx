import React, { useState } from 'react'
import { School } from 'lucide-react'

const schools = [
    {
        name: "Lahore Garrison University",
        degree: "Bachelor of Science in Computer Science",
        year: "2021 - 2025"
    },
    {
        name: "Government College University Lahore",
        degree: "FSC Pre Engineering",
        year: "2019 - 2021"
    },
    {
        name: "Garrison Academy for Boys Lahore",
        degree: "Matric With Computer Science",
        year: "2019"
    }
]

const Education = () => {
    const [hoveredIndex, setHoveredIndex] = useState()

    return (
        <div className='py-20 section-border-bottom'>
            <div className="container mx-auto px-10">
                <h1 className='text-2xl sm:text-4xl font-bold flex justify-center items-center space-x-3'>
                    <School className="h-7 w-7 sm:h-10 sm:w-10" />
                    <span className='hidden sm:block'>Educational Journey</span>
                    <span className='block sm:hidden'>Education</span>
                </h1>
                <div className="space-y-5 mt-14">
                    {schools.map((school, index) => (
                        <div
                            key={index}
                            className="rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl border border-gray-700 cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin w-6 h-6 mr-2 hidden sm:block"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                                    <h3 className="text-xl font-semibold">{school.name}</h3>
                                </div>
                                <p className="mb-4">{school.degree}</p>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar w-4 h-4 mr-2"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg>
                                    <span>{school.year}</span>
                                </div>
                            </div>
                            <div
                                className="h-2 bg-gray-700 transition-all duration-300 ease-in-out"
                                style={{ width: hoveredIndex === index ? '100%' : '0%' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education