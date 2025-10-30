import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { heroContent } from '../../data/content';

const Hero = () => {
  const { language } = useLanguage();
  const content = heroContent[language];
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);

  const skills = [
    "React ⚡", "Node.js ⚙️", "Express 🚀", "MongoDB 🧠", "Python 🐍", "AI/ML 🤖"
  ];

  useEffect(() => {
    if (currentIndex < content.tagline.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + content.tagline[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, content.tagline]);



  useEffect(() => {
    const skillTimer = setInterval(() => {
      setCurrentSkillIndex(prev => (prev + 1) % skills.length);
    }, 2000);
  
    return () => clearInterval(skillTimer);
  }, [skills.length]); // ✅ fixed dependency
  


  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center justify-center relative z-10">
        <div className="text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            {/* 3D Avatar */}
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ duration: 0.6 }}
              className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-4xl font-bold shadow-2xl"
            >
              SM
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4"
            >
              {content.name}
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-4 h-12"
            >
              {skills[currentSkillIndex]}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 min-h-[60px] leading-relaxed"
            >
              {displayText}
              <span className="animate-pulse">|</span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {content.viewWork}
            </motion.button>

            {/* Currently Learning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 inline-flex items-center space-x-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {content.currentlyLearning} Next.js, TypeScript, AI APIs
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-300 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 dark:bg-gray-300 rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;