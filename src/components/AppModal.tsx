import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X } from 'lucide-react';
import { useApp } from '../contexts/AppContext';

interface AppModalProps {
  children: React.ReactNode;
  title: string;
}

const AppModal: React.FC<AppModalProps> = ({ children, title }) => {
  const { setCurrentApp, theme } = useApp();

  const handleClose = () => {
    setCurrentApp(null);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`fixed inset-0 z-50 ${
          theme === 'dark'
            ? 'bg-slate-900'
            : 'bg-white'
        } overflow-hidden`}
      >
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b ${
          theme === 'dark' 
            ? 'border-slate-700 bg-slate-900/95' 
            : 'border-gray-200 bg-white/95'
        } backdrop-blur-md sticky top-0 z-10`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className={`p-2 rounded-full ${
              theme === 'dark'
                ? 'bg-slate-800 hover:bg-slate-700'
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}
          >
            <ArrowLeft className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
          </motion.button>
          
          <h1 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h1>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleClose}
            className={`p-2 rounded-full ${
              theme === 'dark'
                ? 'bg-slate-800 hover:bg-slate-700'
                : 'bg-gray-100 hover:bg-gray-200'
            } transition-colors`}
          >
            <X className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`} />
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AppModal;