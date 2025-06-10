import React from "react";
import aboutImage from "../assets/Group 21402.svg";
import HeroImages from "../../public/images/Calque_1.png";
import design from "@/assets/icons/design.svg";
import main_logo_white from "@/assets/icons/header/main-logo-white.svg";
import mini_logo_white from "@/assets/icons/header/mini-logo-white.svg";

const Footer = () => {
  return (
    <div className="bg-[#0A0027] w-full h-[531px] flex flex-col justify-between pt-14 pb-8 ">
      {/* Centered Logo */}
      <div className="flex flex-col items-center justify-center gap-4">
        <img src={design} alt="design" className="" />
      </div>

      {/* Footer Content */}
      <div>
        <div className="flex gap-12 px-12 mt-10 justify-between items-center">
          {/* Left Section */}
          <div className="flex flex-col items-center py-4">
            <img
              src={main_logo_white}
              alt="Aquila Project Logo"
              className="w-[244px] h-[68px] mb-2"
            />
            <img
              src={mini_logo_white}
              alt="Aquila Project Logo"
              className="w-[140px] h-[12px] mb-2"
            />
          </div>
          {/* Footer Links */}
          {/* <div className="flex flex-wrap gap-12 text-white justify-between items-center"> */}
          <FooterInfo />
          <FooterInfo />
          <FooterInfo />
          <FooterInfo />
          <FooterInfo />
          {/* </div> */}
        </div>

        {/* Horizontal Line */}

        <div className=" h-[0.5px] bg-[#FFFFFF66] w-full" />
        {/* Social Media Links */}
        <div className="flex justify-center items-center mt-4">
          <p className="text-white text-[12px] leading-[19px] font-neutra tracking-[1.56px] uppercase">
            © 2023 Aquila Project. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
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
