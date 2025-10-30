import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      madeWith: "Made with ❤️ using React & Tailwind CSS",
      rights: "All rights reserved.",
      connect: "Let's connect"
    },
    hi: {
      madeWith: "React & Tailwind CSS के साथ ❤️ से बनाया गया",
      rights: "सर्वाधिकार सुरक्षित।",
      connect: "आइए जुड़ें"
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com", icon: "🐙" },
    { name: "LinkedIn", url: "https://linkedin.com", icon: "💼" },
    { name: "Twitter", url: "https://twitter.com", icon: "🐦" },
    { name: "Email", url: "mailto:hello@shivam.com", icon: "✉️" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold mb-4"
          >
            {content[language].connect}
          </motion.h3>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ delay: index * 0.1 }}
                className="text-2xl hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400"
          >
            © 2024 Shivam Maurya. {content[language].rights}
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm mt-2"
          >
            {content[language].madeWith}
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;