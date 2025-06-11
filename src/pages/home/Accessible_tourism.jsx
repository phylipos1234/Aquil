import React from 'react';
import accebleImage1 from '../../../public/images/Rectangle 4820.png';
import accebleImage2 from '../../../public/images/Rectangle 4815.png';
import accebleImage3 from '../../../public/images/Rectangle 4814.png';

const Accessible_tourism = () => {
  return (
    <div className="relative z-0 mt-16">
      {/* Top (Dark) Section */}
      <div className="bg-[#0A0027] py-10 px-6 mb-12 sm:px-10 relative z-10">
        <div className="max-w-3xl mx-auto text-white text-center">
          <p className="text-[12px] text-[#FFFFFF] leading-[19px] font-neutra tracking-[1.56px] mb-2">
            Accessible Tourism
          </p>
          <h2 className="text-[32px] leading-[36px] text-[#FFFFFF] font-berlingske mb-2">
            Luxury without
          </h2>
          <p className="text-[32px] leading-[36px] text-[#FFFFFF] font-berlingske mb-4">
            limits.
          </p>
          <p className="text-[18px] leading-[24px] font-berlingske tracking-[0.4px] text-[#FFFFFF] mb-5">
            At Aquila, we believe that everyone deserves extraordinary experiences. Our commitment
            to accessible luxury ensures every traveler enjoys the elegance, comfort, and sophistication
            they expect, without compromise.
          </p>
          <p className="text-[18px] leading-[24px] font-berlingske tracking-[0.4px] text-[#FFFFFF] mb-5">
            Meticulously designed journeys, inclusive experiences, and thoughtful planning guarantee
            seamless adventures tailored precisely to your needs.
          </p>
          <p className="text-[18px] leading-[24px] font-berlingske tracking-[0.4px] text-[#FFFFFF] mb-5">
            Travel confidently, knowing every detail—from accommodations and transportation to
            exclusive activities—is thoughtfully curated to deliver exceptional comfort and accessibility.
          </p>
        </div>

        <div>
          <p className="mt-12 text-[15px] text-[#FF7338] leading-[19px] font-neutra flex items-center justify-center">
            Request a Personalized Proposal
          </p>
        </div>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4 justify-center  px-4 relative z-20">
          <img src={accebleImage1} alt="Accessible 1" className="w-full md:w-1/4 shadow-lg translate-y-32" />
          <img src={accebleImage2} alt="Accessible 2" className="w-full md:w-1/4 shadow-lg translate-y-32" />
          <img src={accebleImage3} alt="Accessible 3" className="w-full md:w-1/4 shadow-lg translate-y-32" />
        </div>
      </div>

      {/* White Background Below the Overflowing Images */}
      <div className="bg-white h-20 -mt-10 z-0 relative" />
    </div>
  );
};

export default Accessible_tourism;
