import React, { useState } from 'react';
import wonderImage from '../../../public/images/Rectangle 4818.png';

const tabs = {
  wonder: {
    title: 'Wonder',
    description: `
     Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.<br /><br />

From the enchanting shores of secluded Mediterranean islands to the awe-inspiring landscapes of rugged mountain ranges, each journey is carefully orchestrated, offering immersive experiences that stir your sense of wonder and fulfill your spirit of adventure.
`,
    image: wonderImage,
  },
  celebrate: {
    title: 'Celebrate',
    description: `
   Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.<br /><br />

From the enchanting shores of secluded Mediterranean islands to the awe-inspiring landscapes of rugged mountain ranges, each journey is carefully orchestrated, offering immersive experiences that stir your sense of wonder and fulfill your spirit of adventure.
`,
    image: wonderImage,
  },
  connect: {
    title: 'Connect',
    description: `
Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.<br /><br />

From the enchanting shores of secluded Mediterranean islands to the awe-inspiring landscapes of rugged mountain ranges, each journey is carefully orchestrated, offering immersive experiences that stir your sense of wonder and fulfill your spirit of adventure.
`,
    image: wonderImage,
  },
  savor: {
    title: 'Savor',
    description: `
    Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.<br /><br />

From the enchanting shores of secluded Mediterranean islands to the awe-inspiring landscapes of rugged mountain ranges, each journey is carefully orchestrated, offering immersive experiences that stir your sense of wonder and fulfill your spirit of adventure.
`,
    image: wonderImage,
  },
  reset: {
    title: 'Reset',
    description: `
     Step into a world of discovery with bespoke travel adventures. Explore hand-picked destinations celebrated for their unmatched charm, stunning landscapes, and hidden gems that promise exceptional memories.<br /><br />

From the enchanting shores of secluded Mediterranean islands to the awe-inspiring landscapes of rugged mountain ranges, each journey is carefully orchestrated, offering immersive experiences that stir your sense of wonder and fulfill your spirit of adventure.
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
            <p className="font-neutraface font-semibold text-[12px] leading-[19px] tracking-[0.0975em] uppercase text-center align-middle text-[#F2F2F2] mt-6">FEATURED EXPERIENCES</p>
            <p className="text-[#FFFFFF] font-neutra font-semibold text-[36px] leading-[44px] tracking-[0em] text-center align-middle mt-2">
              Explore our signature 
            </p>
            <p className="text-[#FFFFFF] font-berlingske font-semibold text-[36px] leading-[44px] tracking-[0em] text-center align-middle mt-1">
            journeys.
            </p>
          </div>

          {/* Subheading */}
          <div class="w-full flex justify-center">
            <div class="flex items-center justify-center w-[793px] h-[62px] mb-4">
              <p className="text-[#FFFFFF] font-berlingske font-extralight text-[20px] leading-[28px] tracking-[0.01em] text-center align-middle">
                Each Aquila experience embraces our core philosophy—luxury tailored around you.
                Discover a collection of carefully selected luxury adventure travel, immersive escapes,
                and elegant experiences designed to inspire and captivate.
              </p>
            </div>
          </div>

          {/* CTA */}
          <p className="text-[#FF7338] font-neutra font-normal text-[15px] leading-[19px] tracking-[0.0975em] text-center align-middle uppercase mt-2">
            Request A Featured Experience
          </p>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-32 sm:gap-16 md:gap-24 mt-10 sm:mt-14">
            {Object.keys(tabs).map((tab) => (
              <p
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer font-neutra  text-[18.13px] leading-[26px] tracking-[0.5px] uppercase px-6 py-3 border-b-2 transition-colors
                  ${
                    activeTab === tab
                      ? 'border-[#FF7338] text-[#FFFFFF]'
                      : 'border-transparent text-[#FFFFFF]'
                  }`}
              >
                {tabs[tab].title}
              </p>
            ))}
          </div>

          <div className="h-[1px] bg-[#FFFFFF66] w-full my-3 sm:my-8" />

          {/* Tab Content */}
          <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-evenly gap-8 sm:gap-16 text-left relative z-10 px-4">
            {/* Text Section */}
            <div className="text-white w-full md:w-1/2 mt-6 md:mt-0 space-y-3 sm:space-y-4">
              <p className="font-neutra text-[#FFFFFF] font-inter text-[12px] leading-[19px] tracking-[1.56px] uppercase align-middle">
                Meaningful Milestones
              </p>
              <p className="font-berlingske text-[#FFFFFF] font-inter font-semibold text-[36px] leading-[44px] tracking-normal align-middle">
                Endless
              </p>
              <p className="font-berlingske text-[#FFFFFF] font-inter font-semibold text-[36px] leading-[44px] tracking-normal align-middle">
                discovery.
              </p>
              <p
                className=" font-berlingske font-light text-[#FFFFFF] text-[20px] leading-[28px] tracking-[0.01em] align-middle mb-20"
                dangerouslySetInnerHTML={{ __html: tabs[activeTab].description.trim() }}
              />
              <p className="font-neutra text-left text-[15px] leading-[19px] tracking-[1.56px] uppercase align-middle text-[#FF7338] mt-20">
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
