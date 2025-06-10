import React from "react";
import boat from "/images/professinals/boat.png";
import support from "@/assets/icons/professionals/support.svg";
import local from "@/assets/icons/professionals/local.svg";
import star from "@/assets/icons/professionals/star.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: support, text: "Concierge Support" },
  { icon: local, text: "Local Team" },
  { icon: star, text: "High Standards" },
];

const Dedication = () => {
  return (
    <div className="bg-[#EDF5FC] mx-4 md:mx-6 lg:mx-10 mb-12 font-berlingske flex flex-col lg:flex-row">
      {/* Image Section - first on mobile, stays left on desktop */}
      <div className="lg:w-1/2 order-1">
        <img
          src={boat}
          alt="boat"
          className="w-full h-auto lg:h-full object-cover"
        />
      </div>

      {/* Text Section - second on mobile, right on desktop */}
      <div className="lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 order-2">
        <p className="text-[#0A0024] text-xs md:text-[12px] leading-[19px] font-neutra tracking-[1.56px] uppercase">
          DEDICATION & PRESENCE
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-[36px] text-[#0A0024] leading-tight md:leading-[44px] font-semibold mt-2">
          Consistent quality <br />
          and reliable support.
        </h1>

        <p className="text-base md:text-lg lg:text-[20px] text-[#0A0024] leading-relaxed md:leading-[28px] tracking-[0.2px] mt-6 lg:mt-10 w-full lg:w-[70%]">
          Reliability and consistency define Aquila's approach. Our dedicated
          luxury travel concierge team is committed to providing dependable,
          high-quality support, enabling you to offer seamless, unforgettable
          luxury experiences without compromise. Trust Aquila to elevate your
          client's satisfaction and loyalty.
        </p>

        <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
          {listItems.map((item, index) => (
            <IconListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dedication;
