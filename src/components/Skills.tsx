import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    technologies: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React", level: 80 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Next.js", level: 65 }
    ]
  },
  {
    category: "Backend",
    technologies: [
      { name: "Node.js", level: 80 },
      { name: "Express", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "PostgreSQL", level: 65 },
      { name: "Python", level: 60 }
    ]
  },
  {
    category: "Tools & Others",
    technologies: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Unity", level: 75 },
      { name: "AWS", level: 60 },
      { name: "Agile/Scrum", level: 70 }
    ]
  }
];

const Skills = () => {
  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: (custom: number) => ({
      opacity: 1,
      width: `${custom}%`,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3
      }
    })
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
        Skills & Technologies
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((category, index) => (
          <motion.div
            key={category.category}
            className="card p-6"
            variants={categoryVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">
              {category.category}
            </h3>
            
            <div className="space-y-5">
              {category.technologies.map((tech) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">{tech.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      custom={tech.level}
                      variants={skillVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;