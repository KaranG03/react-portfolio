import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-800 py-8 shadow-inner">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
            &copy; {currentYear} Karan Gautam. All rights reserved.
          </p>
          
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-500">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500 fill-red-500" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;