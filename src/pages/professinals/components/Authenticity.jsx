import React from "react";
import authenticity from "/images/professinals/auth.png";
import boutique from "@/assets/icons/professionals/boutique.svg";
import experience from "@/assets/icons/professionals/experience.svg";
import emerging from "@/assets/icons/professionals/emerging.svg";
import IconListItem from "@/components/IconListItem";

const listItems = [
  { icon: boutique, text: "Boutique partnership" },
  { icon: experience, text: "Authentic experiences" },
  { icon: emerging, text: "Emerging destinations" },
];

const Authenticity = () => {
  return (
    <div className="bg-[#EDF5FC] mx-4 md:mx-6 lg:mx-10 mb-12 font-berlingske flex flex-col lg:flex-row">
      {/* Text Section - comes first on mobile */}
      <div className="lg:w-1/2 h-full flex flex-col justify-center p-6 md:p-10 lg:p-16 order-2 lg:order-1">
        <p className="text-[#0A0024] text-xs md:text-[12px] leading-[19px] font-neutra tracking-[1.56px]">
          AUTHENTICITY
        </p>

        <h1 className="text-2xl md:text-3xl lg:text-[36px] text-[#0A0024] leading-tight md:leading-[44px] font-semibold mt-2">
          Exclusive Access &<br />
          Premium Experiences
        </h1>

        <p className="text-base md:text-lg lg:text-[20px] text-[#0A0024] leading-relaxed md:leading-[28px] tracking-[1%] mt-6 lg:mt-10 w-full lg:w-[70%]">
          Gain direct access travel to a carefully curated portfolio of unique
          and luxurious experiences, accommodations, and destinations. Each
          offering is expertly chosen to resonate deeply with sophisticated
          travelers seeking exclusivity, authenticity, and refined elegance.
        </p>

        <div className="flex flex-col gap-4 md:gap-6 mt-6 md:mt-8">
          {listItems.map((item, index) => (
            <IconListItem key={index} icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>

      {/* Image Section - comes first on desktop */}
      <div className="lg:w-1/2 order-1 lg:order-2">
        <img
          src={authenticity}
          alt="authenticity"
          className="w-full h-auto lg:h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Authenticity;
