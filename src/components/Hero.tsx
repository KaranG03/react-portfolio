import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          {/* Background pattern/design can be added here */}
        </div>
      </div>
      
      <div className="container relative z-10 px-6 md:px-12 space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <h1 className="font-extrabold text-transparent text-5xl sm:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Karan Gautam
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300">
            Full Stack Developer
          </h2>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-600 dark:text-gray-400"
        >
          Passionate software engineer specializing in building exceptional digital experiences.
          Focused on creating innovative solutions with modern technologies.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center space-x-4"
        >
          <a 
            href="https://github.com/KaranG03" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/karan-gautam2834/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
          <a 
            href="mailto:karangautam174@gmail.com" 
            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            aria-label="Email contact"
          >
            <Mail className="h-6 w-6 text-gray-700 dark:text-gray-300" />
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8"
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={800}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
          >
            Learn more about me
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;