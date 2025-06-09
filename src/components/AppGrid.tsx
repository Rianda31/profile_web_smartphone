import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Briefcase, Target, Mail, Sun, Moon } from 'lucide-react';
import { useApp, AppType } from '../contexts/AppContext';

interface AppIconProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  appType: AppType;
  delay: number;
}

const AppIcon: React.FC<AppIconProps> = ({ icon, label, color, appType, delay }) => {
  const { setCurrentApp } = useApp();

  const handleAppOpen = () => {
    setCurrentApp(appType);
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleAppOpen}
      className="flex flex-col items-center cursor-pointer group"
    >
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-2`}>
        {icon}
      </div>
      <span className="text-white text-xs font-medium text-center">{label}</span>
    </motion.div>
  );
};

const AppGrid: React.FC = () => {
  const { theme, toggleTheme } = useApp();

  const apps = [
    {
      icon: <User className="w-8 h-8 text-white" />,
      label: "About Me",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      appType: "about" as AppType
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      label: "Education",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      appType: "education" as AppType
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      label: "Projects",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      appType: "projects" as AppType
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      label: "Skills",
      color: "bg-gradient-to-br from-orange-500 to-orange-600",
      appType: "skills" as AppType
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      label: "Contact",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      appType: "contact" as AppType
    }
  ];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`min-h-screen ${
        theme === 'dark' 
          ? 'bg-black' 
          : 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'
      } relative overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center p-6 relative z-10">
        <div>
          <h1 className="text-white text-2xl font-bold">Apps</h1>
          <p className="text-white/70 text-sm">Tap to explore</p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30"
        >
          {theme === 'light' ? (
            <Moon className="w-6 h-6 text-white" />
          ) : (
            <Sun className="w-6 h-6 text-white" />
          )}
        </motion.button>
      </div>

      {/* App Grid */}
      <div className="flex-1 flex items-center justify-center p-6 relative z-10">
        <div className="grid grid-cols-2 gap-8 max-w-sm">
          {apps.map((app, index) => (
            <AppIcon
              key={app.appType}
              icon={app.icon}
              label={app.label}
              color={app.color}
              appType={app.appType}
              delay={0.1 + index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Bottom Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="w-32 h-1 bg-white/30 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default AppGrid;