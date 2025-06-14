import React from "react";
import Design from "../../../../public/images/webinar/Rectangle 4812.png";

const Designing_Luxury = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-start mt-10 mb-20 px-4 lg:px-0 lg:ml-52">
      {/* Image on top for mobile, hidden on desktop */}
      <div className="block lg:hidden w-full mb-6">
        <img
          src={Design}
          alt="Decorative mobile"
          className="w-full h-auto object-contain"
        />
      </div>

      <div className="relative flex flex-col gap-2 items-start text-left bg-[#EEF5FD] py-6 px-6 sm:px-10 lg:pl-16 w-full lg:w-[50%] min-h-[600px] z-20 justify-center">
        <h1 className="text-[12px] text-[#0A0027] leading-[19px] font-neutra tracking-[1.56px]">
          AQUILA WEBINAR
        </h1>

        <div className="mt-1">
          <h1 className="text-[20px] text-[#0A0027] leading-[38px] font-berlingske font-semibold">
            Designing Luxury
          </h1>
          <h1 className="text-[20px] text-[#0A0027] leading-[38px] font-berlingske font-semibold">
            That Sells.
          </h1>
        </div>

        <p className="text-[20px] text-[#0A0027] leading-[24px] font-berlingske tracking-[0.4px] w-[90%] lg:w-[70%]">
          Presented by
        </p>

        <p className="text-[20px] text-[#0A0027] leading-[26px] font-berlingske tracking-[0.2px] w-[90%] lg:w-[70%]">
          Sevag Ohanian, Managing Director
        </p>

        <p className="text-[17px] text-[#0A0027] leading-[26px] font-berlingske tracking-[0.2px] w-[90%] lg:w-[70%]">
          Unpack how to translate Aquila’s quiet luxury into compelling value
          for clients. Learn language, pricing strategy, and how to frame
          experiences that go beyond typical “luxury.”
        </p>

        <p className="text-[#0A0027] text-[18px] mt-1">60 min</p>
        <p className="text-[#0A0027] text-[18px]">MAY 26, 2025</p>

        <h1 className="text-xs font-thin text-[#FF7338] leading-[18px] font-neutra tracking-widest uppercase mt-1">
          Request access
        </h1>

        {/* Original image position for large screens only */}
        <img
          src={Design}
          alt="Right decorative element"
          className="hidden lg:block absolute -right-[75%] top-1/2 -translate-y-1/2 h-[450px] w-auto z-0"
        />
      </div>
    </div>
  );
};

export default Designing_Luxury;
