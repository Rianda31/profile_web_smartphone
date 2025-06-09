import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink, Code, Star } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { profileData } from '../../data/profileData';

const Projects: React.FC = () => {
  const { theme } = useApp();

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 shadow-xl">
          <Briefcase className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">My Projects</h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          Showcasing my data analysis and development work
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="space-y-6">
        {profileData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={`${
              theme === 'dark' 
                ? 'bg-slate-800 border-slate-700' 
                : 'bg-white border-gray-200'
            } border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/30"
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.button>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Featured
                  </span>
                </div>
              </div>
              
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      theme === 'dark' 
                        ? 'bg-blue-900/50 text-blue-300 border border-blue-800' 
                        : 'bg-blue-50 text-blue-700 border border-blue-200'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>View Project</span>
                  </div>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg border ${
                    theme === 'dark' 
                      ? 'border-slate-600 text-gray-300 hover:bg-slate-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  } transition-colors duration-300`}
                >
                  <Code className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`mt-8 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-indigo-900/50 to-purple-900/50' 
            : 'bg-gradient-to-r from-indigo-50 to-purple-50'
        } rounded-xl p-6`}
      >
        <h3 className="text-lg font-semibold mb-4 text-center">Project Statistics</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-purple-600">3</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Completed Projects
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-indigo-600">6</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Technologies Used
            </div>
          </div>
          <div>
            <div className="text-2xl font-bold text-pink-600">100%</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Success Rate
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;