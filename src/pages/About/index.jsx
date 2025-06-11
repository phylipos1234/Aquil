import React from "react";
import AboutBanner from "../../assets/Img/About/About_Banner.jpg";
import About1 from "../../assets/Img/About/About-1.jpg";
import About2 from "../../assets/Img/About/About-2.jpg";
import About3 from "../../assets/Img/About/About-3.jpg";
import About4 from "../../assets/Img/About/About-4.jpg";
import About5 from "../../assets/Img/About/About-5.jpg";
import About6 from "../../assets/Img/About/About-6.jpg";
import About7 from "../../assets/Img/About/About-7.jpg";
import About8 from "../../assets/Img/About/About-8.jpg";
import About9 from "../../assets/Img/About/About-9.jpg";
import About10 from "../../assets/Img/About/About-10.jpg";
import About11 from "../../assets/Img/About/About-11.jpg";
import About12 from "../../assets/Img/About/About-12.jpg";
import TeamSection from "./TeamSection";

const About = () => {
  return (
    <div className="text-gray-800">
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] md:h-[100vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${AboutBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </section>

      <div className="bg-[#0A0024] py-10 sm:py-16 md:py-20 px-4 sm:px-6 md:px-6 text-center text-white font-berlingske">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] tracking-widest uppercase text-[#b3b3b3] mb-2 font-neutra">
            Quiet Excellence
          </p>
          <h2 className="text-xl sm:text-3xl md:text-5xl font-semibold mb-6 leading-tight">
            The art of <br className="hidden md:block" />
            <span className="font-bold">traveling well.</span>
          </h2>
          <div className="text-sm sm:text-base md:text-base flex flex-col gap-5 mb-6">
            <p>
              Aquila is not in the business of mass tourism. We craft journeys
              for those who move with intention—guests who value meaning over
              motion, and authenticity over excess.
            </p>
            <p>
              Rooted in Europe’s most timeless regions, we offer experiences
              that honor both traveler and destination. From private villas and
              cultural immersion to in-house concierge service, every moment is
              curated with elegance, discretion, and quiet confidence.
            </p>
          </div>
          <p className="text-xs text-[#FF7338] uppercase tracking-wide font-medium font-neutra">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
              aria-label="Request a personalized travel proposal"
            >
              Request a Personalized Proposal
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12 max-w-6xl mx-auto px-4">
          <img
            src={About1}
            alt="Family embracing"
            className="w-full h-48 sm:h-64 md:h-[280px] object-cover rounded"
          />
          <img
            src={About2}
            alt="Person floating in water"
            className="w-full h-48 sm:h-64 md:h-[280px] object-cover rounded"
          />
          <img
            src={About3}
            alt="Luxury interior"
            className="w-full h-48 sm:h-64 md:h-[280px] object-cover rounded"
          />
        </div>
      </div>

      <section className="bg-[#EDF5FC] mt-12 sm:mt-16 md:mt-20 mb-12 font-berlingske">
        <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-[85rem] ml-auto gap-4 sm:gap-6 lg:gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-4 py-6 sm:py-8 lg:py-10">
            <p className="text-[#0A0024] text-[11px] font-bold tracking-wide uppercase font-neutra">
              Timeless Travel.
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-[28px] mt-2 text-[#0A0024] leading-snug">
              Timeless Travel.
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#0A0024] leading-relaxed">
              We envision a world where travel is not consumed—but felt. Where
              the journey isn’t about collecting places, but about connecting
              deeply with one.
            </p>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#0A0024] leading-relaxed">
              To us, luxury is defined by depth, not extravagance. It’s the
              warmth of a passionate local guide, the intimacy of a private
              tasting, the precision of a well-planned moment. This is how we
              measure value—through quality, authenticity, and impact.
            </p>
            <p className="mt-8 sm:mt-10 lg:mt-12 text-sm sm:text-base lg:text-[16px] text-[#FF7338] font-semibold cursor-pointer font-neutra">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
                aria-label="Start planning your timeless travel escape"
              >
                START PLANNING YOUR ESCAPE
              </a>
            </p>
          </div>

          {/* Image Section */}
          <div className="lg:w-2/3">
            <img
              src={About4}
              alt="Food"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="my-12 sm:my-16 md:my-24 max-w-6xl flex flex-col items-center justify-center mx-auto font-berlingske">
        <p className="text-[#0A0024] text-[11px] font-bold tracking-wide uppercase font-neutra">
          Refined Purpose.
        </p>
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold italic mb-6 sm:mb-8 md:mb-10">
          Why we journey.
        </h2>
        <span className="w-full px-5 sm:w-3/4 md:w-1/2 flex flex-col gap-6 sm:gap-8 md:gap-10">
          <p className="text-sm sm:text-base md:text-base">
            Our mission is to design seamless, soulful travel experiences that
            elevate the journey itself. With every itinerary, we aim to reduce
            the noise and surface-level gloss that often defines “luxury” and
            replace it with clarity, insight, and intention.
          </p>
          <p className="text-sm sm:text-base md:text-base">
            We lead with questions—never assumptions. And through proactive
            design and expert curation, we deliver journeys that feel personal,
            thoughtful, and quietly exceptional.
          </p>
        </span>
      </section>

      <section className="bg-white border border-black mb-12 sm:mb-16 md:mb-20">
        <TeamSection />
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center justify-start px-4 sm:px-6 md:px-20 my-24 sm:my-32 md:my-72"
        style={{ backgroundImage: `url(${About6})` }}
      >
        <div className="bg-white max-w-md p-6 sm:p-8 md:p-10 text-left shadow-lg font-berlingske">
          <p className="text-[11px] uppercase font-semibold tracking-wide text-[#0A0024] font-neutra">
            Intentional Design
          </p>
          <h2 className="text-lg sm:text-xl md:text-[26px] font-semibold mt-2 text-[#0A0024]">
            How we think.
          </h2>
          <p className="text-xs md:text-[15px] leading-relaxed text-[#0A0024] mt-4">
            We don’t offer cookie-cutter travel. We begin by asking better
            questions— then translate the answers into highly personal, expertly
            balanced itineraries. Our process is rooted in listening, foresight,
            and taste.
          </p>
          <p className="text-xs  md:text-[15px] leading-relaxed text-[#0A0024] mt-4">
            From the moment of inquiry to the final day of the journey, we lead
            with design, not improvisation. Every trip is proactively managed,
            every experience placed with purpose, and every detail handled with
            grace.
          </p>
          <p className="mt-6 text-sm sm:text-base md:text-[14px] text-[#FF7338] font-semibold cursor-pointer font-neutra">
            <a
              href="#"
              className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
              aria-label="Start planning your intentional journey"
            >
              START PLANNING YOUR JOURNEY
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-4 font-berlingske">
        <div className="relative flex justify-center items-center max-w-[960px] mx-auto">
          {/* Left Image */}
          <div className="absolute -left-10 sm:-left-16 md:-left-20 top-1/2 -translate-y-1/2 hidden md:block z-20">
            <img
              src={About7}
              alt="Left visual"
              className="w-40 sm:w-48 md:w-56 h-60 sm:h-72 md:h-80 shadow-md object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="absolute -right-10 sm:-right-16 md:-right-20 top-1/2 -translate-y-1/2 hidden md:block z-20">
            <img
              src={About8}
              alt="RightImage"
              className="w-40 sm:w-48 md:w-56 h-60 sm:h-72 md:h-80 shadow-md object-cover"
            />
          </div>

          {/* Content Box */}
          <div className="bg-[#0A0024] text-white px-4 sm:px-6 md:px-10 py-12 sm:py-16 md:py-24 rounded-none text-center z-10 relative w-full">
            <p className="uppercase text-xs sm:text-sm tracking-[2px] text-white/60 mb-2 font-neutra">
              Trusted Access
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              The company we keep.
            </h2>
            <p className="text-sm sm:text-base md:text-base leading-relaxed max-w-xl mx-auto mb-6">
              Aquila’s strength lies in the caliber of our relationships. Over
              the years, we’ve cultivated a quiet network of exceptional local
              experts—historians, chefs, artisans, sommeliers, and private
              hosts—who welcome our guests with sincerity and discretion.
              <br />
              <br />
              This access allows us to unlock spaces and stories most never
              encounter: a family-run vineyard at dusk, an artisan’s studio
              closed to the public, a museum visit long after closing. These
              moments are not added in—they are designed in from the beginning.
            </p>
            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
              aria-label="Explore beyond any guidebook"
            >
              Go beyond any guidebook
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-12 md:py-20 px-4 sm:px-6 md:px-6 text-center font-berlingske">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase text-xs tracking-[2px] mb-2 font-neutra">
            Conscious Luxury
          </p>
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold mb-4">
            Beauty <br className="md:hidden" /> with integrity.
          </h2>
          <p className="text-sm sm:text-base md:text-base mb-4">
            True luxury doesn’t compromise. <br />
            We are proud to hold the Biosphere Sustainable Lifestyle 2025
            certification— a reflection of our commitment to sustainability,
            authenticity, and cultural respect.
          </p>
          <p className="text-sm sm:text-base md:text-base mb-6">
            We don’t just promise responsible travel—we test it. Our experiences
            are vetted firsthand, including by travelers with different mobility
            levels, ensuring that what we offer is both elegant and inclusive.
            Every journey supports local economies, preserves tradition, and
            honors the environment.
          </p>
          <a
            href="#"
            className="uppercase text-xs sm:text-sm tracking-widest text-[#F76434] font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-[#F76434] font-neutra"
            aria-label="Learn more about our conscious luxury"
          >
            Learn More
          </a>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 flex flex-col md:flex-row justify-center gap-4 sm:gap-6 max-w-5xl mx-auto">
          <img
            src={About9}
            alt="Experience 1"
            className="w-full md:w-1/3 h-48 sm:h-64 md:h-auto object-cover"
          />
          <img
            src={About10}
            alt="Experience 2"
            className="w-full md:w-1/3 h-48 sm:h-64 md:h-auto object-cover"
          />
          <img
            src={About11}
            alt="Experience 3"
            className="w-full md:w-1/3 h-48 sm:h-64 md:h-auto object-cover"
          />
        </div>
      </section>

      <div className="bg-[#EDF5FC] mt-12 sm:mt-16 md:mt-20 mb-12 font-berlingske">
        <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-[85rem] ml-auto gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:w-1/2 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-4 py-6 sm:py-8 lg:py-10">
            <p className="text-[#0A0024] text-[11px] font-bold tracking-wide uppercase font-neutra">
              Seamless Support
            </p>
            <h1 className="text-xl sm:text-2xl lg:text-[28px] mt-2 text-[#0A0024] leading-snug">
              Global Presence
            </h1>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#0A0024] leading-relaxed">
              Our team spans continents, languages, and time zones—ensuring
              there is always someone ready to support you and your clients,
              wherever and whenever needed. This isn’t just a logistical
              choice—it’s a philosophical one.
            </p>
            <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[16px] text-[#0A0024] leading-relaxed">
              While we respect our rest, we design our availability around your
              peace of mind. Aquila’s global structure allows for continuous
              care with a personal touch.
            </p>
            <p className="mt-8 sm:mt-10 lg:mt-12 text-sm sm:text-base lg:text-[16px] text-[#FF7338] font-semibold cursor-pointer font-neutra">
              <a
                href="#"
                className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338]"
                aria-label="Start planning your global escape"
              >
                START PLANNING YOUR ESCAPE
              </a>
            </p>
          </div>
          <div className="lg:w-2/3">
            <img
              src={About12}
              alt="Family"
              className="w-full h-64 sm:h-80 lg:h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
