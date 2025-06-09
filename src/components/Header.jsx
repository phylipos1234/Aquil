import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../public/images/Calque_1.png';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = ({ textColor = 'text-white' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/our-story', label: 'Our Story' },
    { path: '/trip-planner', label: 'Trip Planner' },
    { path: '/destination-wedding', label: 'Destination Wedding' },
    { path: '/professionals', label: 'Professionals' },
    { path: '/accessible-tourism', label: 'Accessible Tourism' },
    { path: '/sustainability', label: 'Sustainability' },
    { path: '/explore-journal', label: 'Explore Journal' },
  ];

  return (
    <header className={`w-full ${textColor} px-4 md:px-10 pb-4 bg-transparent`}>
      <div className="flex flex-col items-center py-4">
        <img src={Logo} alt="Aquila Project Logo" className="w-32 h-auto mb-2" />
      </div>

      {/* Thin underline */}
      <div className=" h-[0.5px] bg-[#FFFFFF66] w-full" />

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-wrap justify-center space-x-4 text-md font-berlingske text-center leading-[19px]  tracking-[1.56px] font-medium mt-4">
        {navLinks.map((link, index) => (
          <React.Fragment key={link.path}>
            {index > 0 && <span className="flex items-center gap-1">•</span>}
            <Link 
              to={link.path} 
              className={`hover:text-yellow-300 ${textColor}`}
            >
              {link.label.toUpperCase()}
            </Link>
          </React.Fragment>
        ))}
      </nav>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden flex justify-center mt-4">
        <button 
          onClick={toggleMenu}
          className={`${textColor} hover:text-yellow-300 focus:outline-none`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-50 pt-20">
          <div className="bg-white text-black rounded-lg mx-4 p-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className="hover:text-yellow-500 py-2 border-b border-gray-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <button 
              onClick={toggleMenu}
              className="mt-4 w-full py-2 bg-gray-200 rounded hover:bg-gray-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;