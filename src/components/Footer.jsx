import React from "react";
import aboutImage from "../assets/Group 21402.svg";
import Logo from "../../public/images/Calque_1.png";
import {
  FaLinkedinIn,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0A0027] text-white pt-28 pb-10 font-sans">
      {/* Center Logo Symbol */}
      <div className="flex justify-center mb-20">
        <img src={aboutImage} alt="Logo Symbol" className="w-12 h-12" />
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between gap-16">
        {/* Logo and Brand */}
        <div className="flex flex-col gap-2">
          <img src={Logo} alt="Aquila Logo" className="h-8 w-auto" />
          <p className="text-xs tracking-widest text-white/80 mt-2">
            MASTERFUL ESCAPES
          </p>
        </div>

        {/* Link Groups */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10 text-sm">
          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              About Us
            </p>
            <p className="mb-1">Our Story</p>
            <p className="mb-1">Accessible Tourism</p>
            <p>Sustainability</p>
          </div>

          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              For Travelers
            </p>
            <p className="mb-1">Home</p>
            <p className="mb-1">Trip Planner</p>
            <p>Destination Wedding</p>
          </div>

          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              For Agents
            </p>
            <p className="mb-1">Professionals</p>
            <p>Webinars</p>
          </div>

          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              News & Events
            </p>
            <p>Explorer’s Journal</p>
          </div>

          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              Terms & Conditions
            </p>
            <p className="mb-1">Privacy Policy</p>
            <p>Website Terms</p>
          </div>

          <div>
            <p className="text-[#FF7338] font-semibold mb-3 text-xs uppercase tracking-wide">
              Contact
            </p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10 my-10 mx-6 lg:mx-12" />

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row justify-between items-center text-xs text-white/70">
        {/* Social Icons */}
        <div className="flex gap-4 mb-4 sm:mb-0">
          <FaLinkedinIn className="hover:text-white transition" />
          <FaXTwitter className="hover:text-white transition" />
          <FaFacebookF className="hover:text-white transition" />
          <FaInstagram className="hover:text-white transition" />
          <FaYoutube className="hover:text-white transition" />
        </div>

        {/* Copyright */}
        <p>© 2025 AQUILA ESCAPES, ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;

// Footer Info

const FooterInfo = () => {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-[14px]  text-[#FF7338] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
        About Us
      </h1>
      <h1 className="text-[14px]  text-[#FFFFFF] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
        Our Story
      </h1>
      <h1 className="text-[14px]  text-[#FFFFFF] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
        Accessible Tourism
      </h1>
      <h1 className="text-[14px]  text-[#FFFFFF] leading-[19px] font-neutra  tracking-[1.56px] uppercase ">
        Sustainability
      </h1>
    </div>
  );
};
