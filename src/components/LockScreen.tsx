import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp, Sun, Cloud, User, Calendar, Clock } from 'lucide-react';
import { useDateTime } from '../hooks/useDateTime';
import { useApp } from '../contexts/AppContext';
import { profileData } from '../data/profileData';

const LockScreen: React.FC = () => {
  const { time, date, dayOfWeek } = useDateTime();
  const { setIsUnlocked, theme } = useApp();

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`min-h-screen relative overflow-hidden ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900' 
          : 'bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-300 rounded-full blur-3xl"></div>
      </div>

      {/* Status Bar */}
      <div className="flex justify-between items-center p-4 text-white relative z-10">
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full"></div>
          <div className="w-1 h-1 bg-white rounded-full opacity-50"></div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="text-sm font-medium">{time}</div>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-6 h-3 border border-white rounded-sm">
            <div className="w-4 h-1 bg-white rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6 relative z-10">
        {/* Time Widget */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-thin text-white mb-2">{time}</h1>
          <p className="text-xl text-white/90">{dayOfWeek}, {date}</p>
        </motion.div>

        {/* Weather Widget */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white/20 backdrop-blur-md rounded-2xl p-4 mb-8 border border-white/30"
        >
          <div className="flex items-center space-x-3">
            <Cloud className="w-8 h-8 text-white" />
            <div>
              <p className="text-white font-medium">Jakarta</p>
              <p className="text-white/80 text-sm">26°C • Partly Cloudy</p>
            </div>
          </div>
        </motion.div>

        {/* Profile Widget */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-white/20 backdrop-blur-md rounded-2xl p-6 mb-12 border border-white/30 text-center max-w-sm"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-white text-xl font-semibold mb-1">{profileData.greeting}</h2>
          <p className="text-white/90 text-sm">{profileData.subtitle}</p>
        </motion.div>

        {/* Unlock Prompt */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            onClick={handleUnlock}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/20 backdrop-blur-md rounded-full p-4 border border-white/30 mb-4"
          >
            <ChevronUp className="w-8 h-8 text-white" />
          </motion.button>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-white/80 text-sm"
          >
            Swipe up to explore
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white/50 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default LockScreen;