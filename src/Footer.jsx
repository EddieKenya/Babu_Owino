import React from 'react';
import { FaYoutube, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#334155] text-white py-10 mt-auto">
      <div className="container mx-auto px-10 md:px-24 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Hon. Babu Owino. All rights reserved.
        </p>
        
        <div className="flex space-x-6 text-xl">
          <a href="https://www.youtube.com/@HEBabuOwino" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
            <FaYoutube />
          </a>
          <a href="https://www.facebook.com/babuowinongili" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/he.babuowino/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@he.babu.wino" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;