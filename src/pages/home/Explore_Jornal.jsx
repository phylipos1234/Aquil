import React from 'react';
import journal from '../../../public/images/Rectangle 4810.png';

const Designing_Luxury = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between text-center bg-[#0A0027] my-6 sm:my-12 lg:my-20 py-8 sm:py-12 lg:py-36 px-4 sm:px-6 lg:mr-20 max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto">
    <div className="lg:absolute lg:-left-[20rem] w-full lg:w-auto">
      <img
        src={journal}
        alt="Clelia Romano"
        className="w-full h-64 sm:h-80 lg:h-[30rem] object-contain lg:object-cover"
      />
    </div>

    <div className="lg:w-1/2 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-20 lg:pl-4 lg:ml-[30rem] font-berlingske mt-6 lg:mt-0">
      <p className="text-[#FFFFFF] text-[12px] sm:text-[11px] font-neutra  tracking-wide uppercase">
      Explorer's JournaL
      </p>

      <p className="text-[36px] font-medium leading-[44px] tracking-[0] text-white text-center">
  Curate extraordinary <br /> Journeys.
</p>


      <p className="mt-4 sm:mt-5 text-sm text-[20px] text-[#FFFFFF] font-light leading-[28px] tracking-[0.01em] text-center mx-auto">
      Explore Aquila's Journal for elegantly curated stories, luxury travel package insights, and exclusive destination guides designed to inspire your next bespoke adventure.       </p>

      <p className="mt-4 sm:mt-5 text-sm text-[20px] text-[#FFFFFF] font-light leading-[28px] tracking-[0.01em] text-center mx-auto">
      Discover hidden gems and authentic narratives that elevate your understanding and appreciation of sophisticated travel, providing endless inspiration and enriching your journey experiences.
      </p>

      <p className="mt-8 sm:mt-12 text-[15px] font-neutra leading-[19px] fonttracking-[0.0975em] font-semibold text-[#FF7338] text-center uppercase">
      EXPLORE YOUR JOURNAL      </p>
    </div>
  </section>
  );
};

export default Designing_Luxury;
