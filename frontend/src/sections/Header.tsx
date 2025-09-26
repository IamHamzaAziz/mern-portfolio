import { motion } from 'framer-motion'
import { FaFileAlt, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa'
import { useThemeStore } from '../store/ThemeStore'

const Header = () => {
  const isDarkMode = useThemeStore(state => state.isDarkMode)
  const toggleTheme = useThemeStore(state => state.toggleTheme)

  return (
    <header className="w-full max-w-4xl mx-auto py-6 px-4 sm:px-6">
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <div className="flex items-center gap-2 sm:gap-4 px-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-sm">
          {/* Theme Toggle Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
          >
            {isDarkMode ? (
              <FaSun className="text-gray-300" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
            {/* <span>{isDarkMode ? 'Light' : 'Dark'}</span> */}
          </motion.button>

          {/* Divider */}
          <div className="h-6 w-px mx-1 bg-gray-300 dark:bg-gray-600" />

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/HamzaAziz_SoftwareEngineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full transition-colors duration-200 text-sm sm:text-base bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white"
          >
            <FaFileAlt className="text-gray-600 dark:text-gray-300" />
            <span>Resume</span>
          </motion.a>

          {/* Divider */}
          <div className="h-6 w-px mx-1 bg-gray-300 dark:bg-gray-600" />

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
            className="p-2 text-2xl text-gray-700 dark:text-gray-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </motion.a>
        </div>
      </motion.nav>
    </header>
  )
}

export default Header
