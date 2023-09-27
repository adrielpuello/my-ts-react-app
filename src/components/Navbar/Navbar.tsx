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
          <li className="navbar-item">
            <p className='logo'>AP</p>
          </li>
          <li className={`navbar-item ${activePage === 'home' ? 'active' : ''}`}>
            <button className='navbar-button' onClick={() => onNavItemClick('home')}>HOME</button>
          </li>
          <li className={`navbar-item ${activePage === 'portfolio' ? 'active' : ''}`}>
            <button className='navbar-button' onClick={() => onNavItemClick('portfolio')}>PORTFOLIO</button>
          </li>
          <li className={`navbar-item ${activePage === 'about' ? 'active' : ''}`}>
            <button className='navbar-button' onClick={() => onNavItemClick('about')}>ABOUT</button>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <button className='navbar-button' onClick={onDarkModeToggle}>
          {isDarkModeEnabled ? 'LIGHT THEME' : 'DARK THEME'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;