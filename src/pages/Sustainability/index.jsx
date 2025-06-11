import React from "react";
import SustainabilityBanner from "../../assets/Img/Sustainability/Sustainability_Banner.jpg";
import Sustainability1 from "../../assets/Img/Sustainability/Sustainability-1.jpg";
import Sustainability2 from "../../assets/Img/Sustainability/Sustainability-2.jpg";
import Sustainability3 from "../../assets/Img/Sustainability/Sustainability-3.png";
import BiosphereLogo from "../../assets/Img/Sustainability/Biosphere.svg";
import Icon from "../../assets/Group 21402.svg";

const Sustainability = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[40vh] sm:h-[60vh] md:h-[100vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${SustainabilityBanner})` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60" />

        <div className="absolute bottom-4 sm:bottom-6 md:bottom-6 right-4 sm:right-6 md:right-6 z-10 flex items-center space-x-2 sm:space-x-4 md:space-x-4 text-white font-sans">
          <img
            src={BiosphereLogo}
            alt="Biosphere Symbol"
            className="w-6 sm:w-8 md:w-10 h-auto object-contain"
          />

          {/* Text Block */}
          <div>
            <div className="flex items-start space-x-1 sm:space-x-1 md:space-x-2">
              <p className="text-[14px] sm:text-[18px] md:text-[22px] font-semibold tracking-[0.1em] leading-none">
                BIOSPHERE
              </p>
              <sup className="text-[8px] sm:text-[10px] md:text-[12px] mt-0 md:mt-1 font-medium tracking-widest">
                2025
              </sup>
            </div>
            <p className="text-[8px] sm:text-[10px] md:text-[12px] tracking-[0.15em] mt-0.5 sm:mt-1 md:mt-1 font-light">
              CERTIFIED SUSTAINABLE LIFESTYLE
            </p>
          </div>
        </div>
      </section>

      <section className=" mt-12 sm:mt-16 md:mt-20 mb-12 font-berlingske px-4 sm:px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-stretch justify-between bg-[#EDF5FC] mx-auto gap-8">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img
              src={Sustainability1}
              alt="Luxury Travel Container"
              className="w-full h-[30rem] object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/2 h-full flex flex-col justify-center pr-20 pl-4 py-10">
            <p className="text-[#0A0024] text-[11px] font-bold tracking-wide uppercase">
              SUSTAINABILITY
            </p>

            <h1 className="text-[28px] mt-2 text-[#0A0024] leading-snug">
              Beauty that endures.
            </h1>

            <p className="mt-5 text-[16px] text-[#0A0024]leading-relaxed">
              Luxury begins with respect — for the land, for the life it holds,
              and for the quiet bonds between them. At Aquila, we believe true
              travel leaves no mark but meaning.
            </p>

            <p className="mt-5 text-[16px] text-[#0A0024]leading-relaxed">
              Every experience we create honors the places that inspire it — not
              only through elegance, but through care.
            </p>

            <p className="mt-12 text-[16px] text-[#FF7338] font-semibold cursor-pointer">
              Start a Thoughtful Journey
            </p>
          </div>
        </div>
      </section>

      <section className="text-center py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-0">
        <div className="max-w-2xl mx-auto mb-10 sm:mb-16">
          <div className="mb-4">
            <img
              src={Icon}
              alt="Icon"
              className="mx-auto w-8 sm:w-10 md:w-10 h-8 sm:h-10 md:h-10"
            />
          </div>
          <p className="uppercase text-xs tracking-[1.6px] text-gray-500 mb-2">
            Lasting Principles
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 font-berlingske">
            Preserving <br /> what moves us.
          </h2>
          <p className="text-sm sm:text-base md:text-base">
            Sustainability, to us, is not a gesture — it’s a mindset. One
            stitched into every detail we design. From the properties we choose
            to the routes we recommend, each decision reflects a commitment to
            protect what makes the journey meaningful.
          </p>
          <p className="text-sm sm:text-base md:text-base mt-4">
            We are proudly certified with the Biosphere Sustainable Lifestyle
            2025 — a recognition of our ongoing dedication to cultural respect,
            environmental balance, and considered hospitality.
          </p>
        </div>

        <div className="mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10 px-4 sm:px-6 md:px-20">
          <div className="md:w-full">
            <img
              src={Sustainability2}
              alt="Sustainability Experience"
              className="w-full h-64 sm:h-80 md:h-[35rem] object-cover"
            />
          </div>

          <div className="md:w-1/2 text-left font-berlingske">
            <p className="uppercase text-xs tracking-[1.6px] mb-2">
              Curated Experiences
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Journeys Without Barriers. <br /> Stories Without Limits.
            </h3>
            <p className="text-sm sm:text-base md:text-base mb-4">
              From silent alpine lodges in the Swiss peaks to sun-washed Amalfi
              villas reimagined for ease, every Aquila experience is shaped by
              both beauty and understanding.
            </p>
            <p className="text-sm sm:text-base md:text-base mb-6">
              Whether you’re drifting along Mediterranean cliffs with discreet
              support, exploring Parisian galleries with sensory-inclusive
              interpretation, or arriving at destinations where access is never
              an afterthought — we create travel that quietly adjusts to you.
              Each itinerary is a composition of elegance, simplicity, and
              possibility.
            </p>
            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
              aria-label="Start planning your curated escape"
            >
              Start planning your escape
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white flex flex-col md:flex-row w-full h-auto md:p-20">
        {/* Text */}
        <div className="bg-[#0a0024] text-white md:w-1/2 w-full px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-28 flex items-center">
          <div className="max-w-xl mx-auto font-berlingske">
            <p className="uppercase text-xs tracking-[1.6px] text-white/70 mb-4">
              Shared Purpose
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              In trusted <br className="hidden md:block" />
              company.
            </h3>

            <p className="text-sm sm:text-base md:text-base text-white mb-4 leading-relaxed">
              We collaborate with a select circle of partners who share our
              standards of care — from family-run eco-estates to
              conservation-led foundations. These are not partnerships of
              convenience, but of conviction.
            </p>

            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
              aria-label="Speak to a travel curator"
            >
              Speak to a Curator
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 w-full h-64 sm:h-80 md:h-auto">
          <img
            src={Sustainability3}
            alt="Accessibility Mountain Experience"
            className="w-full h-full object-cover -scale-x-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
