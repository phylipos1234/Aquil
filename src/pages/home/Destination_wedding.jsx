import React from 'react';
import weeding from '../../../public/images/city-gallery-img2-1536x1109.jpg (1).png';

const Destination_wedding = () => {
  return (
    <div className="bg-[#EDF5FC] mx-20 mb-8 font-berlingske mt-12">
      <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-8">
        
        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            src={weeding}
            alt="Destination Wedding"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 h-full flex flex-col justify-center pl-10 pr-4 py-10 text-[#0A0024]">
          <p className="text-[#FF7338] text-[11px] font-bold tracking-wide uppercase mb-2">
            DESTINATION WEDDING
          </p>
          <h2 className="text-[28px] leading-snug font-bold mb-4">
            Your love story, magnificently told.
          </h2>
          <p className="text-[16px] leading-relaxed mb-5">
            Celebrate love with the unparalleled elegance and sophistication of Aquila’s destination weddings. From intimate gatherings in romantic, hidden villas to lavish celebrations in world-renowned venues, our meticulous attention ensures your special day is flawlessly executed.
          </p>
          <p className="text-[16px] leading-relaxed mb-8">
            Every moment is designed around your dreams—exceptional locations, exquisite details, and a commitment to perfection. Entrust your vision to our wedding specialists, and together we'll create a day that's authentically yours, undeniably luxurious, and utterly unforgettable.
          </p>
          <p className="text-[#FF7338] font-semibold text-[16px] cursor-pointer hover:underline">
            BEGIN YOUR WEDDING JOURNEY <span className="underline ml-1">LEARN MORE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination_wedding;
