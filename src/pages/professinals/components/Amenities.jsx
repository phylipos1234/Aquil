import React from "react";
import amenity from "/images/professinals/amenity.png";
import landing from "@/assets/icons/professionals/landing.svg";
import bed from "@/assets/icons/professionals/bed.svg";
import checked from "@/assets/icons/professionals/checked.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: landing, text: "AIRPORT TRANSFERS" },
  { icon: bed, text: "ROOM UPGRADES" },
  { icon: checked, text: "High Standards" },
];

const Amenities = () => {
  return (
    <div className="relative mb-72 md:mb-12 py-8 w-full">
      {/* Background Image */}
      <img
        src={amenity}
        alt="Amenity background"
        className="w-full h-full object-cover "
      />

      {/* Overlay content */}
      <div className=" absolute border  bg-white top-[60%]  md:top-[20%] left-1 md:left-[5%]    text-[#0A0024] p-4 sm:p-6 md:p-10 rounded-xl w-full max-w-sm sm:max-w-md md:max-w-xl">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase font-neutra tracking-[1.2px]">
          Exclusive amenities & affiliations
        </p>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-berlingske font-semibold leading-snug mt-2">
          Thoughtful Amenities,
        </h1>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-berlingske font-semibold leading-snug">
          Esteemed Partnerships
        </h1>
        <p className="text-sm sm:text-base md:text-lg font-berlingske tracking-wide mt-4 leading-relaxed">
          Provide your clients with meaningful amenities such as complimentary
          airport transfers, thoughtful room upgrades, and relaxing spa
          experiences, leveraging our collaboration with distinguished consortia
          like Virtuoso.
        </p>

        <div className="flex flex-wrap gap-4 sm:gap-6 mt-6">
          {listItems.map((item, index) => (
            <IconListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
