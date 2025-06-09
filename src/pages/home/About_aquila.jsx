import React from 'react';
import aboutImage from '../../assets/Group 21402.svg';
import cityImage from '../../../public/images/city-gallery-img2-1536x1109.jpg@2x.png';

const About_aquila = () => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center px-4 pt-10">
      {/* Top Section */}
      <div className="space-y-6 max-w-3xl w-full text-center mb-8">
        {/* Image */}
        <img 
          src={aboutImage} 
          alt="About Aquila" 
          className="mx-auto mb-6 max-w-[200px] md:max-w-[300px]" 
        />

        {/* Text content */}
        <div className="w-full max-w-[571px] mx-auto">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">About Aquila</p>
          <h3 className="text-3xl font-playfair text-gray-800 leading-tight">
            Tailored luxury, thoughtfully crafted.
          </h3>
        </div>

        <p className="text-lg font-roboto text-gray-600 w-full max-w-[571px] mx-auto mt-4">
          At Aquila, we believe that true luxury lies in meticulous detail. From carefully designed luxury travel experiences to perfectly personalized luxury escape locations, every journey with Aquila is thoughtfully curated to surpass expectations.
          <br />
          <br />
          Discover bespoke journeys created exclusively for the discerning traveler, blending elegance, exclusivity, and authenticity in every moment.
        </p>
      </div>

      {/* Full-width image and text */}
      <div className="flex w-full justify-between items-center mb-8 gap-4 px-8">
        {/* Image part taking 2/3 of the width */}
        <div className="w-2/3">
          <img src={cityImage} alt="City Image" className="w-full h-auto rounded-lg" />
        </div>

        {/* Text part taking 1/3 of the width */}
        <div className="w-1/3 pl-6">
          <p className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-2">About Aquila</p>
          <h2 className="text-2xl font-playfair text-gray-800 mb-4">Unforgettable moments, impeccably crafted.</h2>
          <h3 className="text-md font-roboto text-gray-600">
            Our philosophy is simple: every traveler deserves experiences as unique as their own story. Combining our profound expertise, exclusive connections, and unwavering dedication to personalization, we craft journeys that seamlessly blend sophistication, adventure, and authenticity.
            <br /><br />
            From the sunlit shores of Spain’s hidden coves to the refined elegance of a villa in the South of France, every Aquila experience is carefully tailored to exceed your expectations. Let us handle every detail, while you savor moments that become memories worth cherishing forever.
          </h3>
        </div>
      </div>

    </div>
  );
};

export default About_aquila;
