import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = ({ darkText = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Set text color based on the prop: dark slate for white pages, white for dark pages
  const textColor = darkText ? "text-[#334155]" : "text-white";
  const hoverColor = darkText ? "hover:text-blue-600" : "hover:text-blue-200";

  return (
    <nav className="relative z-50 p-6 md:p-8">
      <div className="flex justify-end items-center">
        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${textColor} text-3xl z-50`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Desktop Links */}
        <div className={`hidden md:flex space-x-10 text-[10px] font-bold uppercase tracking-[0.4em] ${textColor}`}>
          <Link to="/" className={`${hoverColor} transition-all`}>Home</Link>
          <Link to="/about" className={`${hoverColor} transition-all`}>About</Link>
          <Link to="/vision" className={`${hoverColor} transition-all`}>Vision</Link>
          <Link to="/contact" className={`${hoverColor} transition-all`}>Contact Us</Link>
          <Link to="/support" className={`${hoverColor} transition-all`}>Support</Link>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-4 right-4 w-[80%] max-w-[300px] bg-white/95 backdrop-blur-md flex flex-col items-center space-y-8 py-12 text-[12px] font-bold uppercase tracking-[0.4em] text-[#334155] shadow-2xl rounded-sm z-40">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/vision" onClick={() => setIsOpen(false)}>Vision</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          <Link to="/support" onClick={() => setIsOpen(false)}>Support</Link>
        </div>
      )}
    </nav>
  );
};

export default Header;