import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';

const Blog = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: "Latest Articles",
      subtitle: "Sharing knowledge and insights about web development and technology",
      readMore: "Read More",
      viewAll: "View All Articles"
    },
    hi: {
      title: "नवीनतम लेख",
      subtitle: "वेब डेवलपमेंट और टेक्नोलॉजी के बारे में ज्ञान और insights साझा करना",
      readMore: "और पढ़ें",
      viewAll: "सभी लेख देखें"
    }
  };

  const blogPosts = [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn best practices for building large-scale React applications with performance optimization techniques.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      image: "📚",
      url: "#"
    },
    {
      id: 2,
      title: "AI Integration in Web Apps",
      excerpt: "How to integrate AI capabilities into your web applications using modern APIs and libraries.",
      date: "2024-01-10",
      readTime: "7 min read",
      category: "AI/ML",
      image: "🤖",
      url: "#"
    },
    {
      id: 3,
      title: "Modern CSS with Tailwind",
      excerpt: "Exploring advanced techniques and utilities in Tailwind CSS for modern web design.",
      date: "2024-01-05",
      readTime: "4 min read",
      category: "CSS",
      image: "🎨",
      url: "#"
    },
    {
      id: 4,
      title: "Node.js Performance Tips",
      excerpt: "Optimizing Node.js applications for better performance and scalability in production.",
      date: "2024-01-01",
      readTime: "6 min read",
      category: "Backend",
      image: "⚡",
      url: "#"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-gray-50 dark:bg-gray-800">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              {/* Blog Image */}
              <div className="h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-4xl">{post.image}</span>
              </div>

              <div className="p-6">
                {/* Category and Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Date and Read More */}
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                  <motion.a
                    href={post.url}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium text-sm"
                  >
                    {content[language].readMore} →
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://dev.to/shivam"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <span>{content[language].viewAll}</span>
            <span>→</span>
          </motion.a>

          {/* Platform Links */}
          <div className="flex justify-center space-x-6 mt-6">
            {[
              { name: "Dev.to", url: "https://dev.to", icon: "💻" },
              { name: "Medium", url: "https://medium.com", icon: "📝" },
              { name: "Hashnode", url: "https://hashnode.com", icon: "🌐" }
            ].map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-2xl text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                {platform.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;