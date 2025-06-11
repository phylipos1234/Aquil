import React from 'react';
import accebleImage1 from '../../../public/images/Rectangle 4820.png';
import accebleImage2 from '../../../public/images/Rectangle 4815.png';
import accebleImage3 from '../../../public/images/Rectangle 4814.png';

const Accessible_tourism = () => {
  return (
    <div className="relative z-0 mt-16">
      {/* Top (Dark) Section */}
      <div className="bg-[#0A0027] py-10 px-4 sm:px-6 md:px-10 mb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-white text-center">
          <p className="text-xs sm:text-sm text-[#FFFFFF] font-neutra tracking-widest mb-2">
            Accessible Tourism
          </p>
          <h2 className="text-2xl sm:text-3xl font-berlingske mb-2">
            Luxury without
          </h2>
          <p className="text-2xl sm:text-3xl font-berlingske mb-4">
            limits.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-berlingske text-[#FFFFFF] mb-4">
            At Aquila, we believe that everyone deserves extraordinary experiences. Our commitment
            to accessible luxury ensures every traveler enjoys the elegance, comfort, and sophistication
            they expect, without compromise.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-berlingske text-[#FFFFFF] mb-4">
            Meticulously designed journeys, inclusive experiences, and thoughtful planning guarantee
            seamless adventures tailored precisely to your needs.
          </p>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed font-berlingske text-[#FFFFFF] mb-4">
            Travel confidently, knowing every detail—from accommodations and transportation to
            exclusive activities—is thoughtfully curated to deliver exceptional comfort and accessibility.
          </p>
        </div>

        {/* CTA */}
        <p className="mt-10 text-sm sm:text-base text-[#FF7338] font-neutra text-center">
          Request a Personalized Proposal
        </p>

        {/* Image Gallery */}
        <div className="flex flex-col md:flex-row gap-4 mt-12 items-center justify-center px-2 sm:px-4">
          <img
            src={accebleImage1}
            alt="Accessible 1"
            className="w-full md:w-1/3 object-cover shadow-lg transform md:translate-y-20 transition-all duration-300"
          />
          <img
            src={accebleImage2}
            alt="Accessible 2"
            className="w-full md:w-1/3 object-cover shadow-lg transform md:translate-y-20 transition-all duration-300"
          />
          <img
            src={accebleImage3}
            alt="Accessible 3"
            className="w-full md:w-1/3 object-cover shadow-lg transform md:translate-y-20 transition-all duration-300"
          />
        </div>
      </div>

      {/* White Section Underlapping the Gallery */}
      <div className="bg-white h-24 -mt-16 relative z-0" />
    </div>
  );
};

export default Accessible_tourism;
