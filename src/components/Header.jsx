import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import main_logo_black from "@/assets/icons/header/main-logo-black.svg";
import mini_logo_black from "@/assets/icons/header/mini-logo-black.svg";
import main_logo_white from "@/assets/icons/header/main-logo-white.svg";
import mini_logo_white from "@/assets/icons/header/mini-logo-white.svg";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ textColor = "text-white" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Our Story" },
    { path: "/trip-planner", label: "Trip Planner" },
    { path: "/destination-wedding", label: "Destination Wedding" },
    { path: "/professionals", label: "Professionals" },
    { path: "/accessible-tourism", label: "Accessible Tourism" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/explore-journal", label: "Explorer’s Journal" },
  ];

  const MainLogo =
    textColor === "text-white" ? main_logo_white : main_logo_black;
  const MiniLogo =
    textColor === "text-white" ? mini_logo_white : mini_logo_black;

  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const logoBottom = logoRef.current.getBoundingClientRect().bottom;
        setIsScrolled(logoBottom <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 ${textColor} px-4 md:px-10 pb-4`}
    >
      <div ref={logoRef} className="flex flex-col items-center py-4">
        <img
          src={MainLogo}
          alt="Aquila Logo"
          className="w-[244px] h-[68px] mb-1"
        />
        <img
          src={MiniLogo}
          alt="Aquila Mini Logo"
          className="w-[140px] h-[12px] mb-2"
        />
      </div>

      {/* Thin underline */}
      <div className="h-[0.5px] bg-white/40 w-full" />

      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex flex-wrap justify-center items-center text-center mt-4 text-sm font-berlingske font-medium leading-[19px] tracking-[1.56px] space-x-3
    ${
      isScrolled
        ? "fixed top-0 left-1/2 transform -translate-x-1/2 w-[85%] text-xs py-5 bg-black bg-opacity-80 rounded-full shadow-lg backdrop-blur-md z-50"
        : "w-full text-sm py-4"
    }`}
      >
        {navLinks.map((link, index) => (
          <React.Fragment key={link.path}>
            {index > 0 && <span className="flex items-center gap-1">•</span>}
            <Link
              to={link.path}
              className={`hover:text-yellow-300 ${
                isScrolled ? "text-[#fff]" : textColor
              } leading-[19px] font-berlingske  tracking-[1.56px] font-medium `}
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
