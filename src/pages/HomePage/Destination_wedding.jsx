import React from 'react';
import weeding from '../../../public/images/city-gallery-img2-1536x1109.jpg (1).png';

const Destination_wedding = () => {
  return (
    <div className="bg-[#EDF5FC] mt-6"> {/* Removed mx-16 */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-16">
        
        {/* Image Section */}
        <div className="md:w-1/2 h-full">
          <img
            src={weeding}
            alt="Destination Wedding"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 h-full flex flex-col justify-center text-[#0A0027]">
          <p className="text-[#FF7338] text-xs font-semibold uppercase mb-2 tracking-wide">
            Destination Wedding
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your love story, magnificently told.
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Celebrate love with the unparalleled elegance and sophistication of Aquila’s destination weddings. From intimate gatherings in romantic, hidden villas to lavish celebrations in world-renowned venues, our meticulous attention ensures your special day is flawlessly executed.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Every moment is designed around your dreams—exceptional locations, exquisite details, and a commitment to perfection. Entrust your vision to our wedding specialists, and together we'll create a day that's authentically yours, undeniably luxurious, and utterly unforgettable.
          </p>
          <p className="mt-4 text-[#FF7338] font-medium text-sm cursor-pointer hover:underline">
            Begin Your Wedding Journey <span className="ml-1 underline">LEARN MORE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination_wedding;
