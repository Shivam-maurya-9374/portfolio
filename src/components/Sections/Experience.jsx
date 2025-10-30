import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { experienceData, educationData, certificationsData } from '../../data/experienceData';

const Experience = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      experience: "Work Experience",
      education: "Education",
      certifications: "Certifications",
      downloadAll: "Download All Certificates",
      present: "Present"
    },
    hi: {
      experience: "कार्य अनुभव",
      education: "शिक्षा",
      certifications: "प्रमाणपत्र",
      downloadAll: "सभी प्रमाणपत्र डाउनलोड करें",
      present: "वर्तमान"
    }
  };

  const ExperienceCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1.5"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {item.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              {item.company}
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium mt-2 sm:mt-0">
            {item.period}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {item.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm border border-gray-200 dark:border-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const EducationCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift border border-gray-200 dark:border-gray-700"
    >
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">
            {item.degree}
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold">
            {item.institution}
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm font-medium">
          {item.grade}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-2">
        {item.description}
      </p>
      
      <span className="text-sm text-gray-500 dark:text-gray-400">
        {item.period}
      </span>
    </motion.div>
  );

  const CertificationCard = ({ item, index }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 rounded-2xl p-6 text-center hover-lift border border-blue-200 dark:border-purple-800"
    >
      <div className="text-4xl mb-4">🏆</div>
      <h3 className="font-bold text-gray-800 dark:text-white mb-2">
        {item.name}
      </h3>
      <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
        {item.issuer}
      </p>
      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
        {item.date}
      </p>
      <motion.a
        href={item.url}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
      >
        {item.credential}
      </motion.a>
    </motion.div>
  );

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4 text-center">
            {content[language].experience}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          
          <div className="max-w-4xl mx-auto">
            {experienceData.map((item, index) => (
              <ExperienceCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Education & Certifications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
              {content[language].education}
            </h3>
            <div className="space-y-6">
              {educationData.map((item, index) => (
                <EducationCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
                {content[language].certifications}
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                {content[language].downloadAll}
              </motion.button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {certificationsData.map((item, index) => (
                <CertificationCard key={item.id} item={item} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;