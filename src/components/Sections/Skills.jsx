import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { skillsContent } from '../../data/content';
import { skillsData } from '../../data/skillsData';

const Skills = () => {
  const { language } = useLanguage();
  const content = skillsContent[language];

  const SkillCategory = ({ title, skills, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover-lift"
    >
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
        <span className="mr-2">{skills[0]?.icon}</span>
        {title}
      </h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: delay + index * 0.1 + 0.3 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full relative"
              >
                <motion.div
                  animate={{
                    boxShadow: [
                      '0 0 0px rgba(59, 130, 246, 0)',
                      '0 0 10px rgba(59, 130, 246, 0.5)',
                      '0 0 0px rgba(59, 130, 246, 0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                  className="absolute inset-0 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {content.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {content.subtitle}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title={content.categories.frontend}
            skills={skillsData.frontend}
            delay={0.1}
          />
          <SkillCategory
            title={content.categories.backend}
            skills={skillsData.backend}
            delay={0.2}
          />
          <SkillCategory
            title={content.categories.database}
            skills={skillsData.database}
            delay={0.3}
          />
          <SkillCategory
            title={content.categories.tools}
            skills={skillsData.tools}
            delay={0.4}
          />
          <SkillCategory
            title={content.categories.ai_ml}
            skills={skillsData.ai_ml}
            delay={0.5}
          />
        </div>

        {/* Additional Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Why Choose Me?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "⚡",
                  title: "Fast Development",
                  description: "Quick prototyping and efficient coding practices"
                },
                {
                  icon: "🔧",
                  title: "Problem Solving",
                  description: "Strong analytical skills and creative solutions"
                },
                {
                  icon: "🚀",
                  title: "Modern Stack",
                  description: "Up-to-date with latest technologies and trends"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;