import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>
      
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="aspect-square relative overflow-hidden rounded-xl shadow-xl">
          <img 
         src="/portfolio pic.jpg" 
        alt="Profile" 
        className="w-full h-full object-cover" 
/>


          </div>
        </motion.div>
        
        <motion.div 
          className="md:w-2/3 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-lg">
            I'm Karan, a software engineer with a passion for creating efficient and scalable applications. 
            With a strong foundation in both front-end and back-end technologies, I specialize in building 
            full-stack web applications that deliver exceptional user experiences.
          </p>
          
          <p className="text-lg">
            My journey in software development began during my engineering studies, where I discovered my 
            passion for solving complex problems through code. Since then, I've been continuously expanding 
            my skills by working on diverse projects and staying updated with the latest industry trends.
          </p>
          
          <p className="text-lg">
            I believe in writing clean, maintainable code and have experience working with modern JavaScript frameworks, 
            RESTful APIs, and database systems. My goal is to leverage technology to create innovative solutions that 
            make a positive impact.
          </p>
          
          <div className="pt-4">
          <a 
  href="/resume.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="btn btn-primary inline-block"
>
  Download Resume
</a>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;