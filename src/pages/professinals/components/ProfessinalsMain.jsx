import React from "react";
import a from "/images/professinals/a.png";
import b from "/images/professinals/b.png";
import c from "/images/professinals/c.png";
import spain from "/images/professinals/spain.png";
import italy from "/images/professinals/italy.png";
import france from "/images/professinals/france.png";
import design from "@/assets/icons/design.svg";
import DestinationCard from "./DestinationCard";

const ProfessinalsMain = () => {
  return (
    <div className="flex flex-col py-6 gap-6">
      {/* First Image Row */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4  px-10 ">
          <div className="md:col-span-1">
            <DestinationCard source={a} />
          </div>
          <div className="md:col-span-2">
            <DestinationCard source={b} />
          </div>
          <div className="md:col-span-1">
            <DestinationCard source={c} />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 items-center text-center bg-[#0A0024] py-8 px-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src={design}
            alt="design"
            className="w-12 h-12 md:w-16 md:h-16"
          />
          <h1 className="text-xs md:text-sm text-[#F2F2F2] leading-5 font-neutra tracking-[1.56px]">
            TAILORED EXPERIENCE
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center mt-4">
          <h1 className="text-2xl md:text-4xl text-white leading-tight font-berlingske font-semibold">
            Curate extraordinary
          </h1>
          <h1 className="text-2xl md:text-4xl text-white leading-tight font-berlingske font-semibold">
            Journeys.
          </h1>
        </div>

        <p className="text-base md:text-lg text-white leading-relaxed font-berlingske tracking-[1%] w-full md:w-3/4 lg:w-2/4">
          Thoughtfully crafted journeys and premium business travel services
          designed specifically for your discerning clients. Aquila provides
          exclusive travel benefits, tailored itineraries, and meticulous
          execution, ensuring every journey is exceptional and effortless,
          reflecting your agency’s high standards.
        </p>

        {/* Second Image Row */}
        <div className="flex flex-col w-full items-center py-6 mt-6 gap-6">
          <h1 className="text-xs text-[#FF7338] leading-5 font-thin font-neutra tracking-widest uppercase">
            REQUEST A PERSONALIZED PROPOSAL
          </h1>

          <div className="flex flex-row justify-start sm:justify-center gap-6 overflow-x-auto px-4 hide-scrollbar">
            <DestinationCard source={spain} label="SPAIN" />
            <DestinationCard source={italy} label="ITALY" />
            <DestinationCard source={france} label="FRANCE" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessinalsMain;
