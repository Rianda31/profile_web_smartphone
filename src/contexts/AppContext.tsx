import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type AppType = 'about' | 'education' | 'projects' | 'skills' | 'contact';

interface AppContextType {
  currentApp: AppType | null;
  setCurrentApp: (app: AppType | null) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  isUnlocked: boolean;
  setIsUnlocked: (unlocked: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentApp, setCurrentApp] = useState<AppType | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isUnlocked, setIsUnlocked] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <AppContext.Provider value={{
      currentApp,
      setCurrentApp,
      theme,
      toggleTheme,
      isUnlocked,
      setIsUnlocked
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};