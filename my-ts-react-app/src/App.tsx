import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import About from './components/About';

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('home');

  const handleNavItemClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <div className="App">
      <Navbar activePage={activePage} onNavItemClick={handleNavItemClick} />
      {activePage === 'home' && <Home />}
      {activePage === 'portfolio' && <Portfolio />}
      {activePage === 'about' && <About />}
    </div>
  );
};

export default App;
