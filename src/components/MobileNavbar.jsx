import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoPersonOutline, IoDocumentTextOutline, IoBriefcaseOutline, IoMailOutline } from "react-icons/io5";

const MobileNavbar = () => {
  // Helper to determine style for active/inactive links
  const mobileLinkClass = ({ isActive }) => 
    `flex flex-col items-center gap-1 text-[10px] font-medium transition-colors duration-300 ${
      isActive ? "text-accent" : "text-gray-400 hover:text-gray-200"
    }`;

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#1e1e1f]/95 backdrop-blur-md border-t border-borderDark z-50 md:hidden px-6 py-3 rounded-t-2xl shadow-2xl">
      <ul className="flex justify-between items-center max-w-sm mx-auto">
        
        <li>
          <NavLink to="/" className={mobileLinkClass}>
            <IoPersonOutline className="text-xl" />
            <span>About</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/resume" className={mobileLinkClass}>
            <IoDocumentTextOutline className="text-xl" />
            <span>Resume</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/portfolio" className={mobileLinkClass}>
            <IoBriefcaseOutline className="text-xl" />
            <span>Portfolio</span>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className={mobileLinkClass}>
            <IoMailOutline className="text-xl" />
            <span>Contact</span>
          </NavLink>
        </li>

      </ul>
    </nav>
  );
};

export default MobileNavbar;