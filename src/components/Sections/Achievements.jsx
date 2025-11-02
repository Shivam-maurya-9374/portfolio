import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Achievements = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Achievements & Awards",
      subtitle: "Recognition and milestones in my development journey"
    },
    hi: {
      title: "उपलब्धियाँ और पुरस्कार",
      subtitle: "मेरे development journey में मान्यता और milestones"
    }
  };

  const achievements = [
    {
      id: 1,
      title: "Hackathon Winner",
      description: "First prize in national level coding competition",
      year: "2023",
      icon: "🏆",
      category: "Competition"
    },
    {
      id: 2,
      title: "Open Source Contributor",
      description: "Active contributor to popular open source projects",
      year: "2023",
      icon: "🌐",
      category: "Community"
    },
    {
      id: 3,
      title: "Best Project Award",
      description: "Recognized for innovative AI project implementation",
      year: "2022",
      icon: "🚀",
      category: "Project"
    },
    {
      id: 4,
      title: "Tech Speaker",
      description: "Invited speaker at developer conferences",
      year: "2022",
      icon: "🎤",
      category: "Speaking"
    }
  ];

  const stats = [
    { number: "10+", label: { en: "Projects Completed", hi: "पूर्ण प्रोजेक्ट्स" } },
    { number: "10K+", label: { en: "Lines of Code", hi: "कोड की लाइनें" } },
    { number: "99%", label: { en: "Client Satisfaction", hi: "ग्राहक संतुष्टि" } },
    { number: "0", label: { en: "Years Experience", hi: "वर्षों का अनुभव" } }
  ];

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {content[language].title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content[language].subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-2xl text-center shadow-lg"
            >
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-100 text-sm">{stat.label[language]}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="text-4xl"
                >
                  {achievement.icon}
                </motion.div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {achievement.title}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">
                    {achievement.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm">
                    {achievement.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Recognition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-purple-900 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Committed to staying updated with the latest technologies and best practices in web development. 
              Regularly participating in coding challenges, contributing to open source, and expanding skillset.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;