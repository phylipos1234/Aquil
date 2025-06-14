import React from "react";
import cheff from "/images/professinals/cheff.png";
import trees from "@/assets/icons/professionals/trees.svg";
import wedding_ring from "@/assets/icons/professionals/wedding_ring.svg";
import forks from "@/assets/icons/professionals/forks.svg";
import wine_glass from "@/assets/icons/professionals/wine_glass.svg";
import quill from "@/assets/icons/professionals/quill.svg";
import bicycle from "@/assets/icons/professionals/bicycle.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: trees, text: "Adventure" },
  { icon: wedding_ring, text: "Weddings" },
  { icon: forks, text: "Gastronomy" },
  { icon: wine_glass, text: "Wine tours" },
  { icon: quill, text: "Culture" },
  { icon: bicycle, text: "Transport options" },
];

const Experts = () => {
  return (
    <div className="bg-[#EDF5FC] mx-4 md:mx-6 lg:mx-10 mb-12 font-berlingske flex flex-col lg:flex-row">
      {/* Text Section - first on mobile */}
      <div className="lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 order-2 lg:order-1">
        <p className="text-[#0A0024] text-xs md:text-[12px] leading-[19px] font-neutra tracking-[1.56px] uppercase">
          CURATED BY EXPERTS
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-[36px] text-[#0A0024] leading-tight md:leading-[44px] font-semibold mt-2">
          Expertly Selected
          <br />
          Suppliers
        </h1>

        <p className="text-base md:text-lg lg:text-[20px] text-[#0A0024] leading-relaxed md:leading-[28px] tracking-[1%] mt-6 lg:mt-10 w-full lg:w-[70%]">
          Our carefully selected partners specialize in adventure travel,
          Gastronomy & Culinary Tours, Cultural Immersion, Wedding Planning,
          Wine Experiences, and Rail and Private Transportation (excluding
          flights).
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8">
          {listItems.map((item, index) => (
            <IconListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      {/* Image Section - second on mobile */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          src={cheff}
          alt="cheff"
          className="w-full h-auto lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Experts;
