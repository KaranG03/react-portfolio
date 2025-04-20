import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "Raj Estate",
    description: "A full-featured real estate platform allowing users to browse, filter, and inquire about properties. Includes admin dashboard for property management.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    live: "https://rajestate.site/",
    github: "#"
  },
  {
    title: "Engineering Calculator",
    description: "Specialized calculator application for engineering students and professionals, featuring complex calculations for various engineering disciplines.",
    image: "https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["JavaScript", "HTML/CSS", "Math.js", "Bootstrap"],
    
    github: "https://github.com/KaranG03/Engineering-calculator"
  },
  {
    title: "Dead Stock market Place",
    description: "a web application to manage colonies/Buildings, plots/Apartments, and customer records,streamlining property business operations.",
    image: "https://images.pexels.com/photos/7915495/pexels-photo-7915495.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    technologies: ["Unity", "C#", "3D Modeling", "AI Programming"],
    
    github: "https://github.com/KaranG03/deadboot"
  }
];

const Projects = () => {
  return (
    <div className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={project.title}
            className="card overflow-hidden h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
            
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                )}
                
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="text-center mt-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <a 
          href="https://github.com/KaranG03" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary inline-flex items-center gap-2"
        >
          <Github size={18} />
          See more on GitHub
        </a>
      </motion.div>
    </div>
  );
};

export default Projects;