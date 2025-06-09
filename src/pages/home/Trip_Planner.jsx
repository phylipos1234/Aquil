import React from 'react';
// import container from "../../../public/Images/Container (1).png";

const Trip_Planner = () => {
  return (
    <div className="bg-[#EDF5FC]   mx-16 mb-10">
      {/* Section Title and Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
        {/* Text Section */}
        <div className="lg:w-1/3 mb-12 lg:mb-0 lg:mr-8 bg-[EDF5FC]"> {/* Added margin-right for gap */}
          <p className="text-[#FF7338] text-sm font-semibold tracking-wide uppercase">TRIP PLANNER</p>
          <h1 className="text-md sm:text-4xl font-bold mt-4 text-[#0A0027]">
            Your luxury travel, expertly designed around you.
          </h1>
          <p className="mt-6 text-sm text-[#333] leading-relaxed">
            Luxury begins with personalization. At Aquila, every itinerary is meticulously crafted by our luxury travel concierge, ensuring each detail aligns perfectly with your aspirations.
          </p>
          <p className="mt-4 text-sm text-[#333] leading-relaxed">
            Our team of luxury travel experts simplifies the planning process, handling every nuance seamlessly, allowing you to savor the anticipation of extraordinary journeys ahead, confident that every moment will be impeccably executed.
          </p>
          <p className="text-red-700 mt-6 ">START PLANNING YOUR ESCAPE</p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img 
            src={''} 
            alt="Luxury Travel Container" 
            className="w-full  shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Trip_Planner;
