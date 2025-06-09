import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, Calendar, GraduationCap, Award } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { profileData } from '../../data/profileData';

const AboutMe: React.FC = () => {
  const { theme } = useApp();

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Profile Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="text-center mb-8"
      >
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
          <User className="w-16 h-16 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
        <p className={`text-lg ${theme === 'dark' ? 'text-blue-300' : 'text-blue-600'} mb-4`}>
          {profileData.title}
        </p>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed max-w-md mx-auto`}>
          {profileData.description}
        </p>
      </motion.div>

      {/* Info Cards */}
      <div className="space-y-4 mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-gray-50 border-gray-200'
          } border rounded-xl p-4 flex items-center space-x-4`}
        >
          <div className="bg-green-500 p-3 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Current Studies</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {profileData.semester} - {profileData.major}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {profileData.university}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-gray-50 border-gray-200'
          } border rounded-xl p-4 flex items-center space-x-4`}
        >
          <div className="bg-blue-500 p-3 rounded-lg">
            <Award className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Academic Performance</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Current GPA: {profileData.gpa}/4.00
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className={`${
            theme === 'dark' 
              ? 'bg-slate-800 border-slate-700' 
              : 'bg-gray-50 border-gray-200'
          } border rounded-xl p-4 flex items-center space-x-4`}
        >
          <div className="bg-purple-500 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold">Previous Education</h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {profileData.previousEducation.major}
            </p>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {profileData.previousEducation.school}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Journey Section */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-blue-900/50 to-purple-900/50' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50'
        } rounded-xl p-6`}
      >
        <h3 className="text-xl font-bold mb-4">My Journey</h3>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
          From understanding financial numbers in accounting to uncovering insights in data - 
          my journey has been about finding patterns and telling stories through numbers. 
          Currently pursuing my degree in Information Technology, I'm combining my analytical 
          background with modern data science techniques to become a skilled data analyst.
        </p>
      </motion.div>
    </div>
  );
};

export default AboutMe;