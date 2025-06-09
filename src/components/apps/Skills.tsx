import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Brain, Users } from 'lucide-react';
import { useApp } from '../../contexts/AppContext';
import { profileData } from '../../data/profileData';

interface SkillBarProps {
  name: string;
  level: number;
  delay: number;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, delay, color }) => {
  const { theme } = useApp();
  
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      className="mb-4"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-medium">{name}</span>
        <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {level}%
        </span>
      </div>
      <div className={`w-full h-2 rounded-full ${
        theme === 'dark' ? 'bg-slate-700' : 'bg-gray-200'
      }`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ delay: delay + 0.2, duration: 1, ease: "easeOut" }}
          className={`h-2 rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  const { theme } = useApp();

  return (
    <div className={`p-6 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-8"
      >
        <div className="bg-gradient-to-br from-orange-500 to-red-600 p-4 rounded-full w-20 h-20 mx-auto mb-4 shadow-xl">
          <Target className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Skills & Expertise</h2>
        <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
          My technical and soft skills portfolio
        </p>
      </motion.div>

      {/* Technical Skills */}
      <div className="mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="bg-blue-500 p-2 rounded-lg">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Technical Skills</h3>
        </motion.div>

        <div className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-gray-50 border-gray-200'
        } border rounded-xl p-6`}>
          {profileData.skills.technical.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.1 + index * 0.1}
              color="bg-gradient-to-r from-blue-500 to-purple-600"
            />
          ))}
        </div>
      </div>

      {/* Soft Skills */}
      <div className="mb-8">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-3 mb-6"
        >
          <div className="bg-green-500 p-2 rounded-lg">
            <Users className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold">Soft Skills</h3>
        </motion.div>

        <div className={`${
          theme === 'dark' 
            ? 'bg-slate-800 border-slate-700' 
            : 'bg-gray-50 border-gray-200'
        } border rounded-xl p-6`}>
          {profileData.skills.soft.map((skill, index) => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              delay={0.6 + index * 0.1}
              color="bg-gradient-to-r from-green-500 to-emerald-600"
            />
          ))}
        </div>
      </div>

      {/* Skills Categories */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
      >
        <div className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
            : 'bg-gradient-to-br from-purple-50 to-pink-50'
        } rounded-xl p-6 text-center`}>
          <Brain className="w-12 h-12 mx-auto mb-3 text-purple-600" />
          <h4 className="font-semibold mb-2">Data Analysis</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Statistical analysis, data visualization, and pattern recognition
          </p>
        </div>

        <div className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-br from-blue-900/50 to-indigo-900/50' 
            : 'bg-gradient-to-br from-blue-50 to-indigo-50'
        } rounded-xl p-6 text-center`}>
          <Target className="w-12 h-12 mx-auto mb-3 text-blue-600" />
          <h4 className="font-semibold mb-2">Business Intelligence</h4>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Dashboard creation, reporting, and strategic insights
          </p>
        </div>
      </motion.div>

      {/* Learning Progress */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        className={`${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-orange-900/50 to-red-900/50' 
            : 'bg-gradient-to-r from-orange-50 to-red-50'
        } rounded-xl p-6`}
      >
        <h3 className="text-lg font-semibold mb-4">Currently Improving</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">Advanced Python</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Machine Learning & AI
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600 mb-1">Cloud Computing</div>
            <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              AWS & Azure
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;