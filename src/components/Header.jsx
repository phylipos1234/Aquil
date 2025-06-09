import React from 'react';
import Logo from '../../public/images/Calque_1.png';

const Header = () => {
  return (
    <header className="w-full  text-white px-10 pb-4">
      <div className="flex flex-col items-center py-4">
        <img src={Logo} alt="Aquila Project Logo" className="w-32 h-auto mb-2" />
      
      </div>

      {/* Thin underline */}
      <div className="border-t border-white/30 w-full" />

      <nav className="flex flex-wrap justify-center space-x-4 text-xs font-medium mt-4">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/our-story" className="hover:text-yellow-300">Our Story</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/trip-planner" className="hover:text-yellow-300">Trip Planner</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/destination-wedding" className="hover:text-yellow-300">Destination Wedding</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/professionals" className="hover:text-yellow-300">Professionals</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/accessible-tourism" className="hover:text-yellow-300">Accessible Tourism</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/sustainability" className="hover:text-yellow-300">Sustainability</a>
        </span>
        <span className="flex items-center gap-1">
          <span className="text-white">•</span>
          <a href="/explore-journal" className="hover:text-yellow-300">Explore Journal</a>
        </span>
      </nav>
    </header>
  );
};

export default Header;
