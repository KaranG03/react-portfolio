import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  
  {
    title: "Software Developer Intern",
    company: "CODERSBRAIN TECHNOLOGY PVT. LTD.",
    date: "May'24 - July'24",
    location: "Remote",
    description: [
      "Collaborated with the Software Development Team to design and test scalable web applications during a focused internship program",
      "Gained hands-on experience in debugging, performance optimization, and applying software engineering best practices",
      "Worked with version control systems like Git to manage code changes and streamline team collaboration",
      "Demonstrated strong self-discipline and independence in completing tasks while aligning with team objectives and deadlines"
    ]
    
  }
];

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Work Experience
      </motion.h2>
      
      <motion.div 
        className="max-w-3xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {experiences.map((experience, index) => (
          <motion.div key={index} variants={item} className="mb-12 last:mb-0">
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Timeline connector */}
              <div className="hidden sm:flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                {index !== experiences.length - 1 && (
                  <div className="w-0.5 h-full bg-blue-200 dark:bg-blue-800 mt-2"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="card p-6 flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {experience.title}
                </h3>
                <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  {experience.company}
                </h4>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {experience.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {experience.location}
                  </div>
                </div>
                
                <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
