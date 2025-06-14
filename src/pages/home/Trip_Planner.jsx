import React from 'react';
import container from "../../assets/Container (1).png";

const Trip_Planner = () => {
  return (
    <div className="bg-[#EDF5FC] mx-4 sm:mx-10 lg:mx-20 font-berlingske">
      <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-between max-w-7xl mx-auto gap-12">

        {/* Text Section - Left */}
        <div className="lg:w-1/2 w-full flex items-center text-left text-[#0A0024] py-10 px-6 sm:px-8 lg:px-10">
          <div>
            <p className=" text-[12px] leading-[19px] tracking-[1.56px] align-middle uppercase mb-2" >
              Trip Planner
            </p>
            <p className="font-berlingske text-[36px] leading-[44px] tracking-normal align-middle font-semibold mb-2">
              Your luxury travel, expertly
            </p>
            <p className="font-berlingske text-[36px] leading-[44px] tracking-normal align-middle font-semibold mb-4">
             designed around you.
            </p>
            <p className= "font-berlingske text-[20px] leading-[28px] tracking-[0.01em] align-middle  mb-4 font-normal"
            >
              Luxury begins with personalization. At Aquila, every itinerary is meticulously crafted by our luxury travel concierge, ensuring each detail aligns perfectly with your aspirations.
            </p>
            <p className="font-berlingske text-[20px] leading-[28px] tracking-[0.01em] align-middle  mb-8 font-normal">
              Our team of luxury travel experts simplifies the planning process, handling every nuance seamlessly, allowing you to savor the anticipation of extraordinary journeys ahead, confident that every moment will be impeccably executed.
            </p>
            <p className="text-[#FF7338] font-neutra text-[15px] leading-[19px] tracking-[1.56px] align-middle  uppercase">
              START PLANNING YOUR ESCAPE
            </p>
          </div>
        </div>

        {/* Image Section - Right */}
        <div className="lg:w-1/2 w-full">
          <img
            src={container}
            alt="Luxury Travel"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Trip_Planner;
