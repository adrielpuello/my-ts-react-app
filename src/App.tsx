import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';

import './App.css';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');
  const [isDarkModeEnabled, setIsDarkModeEnabled] = useState<boolean>(true); // Initialize dark mode state

  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };

  const handleDarkModeToggle = () => {
    setIsDarkModeEnabled((prevMode) => !prevMode); // Toggle dark mode state
  };

  return (
    <div className="main-container">
      <div className={`App ${isDarkModeEnabled ? 'dark-mode-app' : ''}`}>
        <Navbar activePage={activePage} 
        onNavItemClick={handleNavItemClick} 
        onDarkModeToggle={handleDarkModeToggle}
        isDarkModeEnabled={isDarkModeEnabled}
        />
        {activePage === 'home' && <Home />}
        {activePage === 'portfolio' && <Portfolio />}
        {activePage === 'about' && <About />}
      </div>
    </div>
    
    
  );
};

export default App;
