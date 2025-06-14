import React from "react";
import WeddingBanner from "../../assets/Img/Wedding/Wedding_Banner.jpg";
import Wedding1 from "../../assets/Img/Wedding/Wedding-1.jpg";
import Wedding2 from "../../assets/Img/Wedding/Wedding-2.jpg";
import Wedding3 from "../../assets/Img/Wedding/Wedding-3.jpg";
import Wedding4 from "../../assets/Img/Wedding/Wedding-4.jpg";
import Wedding5 from "../../assets/Img/Wedding/Wedding-5.jpg";
import Wedding6 from "../../assets/Img/Wedding/Wedding-6.jpg";
import Wedding7 from "../../assets/Img/Wedding/Wedding-7.jpg";
import Icon from "../../assets/Group 21402.svg";

const Wedding = () => {
  return (
    <div>
      <section
        className="relative bg-cover bg-center h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[100vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${WeddingBanner})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
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
              Elegant Escapes
            </p>

            <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4 font-berlingske">
              A love worth <br /> traveling for.
            </h2>

            <p className="text-sm sm:text-base lg:text-base font-medium">
              At Aquila, a wedding is never just a ceremony—it is a symphony of
              moments, delicately orchestrated across landscapes that leave you
              breathless. We craft weddings in Italy and Spain that honor your
              story, without the overwhelm or excess. Just meaning, magic, and
              Mediterranean light.
            </p>

            <p className="mt-8 sm:mt-12 text-xs text-[#FF7338] font-thin uppercase cursor-pointer font-neutra">
              Discover the Art of Destination Weddings
            </p>
          </span>
        </div>

        <div className="bg-white flex justify-center lg:justify-end">
          <div className="relative flex flex-col lg:flex-row items-center justify-between bg-[#F2F2F2] sm:px-6 lg:pl-20 mx-4 sm:mx-6 lg:mx-20 gap-6 sm:gap-8 w-full lg:w-[65%]">
            {/* Image section */}
            <div className="relative lg:absolute top-0 lg:top-20 w-full lg:w-[35%]">
              <img
                src={Wedding1}
                alt="Clelia Romano"
                className="w-full lg:h-[500px] h-full sm:h-80 object-cover"
              />
            </div>

            {/* Text section */}
            <div className="w-full lg:w-[55%] h-full flex flex-col justify-center ml-auto md:pt-16 px-4 sm:px-6 lg:pr-20 lg:pl-4 sm:pb-8">
              <p className="text-[#0A0024] text-[10px] sm:text-[11px] font-thin tracking-wide uppercase font-neutra">
                Insider Expertise
              </p>

              <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold mt-2 text-[#0A0024] leading-snug">
                Meet Clelia Romano.
              </h1>

              <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] font-medium leading-relaxed">
                Born in Rome and raised on romance, Clelia began her journey
                planning her own wedding—and quickly discovered how costly and
                confusing it can be for foreigners to navigate the wedding world
                abroad. That experience became her mission: to make
                extraordinary weddings not only possible, but personal and
                accessible.
              </p>

              <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] font-medium leading-relaxed">
                Clelia doesn’t just plan. She curates. With a warm heart, sharp
                eye, and deeply rooted local relationships, she transforms
                complex logistics into effortless beauty.
              </p>

              <p className="mt-8 mb-4 sm:mb-0 text-xs text-[#FF7338] uppercase font-thin cursor-pointer font-neutra">
                GET IN TOUCH WITH CLELIA
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white flex flex-col md:flex-row w-full h-auto md:p-8 lg:p-20">
        <div className="bg-[#0a0024] text-white md:w-1/2 w-full px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-24 flex items-center">
          <div className="mx-auto font-berlingske flex flex-col gap-3">
            <p className="uppercase text-[10px] sm:text-xs tracking-[1.6px] font-neutra">
              Tailored Elegance
            </p>

            <h3 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-6">
              Weddings with soul,
              <br className="hidden md:block" />
              not scripts.
            </h3>

            <p className="text-sm sm:text-base lg:text-base text-white mb-4 leading-relaxed">
              Clelia’s approach is guided by two <br /> principles: honesty and
              elegance. No <br /> inflated prices. No off-the-shelf packages.{" "}
              <br />
              Just thoughtful design, locally-sourced <br /> excellence, and
              seamless execution.
            </p>

            <p className="text-sm sm:text-base lg:text-base text-white mb-4 leading-relaxed">
              She works exclusively in Italy and Spain <br /> — because that’s
              what she knows best. <br /> From a terraced vineyard in Tuscany to
              a <br /> seaside estate in Menorca, your setting is <br />
              chosen with care, not convenience.
            </p>

            <p className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underlinefont-neutra flex gap-10">
              <span>Tell Us Your Vision</span>{" "}
              <span>Design Something Personal</span>
            </p>
          </div>
        </div>

        <div className="md:w-[70%] w-full h-64 sm:h-80 md:h-auto">
          <img
            src={Wedding7}
            alt="Accessibility Mountain Experience"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
      </section>

      <section className="mt-8 sm:mt-12 lg:mt-20 mb-8 sm:mb-12 lg:mb-20 font-berlingske sm:px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-start bg-[#F2F2F2] mx-auto gap-6 sm:gap-24">
          <div className="md:w-[55%] w-full h-64 sm:h-80 md:h-[35rem]">
            <img
              src={Wedding2}
              alt="Luxury Travel Container"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:w-1/3 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-20 lg:pl-4 pt-8 sm:pt-10">
            <p className="text-[#0A0024] text-[10px] sm:text-[11px] font-bold tracking-wide uppercase font-neutra">
              Trusted Network
            </p>

            <h1 className="text-xl sm:text-2xl lg:text-[28px] font-bold mt-2 text-[#0A0024] leading-snug">
              Insider access, <br /> real connections.
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed">
              Clelia’s longstanding relationships mean <br /> you gain access to
              hidden gems, respected <br /> artisans, and fair pricing that most
              outsiders <br /> never see. Every floral arrangement, every <br />
              candlelit table, every string quartet is <br /> chosen with intent
              and sourced with <br /> integrity.
            </p>

            <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed">
              You get more than a beautiful wedding. You <br /> get peace of
              mind.
            </p>

            <p className="mt-8 sm:mt-5 text-xs text-[#FF7338] font-thin uppercase cursor-pointer font-neutra">
              Access Our Trusted Network
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#0A0027] text-white py-8 sm:py-12 lg:py-36 px-4 sm:px-6 lg:pl-20">
        <div className="mx-auto flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/3 text-left flex flex-col gap-5 font-berlingske">
            <span>
              <p className="uppercase text-[10px] sm:text-xs tracking-[1.6px] text-white font-neutra mb-2">
                Personal Story
              </p>
              <h2 className="text-lg sm:text-xl lg:text-3xl font-semibold mb-4">
                A celebration
                <br /> that reflects you.
              </h2>
            </span>
            <p className="text-sm sm:text-base lg:text-base text-white mb-4">
              Your wedding should feel like you—elegant <br /> but unstuffy,
              personal yet polished. With <br /> Aquila and Clelia, every detail
              is a reflection <br /> of your story. Rooted in culture, crafted
              with <br /> taste, and elevated through experience.
            </p>
            <a
              href="#"
              className="uppercase text-xs tracking-widest text-[#FF7338] font-thin hover:underline focus:outline-none focus:ring-2 focus:ring-[#FF7338] font-neutra"
              aria-label="Start planning your accessible escape"
            >
              Craft Your Story
            </a>
          </div>

          <div className="md:w-[60%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-0">
            <img
              src={Wedding3}
              alt="Accessible Destination 1"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
            <img
              src={Wedding4}
              alt="Accessible Destination 2"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
            <img
              src={Wedding5}
              alt="Accessible Destination 3"
              className="w-full object-cover h-48 sm:h-64 md:h-[25rem]"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col lg:flex-row items-center justify-between text-center bg-[#F2F2F2] my-6 sm:my-12 lg:my-20 pb-8 sm:py-12 lg:py-28 sm:px-6 lg:mr-20 max-w-full sm:max-w-4xl lg:max-w-5xl mx-auto">
        <div className="lg:absolute lg:-left-[20rem] w-full lg:w-auto">
          <img
            src={Wedding6}
            alt="Clelia Romano"
            className="w-[50rem] h-64 sm:h-80 lg:h-[27rem] object-contain lg:object-cover"
          />
        </div>

        <div className="lg:w-1/2 h-full flex flex-col justify-center px-4 sm:px-6 lg:pr-20 lg:pl-4 lg:ml-[30rem] py-8 sm:py- font-berlingske mt-6 lg:mt-0">
          <p className="text-[#0A0024] text-[10px] sm:text-[11px] font-thin tracking-wide uppercase font-neutra">
            Effortless Planning
          </p>

          <h1 className="text-xl sm:text-2xl lg:text-[28px] font-semibold mt-2 text-[#0A0024] leading-snug">
            Begin with <br /> a conversation
          </h1>

          <p className="mt-4 sm:mt-5 text-sm sm:text-[16px] text-[#0A0024] leading-relaxed max-w-md mx-auto">
            Whether you’ve been dreaming <br /> of a hilltop villa, a barefoot
            beach vow, or a candlelit <br />
            courtyard in Seville, Clelia is here to guide every step. <br /> The
            journey starts with a single conversation—and <br /> unfolds into
            something unforgettable.
          </p>

          <p className="mt-8 sm:mt-12 text-sm sm:text-[16px] text-[#FF7338] font-semibold cursor-pointer font-neutra">
            Book Your Consultation
          </p>
        </div>
      </section>
    </div>
  );
};

export default Wedding;
