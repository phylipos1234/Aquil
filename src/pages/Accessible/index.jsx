import React from "react";
import AccessibleBanner from "../../assets/Img/Accessible/Accessible_Banner.jpg";
import Accessible1 from "../../assets/Img/Accessible/Accessible-1.jpg";
import Accessible2 from "../../assets/Img/Accessible/Accessible-2.jpg";
import Accessible3 from "../../assets/Img/Accessible/Accessible-3.jpg";
import Accessible4 from "../../assets/Img/Accessible/Accessible-4.jpg";
import Accessible5 from "../../assets/Img/Accessible/Accessible-5.jpg";
import Icon from "../../assets/Group 21402.svg";

const Accessible = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[50vh] sm:h-[70vh] md:h-[100vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${AccessibleBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
      </section>

      <section className="bg-[#0A0027] text-white py-8 sm:py-12 lg:py-36 px-4 sm:px-6 lg:pl-20">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-14">
          {/* Left Content */}
          <div className="md:w-1/3 text-left flex flex-col gap-5 font-berlingske">
            <p className="uppercase text-[10px] sm:text-xs tracking-[1.6px] text-white font-neutra mb-2">
              Accessible Tourism
            </p>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4">
              Luxury, Measured <br /> in Consideration.
            </h2>
            <p className="text-sm sm:text-base lg:text-base text-white mb-4">
              At Aquila, we believe the world should open its arms <br /> to
              every traveler — with grace, with intention, and <br /> with
              beauty.
            </p>
            <p className="text-sm sm:text-base lg:text-base text-white mb-4">
              Our accessible escapes are not adapted. They’re <br /> designed —
              from the ground up — to welcome, <br /> indulge, and inspire.
            </p>
            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
              aria-label="Start planning your accessible escape"
            >
              START PLANNING YOUR ESCAPE
            </a>
          </div>

          {/* Right Images */}
          <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-0">
            <img
              src={Accessible1}
              alt="Accessible Destination 1"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
            <img
              src={Accessible2}
              alt="Accessible Destination 2"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
            <img
              src={Accessible3}
              alt="Accessible Destination 3"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
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
              Accessible Tourism
            </p>

            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 font-berlingske">
              Access, <br /> By Design.
            </h2>

            <p className="text-sm sm:text-base lg:text-base font-medium">
              Accessibility is not a feature. It’s a philosophy — one <br />
              that informs every detail we curate.
            </p>

            <p className="text-sm sm:text-base lg:text-base font-medium mt-4">
              We believe true luxury lies in anticipation. In quiet <br />
              adjustments that feel seamless. In journeys that <br /> honour
              both freedom and comfort, without <br /> compromise.
            </p>
          </span>
        </div>

        <div className="mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-20 px-4 sm:px-6 md:px-20">
          <div className="md:w-full">
            <img
              src={Accessible4}
              alt="Accessible Experience"
              className="w-full h-64 sm:h-80 md:h-[35rem] object-cover"
            />
          </div>

          <div className="md:w-1/2 text-left font-berlingske">
            <p className="uppercase text-xs tracking-[1.6px] mb-2 font-neutra">
              Curated Experiences
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
              Journeys Without Barriers. <br /> Stories Without Limits.
            </h3>

            <p className="text-sm sm:text-base md:text-base mb-4 font-medium">
              From silent alpine lodges in the Swiss peaks to sun- <br />
              washed Amalfi villas reimagined for ease, every Aquila <br />
              experience is shaped by both beauty and <br /> understanding.
            </p>

            <p className="text-sm sm:text-base md:text-base mb-6 font-medium">
              Whether you’re drifting along Mediterranean cliffs <br /> with
              discreet support, exploring Parisian galleries <br /> with
              sensory-inclusive interpretation, or arriving at <br />{" "}
              destinations where access is never an afterthought — <br />
              we create travel that quietly adjusts to you. Each <br />{" "}
              itinerary is a composition of elegance, simplicity, and <br />
              possibility.
            </p>

            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
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
            <p className="uppercase text-xs tracking-[1.6px] text-white mb-2 font-neutra">
              The Quiet Art of Inclusion
            </p>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-7">
              What Accessibility <br className="hidden md:block" /> Means to
              Aquila.
            </h3>

            <p className="text-sm sm:text-base md:text-base text-white mb-4 leading-relaxed">
              To us, accessibility means crafting journeys that never <br />{" "}
              call attention to what they accommodate — where <br /> support is
              present but discreet, and every space is as <br /> intuitive as it
              is beautiful. It’s the art of tailoring <br /> moments to every
              sense, every pace, every guest.
            </p>

            <p className="text-sm sm:text-base md:text-base text-white mb-6 leading-relaxed">
              Whether it’s ascending alpine trails with expert <br />
              companions or discovering wild landscapes made <br /> gently
              reachable, we ensure that elegance is never lost <br /> to
              elevation — only revealed in how seamlessly it’s <br />
              offered.
            </p>
            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
              aria-label="Speak to a travel curator"
            >
              Speak to a curator
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-[70%] w-full h-64 sm:h-80 md:h-auto">
          <img
            src={Accessible5}
            alt="Accessibility Mountain Experience"
            className="w-full h-full object-cover filter grayscale -scale-x-100"
          />
        </div>
      </section>
    </div>
  );
};

export default Accessible;
