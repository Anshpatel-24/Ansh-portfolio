import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) => 
    `text-sm font-medium hover:text-accent transition-colors ${isActive ? "text-accent" : "text-textGray"}`;

  return (
    <nav className="absolute top-0 right-0 rounded-bl-[20px] rounded-tr-[20px] bg-[#2b2b2c] border border-borderDark px-8 py-4 backdrop-blur-md z-10 hidden md:block">
      <ul className="flex gap-8">
        <li><NavLink to="/" className={linkClass}>About</NavLink></li>
        <li><NavLink to="/resume" className={linkClass}>Resume</NavLink></li>
        <li><NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink></li>
        <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

// We also need a Mobile Nav bar usually at bottom or integrated. 
// For this design, the desktop nav is top-right.
export default Navbar;