import React from "react";
import Selling from "../../../../public/images/webinar/Rectangle 4816.png";

const Selling_Soul = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start mt-10 mb-20 px-4 lg:px-0 lg:ml-52">
      {/* Image for small screens */}
      <div className="block lg:hidden w-full mb-6">
        <img
          src={Selling}
          alt="Mobile decorative element"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Content Card */}
      <div className="relative flex flex-col gap-3 items-start text-left bg-[#EEF5FD] py-6 px-6 sm:px-10 lg:pl-16 w-full lg:w-[50%] min-h-[600px] z-20 justify-center">
        {/* Right-side image for large screens only */}
        <img
          src={Selling}
          alt="Right decorative element"
          className="hidden lg:block absolute -right-[75%] top-1/2 -translate-y-1/2 h-[450px] w-auto z-0"
        />

        <h1 className="text-[12px] text-[#0A0027] leading-[19px] font-neutra tracking-[1.56px]">
          AQUILA WEBINAR
        </h1>

        <div className="mt-1">
          <h1 className="text-[20px] text-[#0A0027] leading-[38px] font-berlingske font-semibold">
            Selling the Soul
          </h1>
          <h1 className="text-[20px] text-[#0A0027] leading-[38px] font-berlingske font-semibold">
            of a Wedding.
          </h1>
        </div>

        <p className="text-[20px] text-[#0A0027] leading-[24px] font-berlingske tracking-[0.4px] w-[90%] lg:w-[70%]">
          Presented by
        </p>

        <p className="text-[20px] text-[#0A0027] leading-[26px] font-berlingske tracking-[0.2px] w-[90%] lg:w-[70%]">
          Clelia Romano, Destination Wedding
        </p>
        <p className="text-[20px] text-[#0A0027] leading-[26px] font-berlingske tracking-[0.2px] w-[90%] lg:w-[70%]">
          Planner
        </p>

        <p className="text-[17px] text-[#0A0027] leading-[26px] font-berlingske tracking-[0.2px] w-[90%] lg:w-[70%]">
          Learn to sell destination weddings in Spain and Italy, highlighting
          their romance, logistics, and emotional appeal
        </p>

        <p className="text-[#0A0027] text-[18px] mt-1">60 min</p>
        <p className="text-[#0A0027] text-[18px]">MAY 26, 2025</p>

        <h1 className="text-xs text-[#FF7338] font-thin leading-[18px] font-neutra tracking-widest uppercase mt-1">
          Request access
        </h1>
      </div>
    </div>
  );
};

export default Selling_Soul;
