import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import main_logo_black from "@/assets/icons/header/main-logo-black.svg";
import mini_logo_black from "@/assets/icons/header/mini-logo-black.svg";
import main_logo_white from "@/assets/icons/header/main-logo-white.svg";
import mini_logo_white from "@/assets/icons/header/mini-logo-white.svg";
import { FiMenu, FiX } from "react-icons/fi";

const Header = ({ textColor = "text-white" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const logoRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Our Story" },
    { path: "/wedding", label: "Destination Wedding" },
    { path: "/professionals", label: "Professionals" },
    { path: "/accessible", label: "Accessible Tourism" },
    { path: "/sustainability", label: "Sustainability" },
    { path: "/explorer", label: "Explorer’s Journal" },
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <header
      className={`absolute top-0 left-0 w-full z-50 ${textColor} md:px-10 pb-4`}
    >
      {/* Mobile Top Bar */}
      <div className="fixed top-0 left-0 md:hidden flex justify-between items-center py-4 bg-black/60 backdrop-blur-xl w-full px-4">
        <div className="flex flex-col items-center space-y-2">
          <img
            src={MainLogo}
            alt="Aquila Main Logo"
            className="w-[160px] h-auto"
          />
          <img
            src={MiniLogo}
            alt="Aquila Mini Logo"
            className="w-[120px] h-auto"
          />
        </div>

        <button
          onClick={toggleMenu}
          className={`text-2xl ${textColor} hover:text-orange-500 focus:outline-none`}
        >
          <FiMenu size={28} />
        </button>
      </div>

      {/* Desktop */}
      <div ref={logoRef} className="hidden md:flex flex-col items-center py-4">
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
      <div className="h-[0.5px] bg-white/40 w-full hidden md:block" />

      {/* Desktop Nav */}
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
              className={`hover:text-orange-500 ${
                isScrolled ? "text-[#fff]" : textColor
              } leading-[19px] font-berlingske tracking-[1.56px] font-medium ${
                location.pathname === link.path ? "text-orange-500" : ""
              }`}
            >
              {link.label.toUpperCase()}
            </Link>
          </React.Fragment>
        ))}
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={toggleMenu}
        />

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[80%] max-w-xs bg-white/10 backdrop-blur-lg text-white shadow-2xl rounded-l-2xl transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-6">
            <div className="flex justify-end">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-500 transition"
              >
                <FiX size={26} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 mt-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className={`text-lg font-medium transition-colors duration-200 hover:text-orange-500 ${
                    location.pathname === link.path ? "text-orange-500" : ""
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
