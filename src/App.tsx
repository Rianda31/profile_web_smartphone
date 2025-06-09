import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { AppProvider, useApp } from './contexts/AppContext';
import LockScreen from './components/LockScreen';
import AppGrid from './components/AppGrid';
import AppModal from './components/AppModal';
import AboutMe from './components/apps/AboutMe';
import Education from './components/apps/Education';
import Projects from './components/apps/Projects';
import Skills from './components/apps/Skills';
import Contact from './components/apps/Contact';

const AppContent: React.FC = () => {
  const { isUnlocked, currentApp } = useApp();

  const getAppComponent = () => {
    switch (currentApp) {
      case 'about':
        return <AboutMe />;
      case 'education':
        return <Education />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return null;
    }
  };

  const getAppTitle = () => {
    switch (currentApp) {
      case 'about':
        return 'About Me';
      case 'education':
        return 'Education';
      case 'projects':
        return 'Projects';
      case 'skills':
        return 'Skills';
      case 'contact':
        return 'Contact';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {!isUnlocked ? (
          <LockScreen key="lockscreen" />
        ) : currentApp ? (
          <AppModal key={`app-${currentApp}`} title={getAppTitle()}>
            {getAppComponent()}
          </AppModal>
        ) : (
          <AppGrid key="appgrid" />
        )}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;