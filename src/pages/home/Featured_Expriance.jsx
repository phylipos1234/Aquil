import React, { useState } from 'react';
import wonderImage from '../../../public/images/Rectangle 4818.png';

const tabs = {
  wonder: {
    title: 'Wonder',
    description: `
      Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.
`,
    image: wonderImage,
  },
  celebrate: {
    title: 'Celebrate',
    description: `
      Celebrate life’s special moments with bespoke luxury experiences designed to make every celebration unforgettable.
`,
    image: wonderImage,
  },
  connect: {
    title: 'Connect',
    description: `
      Connect with the world on a deeper level. Explore cultural, enriching journeys that allow you to bond with people, places, and traditions.
`,
    image: wonderImage,
  },
  savor: {
    title: 'Savor',
    description: `
      Savor life’s finest moments with curated culinary experiences and indulgent getaways that leave you with memories to cherish forever.
`,
    image: wonderImage,
  },
  reset: {
    title: 'Reset',
    description: `
      Reset and recharge with serene escapes that allow you to unwind and rediscover peace and tranquility in luxurious surroundings.
`,
    image: wonderImage,
  },
};

const Featured_Expriance = () => {
  const [activeTab, setActiveTab] = useState('wonder');

  return (
    <div className="relative z-0 font-berlingske">
      {/* Dark Background Section */}
      <div className="bg-[#0A0027] py-8 sm:py-12 relative z-10">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 text-center">
          {/* Heading */}
          <div className="w-full sm:w-[540px] mx-auto mb-10 sm:mb-12">
            <p className="text-white text-sm sm:text-base mt-6">FEATURED EXPERIENCES</p>
            <h2 className="text-white text-2xl sm:text-4xl font-bold mt-2">
              Explore our signature journeys.
            </h2>
          </div>

          {/* Subheading */}
          <h5 className="text-white text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
            Each Aquila experience embraces our core philosophy—luxury tailored around you.
            Discover a collection of carefully selected luxury adventure travel, immersive escapes,
            and elegant experiences designed to inspire and captivate.
          </h5>

          {/* CTA */}
          <p className="text-[#FF7338] text-sm sm:text-base font-neutra mt-2">
            Request A Featured Experience
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 mt-8 sm:mt-10">
            {Object.keys(tabs).map((tab) => (
              <p
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-sm sm:text-base font-neutra capitalize px-2 py-1 border-b-2 transition-colors
                  ${
                    activeTab === tab
                      ? 'border-[#FF7338] text-white'
                      : 'border-transparent text-white opacity-70 hover:opacity-100'
                  }`}
              >
                {tabs[tab].title}
              </p>
            ))}
          </div>

          <div className="h-[1px] bg-[#FFFFFF66] w-full my-6 sm:my-8" />

          {/* Tab Content */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-8 sm:gap-16 text-left relative z-10 px-4">
            {/* Text Section */}
            <div className="text-white w-full md:w-1/2 mt-6 md:mt-0 space-y-3 sm:space-y-4">
              <p className="font-neutra font-semibold text-xs sm:text-sm tracking-[1.5px] uppercase">
                Meaningful Milestones
              </p>
              <p className="font-berlingske font-semibold text-2xl sm:text-3xl leading-snug">
                Endless
              </p>
              <p className="font-berlingske font-semibold text-2xl sm:text-3xl leading-snug">
                discovery.
              </p>
              <p className="font-berlingske font-extralight text-sm sm:text-lg leading-relaxed whitespace-pre-line">
                {tabs[activeTab].description.trim()}
              </p>
              <p className="font-neutra font-semibold text-sm sm:text-base tracking-[1.5px] uppercase text-[#FF7338]">
                START PLANNING YOUR ESCAPE
              </p>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 relative z-20">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full h-auto max-h-[400px] object-cover  transition-all duration-300 md:translate-y-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* White background under image overlap */}
      <div className="bg-white h-48 sm:h-72 -mt-32 sm:-mt-40 z-0 relative" />
    </div>
  );
};

export default Featured_Expriance;
