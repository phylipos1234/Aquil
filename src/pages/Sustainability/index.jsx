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

      <section className="mt-8 sm:mt-12 lg:mt-20 mb-8 sm:mb-12 lg:mb-20 font-berlingske sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-start bg-[#EDF5FC] mx-auto gap-6 sm:gap-24">
          <div className="md:w-[60%] w-full h-64 sm:h-80 md:h-[35rem]">
            <img
              src={Sustainability1}
              alt="Luxury Travel Container"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="lg:w-1/3 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-20 lg:pl-4 pt-8 sm:pt-10">
            <p className="text-[#0A0024] text-[10px] sm:text-[11px] tracking-wide uppercase font-neutra">
              SUSTAINABILITY
            </p>

            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold mt-2 text-[#0A0024] leading-snug">
              Beauty <br />
              that endures.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed">
              Luxury begins with respect — for the land, for the life it holds,
              and for the quiet bonds between them. At Aquila, we believe true
              travel leaves no mark but meaning.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed">
              Every experience we create honors the places that <br /> inspire
              it — not only through elegance, but through care.
            </p>

            <p className="mt-8 sm:mt-5 text-xs tracking-widest text-[#FF7338] font-thin uppercase cursor-pointer font-neutra">
              Start a Thoughtful Journey
            </p>
          </div>
        </div>
      </section>

      <section className="font-berlingske py-8 sm:py-12 lg:py-20 px-4 sm:px-6 lg:px-0">
        <div className="max-w-lg flex flex-col gap-10 text-center mx-auto mb-8 sm:mb-12 lg:mb-28">
          <div className="mb-4">
            <img
              src={Icon}
              alt="Icon"
              className="mx-auto w-6 sm:w-8 lg:w-10 h-6 sm:h-8 lg:h-10"
            />
          </div>

          <span>
            <p className="uppercase text-[10px] sm:text-xs tracking-[1.6px] mb-2 font-neutra">
              Lasting Principles
            </p>

            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 font-berlingske">
              Preserving <br /> what moves us.
            </h2>

            <p className="text-sm sm:text-base lg:text-base font-medium">
              Sustainability, to us, is not a gesture — it’s a mindset. One
              stitched into every detail we design. From the properties we
              choose to the routes we recommend, each decision reflects a
              commitment to protect what makes the journey meaningful.
            </p>

            <p className="text-sm sm:text-base lg:text-base font-medium mt-4">
              We are proudly certified with the Biosphere Sustainable Lifestyle
              2025 — a recognition of our ongoing dedication to cultural
              respect, environmental balance, and considered hospitality.
            </p>
          </span>
        </div>

        <div className="mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20 px-4 sm:px-6 md:px-20">
          <div className="md:w-full">
            <img
              src={Sustainability2}
              alt="Sustainability Experience"
              className="w-full h-64 sm:h-80 md:h-[35rem] object-cover"
            />
          </div>

          <div className="md:w-1/2 text-left font-berlingske">
            <p className="uppercase text-xs tracking-[1.6px] mb-2 font-neutra">
              Thoughtful Action
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Stewardship <br /> in motion.
            </h3>

            <p className="text-sm sm:text-base md:text-base mb-4 font-medium">
              Aquila’s itineraries are shaped with longevity in mind. <br /> We
              support regenerative stays, low-impact travel, and partnerships
              that give back to their landscapes.
            </p>

            <p className="text-sm sm:text-base md:text-base mb-6 font-medium">
              From plastic-free coastlines in Portugal to heritage vineyards in
              Tuscany, our escapes are as responsible as they are remarkable.
            </p>

            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
            >
              Start planning your escape
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white flex flex-col md:flex-row w-full h-auto md:p-20">
        {/* Text */}
        <div className="bg-[#0a0024] text-white md:w-1/2 w-full px-4 sm:px-8 md:px-20 py-10 sm:py-16 md:py-32 flex items-center">
          <div className="max-w-xl mx-auto font-berlingske">
            <p className="uppercase text-xs tracking-[1.6px] text-white mb-2 font-neutra">
              Shared Purpose
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-7">
              In trusted <br className="hidden md:block" />
              company.
            </h3>

            <p className="text-sm sm:text-base md:text-base text-white mb-4 leading-relaxed">
              We collaborate with a select circle of <br /> partners who share
              our standards of care <br /> — from family-run eco-estates <br />
              to conservation-led foundations. These are <br /> not partnerships
              of convenience, but of <br /> conviction.
            </p>

            <p className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline font-neutra">
              Speak to a Curator
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-[70%] w-full h-64 sm:h-80 md:h-auto">
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
