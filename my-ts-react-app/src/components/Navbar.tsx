import React from 'react';

interface NavbarProps {
  activePage: string;
  onNavItemClick: (page: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activePage, onNavItemClick }) => {
  return (
    <nav className="navbar">
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
    </nav>
  );
};

export default Navbar;