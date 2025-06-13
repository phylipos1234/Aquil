import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import design from "@/assets/icons/design.svg";
import main_logo_white from "@/assets/icons/header/main-logo-white.svg";

const Footer = () => {
  return (
    <footer className="bg-[#0A0027] w-full min-h-[531px] flex flex-col justify-between pt-14 pb-8 text-white font-neutra">
      {/* Center Symbol */}
      <div className="flex justify-center mb-8">
        <img src={design} alt="Design Icon" className="w-[60px] sm:w-[80px]" />
      </div>

      {/* Main Footer Content */}
      <div className="px-6 sm:pl-28 flex flex-col">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 justify-between">
          {/* Logo */}
          <div className="flex flex-col items-center lg:w-[300px]">
            <img
              src={main_logo_white}
              alt="Aquila Logo"
              className="w-[220px] sm:w-[280px] h-auto mb-2"
            />
            <span className="tracking-[4px] text-[11px] text-center mt-2 uppercase">
              Masterful Escapes
            </span>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 w-full text-left">
            <FooterColumn
              title="About Us"
              items={["Our Story", "Accessible Tourism", "Sustainability"]}
            />
            <FooterColumn
              title="For Travelers"
              items={["Home", "Trip Planner", "Destination Wedding"]}
            />
            <FooterColumn
              title="For Agents"
              items={["Professionals", "Webinars"]}
            />
            <FooterColumn
              title="News & Events"
              items={["Explorer's Journal"]}
            />
            <FooterColumn
              title="Terms & Conditions"
              items={["Privacy Policy", "Website Terms"]}
            />
            <FooterColumn title="Contact" items={["Contact Us"]} />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[#FFFFFF33] w-full my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-2">
          {/* Social Icons */}
          <div className="flex gap-5">
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin className="w-5 h-5 text-white hover:text-[#FF7338]" />
            </a>
            <a href="#" aria-label="X / Twitter">
              <FaXTwitter className="w-5 h-5 text-white hover:text-[#FF7338]" />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook className="w-5 h-5 text-white hover:text-[#FF7338]" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram className="w-5 h-5 text-white hover:text-[#FF7338]" />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube className="w-5 h-5 text-white hover:text-[#FF7338]" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-[12px] leading-[19px] tracking-[1.56px] uppercase text-center">
            © 2025 Aquila Escapes, All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, items }) => (
  <div className="flex flex-col gap-1 md:gap-2 min-w-[140px]">
    <h4 className="text-[#FF7338] text-[10px] md:text-[12px] tracking-[1.5px] uppercase mb-4">
      {title}
    </h4>
    {items.map((item, idx) => (
      <span
        key={idx}
        className="text-[10px] md:text-[12px] font-thin tracking-[1.5px] text-white uppercase hover:text-[#FF7338] cursor-pointer"
      >
        {item}
      </span>
    ))}
  </div>
);

export default Footer;
