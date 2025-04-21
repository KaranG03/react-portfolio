import { motion } from 'framer-motion';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    institution: "Vellore Institute of Technology",
    duration: "2022 - 2026",
    location: "Vellore, India",
    gpa: "8.9/10"
  }
];

const certifications = [
  {
    title: "Microsoft Azure AI-900 Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    link: "https://www.credly.com/badges/c50df6dc-5f6c-4a4a-9b90-da9ea562211e/linked_in_profile"
  },
  {
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "2025",
    link: "https://badgr.com/public/assertions/T1uxOvcVScOoeZaxMUrhww?identity__email=karangautam174@gmail.com"
  }
];

const Education = () => {
  return (
    <div className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education & Certifications
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <GraduationCap className="h-6 w-6" />
            Education
          </h3>
          
          <div className="space-y-8">
            {education.map((edu) => (
              <div key={edu.degree} className="card p-6">
                <h4 className="text-xl font-bold">{edu.degree}</h4>
                <p className="text-lg text-blue-600 dark:text-blue-400">{edu.field}</p>
                <p className="text-gray-800 dark:text-gray-200 font-medium mt-1">{edu.institution}</p>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-600 dark:text-gray-400 mt-3">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {edu.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-1" />
                    {edu.location}
                  </div>
                  {edu.gpa && (
                    <div className="flex items-center">
                      <Award size={16} className="mr-1" />
                      GPA: {edu.gpa}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Award className="h-6 w-6" />
            Certifications
          </h3>
          
          <div className="space-y-6">
            {certifications.map((cert) => (
              <motion.div 
                key={cert.title} 
                className="card p-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <h4 className="text-xl font-bold">{cert.title}</h4>
                  <p className="text-gray-800 dark:text-gray-200 font-medium mt-1">{cert.issuer}</p>
                  
                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-3">
                    <Calendar size={16} className="mr-1" />
                    {cert.date}
                  </div>
                  
                  <p className="text-blue-600 dark:text-blue-400 mt-2 text-sm font-medium">
                    View credential →
                  </p>
                </a>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8">
            <h3 className="text-lg font-bold mb-4">Online Platforms</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://bit.ly/leetcode-Kg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
              >
                <span className="font-medium">LeetCode</span>
              </a>
              
              <a 
                href="https://www.codechef.com/users/kg_2834" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center gap-2"
              >
                <span className="font-medium">CodeChef</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
