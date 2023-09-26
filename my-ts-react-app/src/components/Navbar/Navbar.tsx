import React from 'react';

interface NavbarProps {
  activePage: string;
  onNavItemClick: (page: string) => void;
  onDarkModeToggle: () => void;
  isDarkModeEnabled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavItemClick, onDarkModeToggle, isDarkModeEnabled }) => {
  return (
    <nav className={`navbar ${isDarkModeEnabled ? 'dark-mode' : ''}`}>
      <div className="navbar-left">
        <ul className="navbar-list">
          <li className={`navbar-item ${activePage === 'home' ? 'active' : ''}`}>
            <button onClick={() => onNavItemClick('home')}>Home</button>
          </li>
          <li className={`navbar-item ${activePage === 'portfolio' ? 'active' : ''}`}>
            <button onClick={() => onNavItemClick('portfolio')}>Portfolio</button>
          </li>
          <li className={`navbar-item ${activePage === 'about' ? 'active' : ''}`}>
            <button onClick={() => onNavItemClick('about')}>About</button>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button onClick={onDarkModeToggle}>
          {isDarkModeEnabled ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;