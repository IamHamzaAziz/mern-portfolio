import React from 'react';
import { motion } from 'framer-motion';
import { FaFileAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='w-full max-w-4xl mx-auto py-6 px-4 sm:px-6'>
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex items-center gap-2 sm:gap-4 px-4 py-3 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm shadow-sm">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/HamzaAziz_SoftwareEngineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors duration-200 text-white text-sm sm:text-base"
          >
            <FaFileAlt className="text-gray-300" />
            <span>Resume</span>
          </motion.a>

          {/* Divider */}
          <div className="h-6 w-px bg-gray-600 mx-1" />

          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/iamhamzaaziz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/IamHamzaAziz"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-2xl text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;