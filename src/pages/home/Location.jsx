import React from 'react';
import locationImage from '../../../public/images/Container (2).png';

const Location = () => {
  return (
    <div className="bg-[#EDF5FC] mt-20 mx-4 sm:mx-10 lg:mx-20 mb-20 font-berlingske">
      <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-12">
        
        {/* Image Section - Top on mobile, right on desktop */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img 
            src={locationImage} 
            alt="European Relocation" 
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section - Bottom on mobile, left on desktop */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center text-[#0A0024] py-10 px-6 lg:pl-10 order-2 lg:order-1">
          <p className="text-[#0A0024] text-[12px] leading-[19px] font-neutra tracking-[1.56px] mb-2">
            European Relocation
          </p>
          <p className="text-[32px] leading-[36px] text-[#0A0024] font-berlingske mb-4">
            Effortless luxury living 
          </p>
          <p className='text-[32px] leading-[36px] text-[#0A0024] font-berlingske mb-4'>
            abroad.
          </p>
          <p className="text-[18px] leading-[24px] font-berlingske tracking-[0.4px] mb-4">
            Relocating to Europe should feel as elegant as the lifestyle you're pursuing. Aquila specializes in seamless, sophisticated relocations, providing tailored support and exclusive insights into Europe's most desirable locations. Whether your goal is a sunlit villa overlooking the Mediterranean or a refined urban residence in a vibrant cultural hub, we handle every detail—from initial planning to settling comfortably into your new luxurious surroundings.
          </p>
          <p className="text-[18px] leading-[24px] font-berlingske tracking-[0.4px] mb-8">
            Discover how Aquila transforms relocation into an effortless journey, perfectly curated to your ambitions.
          </p>
          <p className="text-[15px] text-[#FF7338] leading-[19px] font-neutra">
            START YOUR EUROPEAN JOURNEY TODAY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
