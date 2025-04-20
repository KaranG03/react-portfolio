import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Sun, Moon, Menu, X } from 'lucide-react';

import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center py-4">
            <ScrollLink 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-100} 
              duration={500}
              className="text-xl font-bold cursor-pointer"
            >
              Karan Gautam
            </ScrollLink>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className="font-medium hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                  activeClass="text-blue-600 dark:text-blue-400"
                >
                  {link.label}
                </ScrollLink>
              ))}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={toggleMenu}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Open menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`
            md:hidden bg-white dark:bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out
            ${isMenuOpen ? 'max-h-screen py-4' : 'max-h-0'}
          `}
        >
          <div className="container mx-auto px-4 space-y-4">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.id}
                to={link.id}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="block py-2 font-medium hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer transition-colors"
                activeClass="text-blue-600 dark:text-blue-400"
                onClick={closeMenu}
              >
                {link.label}
              </ScrollLink>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about" className="py-20">
          <About />
        </section>
        
        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-800">
          <Experience />
        </section>
        
        <section id="skills" className="py-20">
          <Skills />
        </section>
        
        <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-800">
          <Projects />
        </section>
        
        <section id="education" className="py-20">
          <Education />
        </section>
        
        <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;