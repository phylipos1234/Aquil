import React, { useState } from 'react';
import wonderImage from '../../../public/images/Rectangle 4818.png';

const tabs = {
  wonder: {
    title: 'Wonder',
    description:
      'Discover the world in a new light. Let your wanderlust guide you through the most mesmerizing and awe-inspiring destinations.',
    image: wonderImage,
  },
  celebrate: {
    title: 'Celebrate',
    
    description:
      'Celebrate life’s special moments with bespoke luxury experiences designed to make every celebration unforgettable.',
      image: wonderImage,
  },
  connect: {
    title: 'Connect',
    description:
      'Connect with the world on a deeper level. Explore cultural, enriching journeys that allow you to bond with people, places, and traditions.',
      image: wonderImage,
  },
  savor: {
    title: 'Savor',
    description:
      'Savor life’s finest moments with curated culinary experiences and indulgent getaways that leave you with memories to cherish forever.',
      image: wonderImage,
  },
  reset: {
    title: 'Reset',
    description:
      'Reset and recharge with serene escapes that allow you to unwind and rediscover peace and tranquility in luxurious surroundings.',
      image: wonderImage,
  },
};

const Featured_Expriance = () => {
  const [activeTab, setActiveTab] = useState('wonder');

  return (
    <div className="relative z-0">
      {/* Dark Background Section */}
      <div className="bg-[#0A0027] pt-12 pb-24 relative z-10"> {/* 🔽 Reduced bottom padding from pb-44 to pb-24 */}
        <div className="w-full max-w-7xl mx-auto px-4 text-center">
          <p className="text-white text-sm">FEATURED EXPERIENCES</p>
          <h2 className="text-white text-4xl font-bold mt-4">Explore our signature journeys.</h2>
          <h5 className="text-white text-sm mt-4 max-w-2xl mb-8 mx-auto">
            Each Aquila experience embraces our core philosophy—luxury tailored around you.
            Discover a collection of carefully selected luxury adventure travel, immersive escapes, and elegant experiences designed to inspire and captivate.
          </h5>
          <p className="text-red-500 text-sm text-center mt-4">Request a FEATURED EXPERIENCE</p>
          {/* Tabs */}
          <div className="flex justify-center gap-6 mt-10 flex-wrap">
            {Object.keys(tabs).map((tab) => (
              <p
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer text-base font-semibold capitalize px-4 py-2 transition-all duration-300 border-b-2
                  ${
                    activeTab === tab
                      ? 'text-white border-white'
                      : 'text-white/70 border-transparent hover:border-white hover:text-white'
                  }`}
              >
                {tabs[tab].title}
              </p>
            ))}
          </div>

          {/* Content Section */}
          <div className="mt-12 flex flex-col md:flex-row-reverse items-center justify-center gap-10 text-left relative z-10">
            {/* Text */}
            <div className="text-white md:w-1/2 px-4 md:px-0">
              <h3 className="text-2xl font-bold mb-4">{tabs[activeTab].title}</h3>
              <p className="text-md">{tabs[activeTab].description}</p>
            </div>

            {/* Image */}
            <div className="md:w-1/2 relative z-20">
              <img
                src={tabs[activeTab].image}
                alt={tabs[activeTab].title}
                className="w-full  shadow-2xl object-cover transform translate-y-36" // 🔽 increased Y-translate for more image in white
              />
            </div>
          </div>
        </div>
      </div>

      {/* White background below image */}
      <div className="bg-white h-72 -mt-40 z-0 relative" /> {/* 🔼 more height for white area */}
      
      {/* CTA */}
     
    </div>
  );
};

export default Featured_Expriance;
