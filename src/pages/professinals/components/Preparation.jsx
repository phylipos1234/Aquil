import React from "react";
import happy_people from "/images/professinals/happy_people.png";
import landing from "@/assets/icons/professionals/landing.svg";
import bed from "@/assets/icons/professionals/bed.svg";
import checked from "@/assets/icons/professionals/checked.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: landing, text: "AIRPORT TRANSFERS" },
  { icon: bed, text: "ROOM UPGRADES" },
  { icon: checked, text: "High Standards" },
];

const Preparation = () => {
  return (
    <div className="relative mb-72 md:mb-12 py-8 w-full">
      {/* Background Image */}
      <img
        src={happy_people}
        alt="happy_people"
        className="w-full h-full object-cover max-h-[700px]"
      />

      {/* Overlay content */}
      <div className="absolute bg-white top-[60%] md:top-[20%] right-1 md:right-[5%] text-[#0A0024] p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-xl">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase font-neutra tracking-[1.2px]">
          Effortless Preparation
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-berlingske font-semibold leading-snug mt-2">
          Accessible resources,
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-berlingske font-semibold leading-snug">
          seamless planning
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-berlingske tracking-wide mt-4 leading-relaxed">
          Easily access detailed sample itineraries and a comprehensive digital
          knowledge hub designed specifically for travel professionals and their
          clients.
        </p>

        <h1 className="text-xs text-[#FF7338] leading-[19px] font-neutra font-thin tracking-widest mt-6 uppercase">
          Request Proposal
        </h1>
      </div>
    </div>
  );
};

export default Preparation;
