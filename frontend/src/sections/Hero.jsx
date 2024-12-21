import React from 'react'
import hero_image from '../assets/me.jpg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
    return (
        <div className='flex flex-col items-center mt-16 mx-2 pb-20 border-b border-gray-700 rounded-ee-[50px] rounded-es-[50px] sm:rounded-ee-[125px] sm:rounded-es-[125px]'>
            <img
                src={hero_image}
                alt="me"
                className="rounded-full h-48 w-48 border-2 border-gray-200"
            />

            <h1 className='text-3xl hidden sm:block font-bold text-center mt-8 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent'>
                Hi, I'm Hamza Aziz<br />
                <TypeAnimation
                    sequence={[
                        'I\'m a Full Stack Website Developer',
                        2000,
                        'I\'m a MERN Developer',
                        1000,
                        'I\'m a Laravel Developer',
                        1000,
                        'I\'m a Django Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <h1 className='text-xl block sm:hidden font-bold text-center mt-8 bg-gradient-to-r from-gray-200 to-gray-500 bg-clip-text text-transparent'>
                Hi, I'm Hamza Aziz<br />
                <TypeAnimation
                    sequence={[
                        'I\'m a MERN Developer',
                        1000,
                        'I\'m a Laravel Developer',
                        1000,
                        'I\'m a Django Developer',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                />
            </h1>

            <button className='mt-8 bg-gray-200 text-gray-900 px-6 py-2 rounded-3xl'>
                <a href="mailto:hamzaaziz086@gmail.com" target='_blank' className='flex items-center space-x-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail inline"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                    <span>Email Me</span>
                </a>
            </button>
        </div>
    )
}

export default Hero