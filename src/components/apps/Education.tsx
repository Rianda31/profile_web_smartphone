import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { profileData } from '../../data/profileData';

const Education: React.FC = () => {
  const { theme } = useApp();

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 shadow-xl">
          <GraduationCap className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Education & Certifications</h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          My academic journey and professional development
        </p>
      </motion.div>

      {/* Education Timeline */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-6">Education</h3>
        <div className="space-y-6">
          {profileData.education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className={`relative ${
                theme === 'dark' 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-gray-50 border-gray-200'
              } border rounded-xl p-6`}
            >
              {edu.status === 'current' && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                  Current
                </div>
              )}
              
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  edu.status === 'current' ? 'bg-green-500' : 'bg-blue-500'
                }`}>
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className={`${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'} font-medium mb-2`}>
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>{edu.period}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Award className={`w-4 h-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>GPA: {edu.gpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h3 className="text-xl font-semibold mb-6">Certifications</h3>
        <div className="grid gap-4">
          {profileData.certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${
                theme === 'dark' 
                  ? 'bg-gradient-to-r from-slate-800 to-slate-700 border-slate-600' 
                  : 'bg-gradient-to-r from-white to-gray-50 border-gray-200'
              } border rounded-xl p-4 cursor-pointer hover:shadow-lg transition-all duration-300`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">{cert.badge}</div>
                <div className="flex-1">
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {cert.issuer} • {cert.date}
                  </p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  theme === 'dark' 
                    ? 'bg-blue-900 text-blue-300' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  Verified
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Learning Goals */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className={`mt-8 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50' 
            : 'bg-gradient-to-r from-purple-50 to-pink-50'
        } rounded-xl p-6`}
      >
        <h3 className="text-lg font-semibold mb-3">Currently Learning</h3>
        <div className="flex flex-wrap gap-2">
          {['Advanced Python', 'Machine Learning', 'Tableau', 'R Programming', 'Data Mining'].map((skill, index) => (
            <span
              key={index}
              className={`px-3 py-1 rounded-full text-sm ${
                theme === 'dark' 
                  ? 'bg-purple-800 text-purple-200' 
                  : 'bg-purple-100 text-purple-700'
              }`}
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;