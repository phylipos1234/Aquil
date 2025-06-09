import React from 'react';
import container from "../../assets/Container (1).png";

const Trip_Planner = () => {
  return (
    <div className="bg-[#EDF5FC] mx-20 mb-12 font-berlingske ">
      <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-8">
        
        {/* Text Section */}
        <div className="lg:w-1/2 h-full flex flex-col justify-center pl-20 pr-4 py-10">
          <p className="text-[#0A0024] text-[11px] font-bold tracking-wide uppercase">TRIP PLANNER</p>
          <h1 className="text-[28px] mt-2 text-[#0A0024] leading-snug">
            Your luxury travel, expertly designed around you.
          </h1>
          <p className="mt-5 text-[16px] text-[#0A0024]leading-relaxed">
            Luxury begins with personalization. At Aquila, every itinerary is meticulously crafted by our luxury travel concierge, ensuring each detail aligns perfectly with your aspirations.
          </p>
          <p className="mt-5 text-[16px] text-[#0A0024]leading-relaxed">
            Our team of luxury travel experts simplifies the planning process, handling every nuance seamlessly, allowing you to savor the anticipation of extraordinary journeys ahead, confident that every moment will be impeccably executed.
          </p>
          <p className="mt-12 text-[16px] text-[#FF7338] font-semibold cursor-pointer">
            START PLANNING YOUR ESCAPE
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-2/3">
          <img 
            src={container} 
            alt="Luxury Travel Container" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Trip_Planner;
