import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import design from "@/assets/icons/design.svg";
import main_logo_white from "@/assets/icons/header/main-logo-white.svg";
import mini_logo_white from "@/assets/icons/header/mini-logo-white.svg";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#0A0027] w-full min-h-[531px] flex flex-col justify-between pt-14 pb-8 text-white">
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={design} alt="design" className="w-[100px]" />
      </div>

      <div className="px-4">
        <div className="mt-10 px-5">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <img
                src={main_logo_white}
                alt="Aquila Escapes Logo"
                className="w-[300px] h-[84px] mb-2"
              />
              <img
                src={mini_logo_white}
                alt="Aquila Escapes Mini Logo"
                className="w-[180px] h-[16px] mb-2"
              />
            </div>

            <span className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-full">
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
            </span>
          </div>

          {/* Horizontal Line */}
          <div className="h-[0.5px] bg-[#FFFFFF66] w-full my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center px-4">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 text-white hover:text-[#FF7338] transition-colors" />
              </a>
              <a
                href="https://www.x.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-6 h-6 text-white hover:text-[#FF7338] transition-colors" />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-6 h-6 text-white hover:text-[#FF7338] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="w-6 h-6 text-white hover:text-[#FF7338] transition-colors" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="w-6 h-6 text-white hover:text-[#FF7338] transition-colors" />
              </a>
            </div>
            <p className="text-[12px] leading-[19px] font-neutra tracking-[1.56px] uppercase">
              © 2025 Aquila Escapes. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FooterColumn = ({ title, items }) => {
  return (
    <div className="flex flex-col md:gap-3 min-w-[120px]">
      <h1 className="text-[10px] md:text-[14px] text-[#FF7338] leading-[19px] font-neutra tracking-[1.56px] uppercase">
        {title}
      </h1>
      {items.map((item, index) => (
        <h1
          key={index}
          className="text-[10px] md:text-[14px] text-[#FFFFFF] leading-[19px] font-neutra tracking-[1.56px] uppercase"
        >
          {item}
        </h1>
      ))}
    </div>
  );
};

export default Footer;
