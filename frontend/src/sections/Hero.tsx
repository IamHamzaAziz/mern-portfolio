import my_image from '../assets/me.jpg';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { LuMail } from 'react-icons/lu';

const Hero = () => {
    return (
        <section className="flex flex-col items-center pt-16 pb-20 px-4 sm:px-6 lg:px-8 section-border-bottom overflow-x-hidden text-gray-900 dark:text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center max-w-4xl mx-auto"
            >
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mb-8 relative group"
                >
                    <img
                        src={my_image}
                        alt="Hamza Aziz"
                        className="rounded-full h-48 w-48 border-4 border-[#ec4e20] object-cover transition-all duration-300"
                    />
                </motion.div>

                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-4'>
                    Hi, I'm <span className='text-[#ec4e20]'>Hamza Aziz</span>
                </h1>
                
                <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 h-12">
                    <TypeAnimation
                        sequence={[
                            'Software Engineer',
                            2000,
                            'MERN Stack Developer',
                            1000,
                            'Laravel Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{ display: 'inline-block' }}
                        repeat={Infinity}
                    />
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-2xl">
                    I develop digital experiences with modern technologies and clean code
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 px-8 py-3 rounded-full font-medium shadow-lg transition-all duration-300 bg-gray-200 text-gray-900 hover:bg-[#ec4e20] hover:text-white dark:bg-gray-800 dark:text-white dark:hover:bg-[#ec4e20]"
                >
                    <a href="mailto:hamzaaziz086@gmail.com" target='_blank' rel="noopener noreferrer" className='flex items-center space-x-2'>
                        <LuMail size={24} />
                        <span>Get In Touch</span>
                    </a>
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Hero;