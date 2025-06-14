import React from "react";
import weeding from "../../../public/images/city-gallery-img2-1536x1109.jpg (1).png";

const Destination_wedding = () => {
  return (
    <div className="bg-[#EDF5FC] mx-4 sm:mx-8 lg:mx-20 mb-16 lg:mb-20 font-berlingske mt-20">
      <div className="flex flex-col lg:flex-row items-stretch justify-between max-w-7xl mx-auto gap-8">
        {/* Image Section */}
        <div className="lg:w-1/2 w-full">
          <img
            src={weeding}
            alt="Destination Wedding"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-10 py-10 text-[#0A0024]">
          <p className="text-[#0A0024] font-neutra text-[12px] leading-[19px] tracking-[1.56px] uppercase align-middle mb-2">
            DESTINATION WEDDING
          </p>
          <p className="font-semibold text-[36px] leading-[44px] tracking-[0em] align-middle font-berlingske text-[#0A0024] mb-2">
            Your love story,
          </p>
          <p className="font-berlingske font-semibold text-[36px] leading-[44px] tracking-[0em] align-middle text-[#0A0024] mb-4">
            magnificently told.
          </p>
          <p className="font-berlingske font-normal text-[20px] leading-[28px] tracking-[0.01em] align-middle text-[#0A0024] mb-5">
            Celebrate love with the unparalleled elegance and sophistication of
            Aquila’s destination weddings. From intimate gatherings in romantic,
            hidden villas to lavish celebrations in world-renowned venues, our
            meticulous attention ensures your special day is flawlessly
            executed.
          </p>
          <p className="font-berlingske font-normal text-[20px] leading-[28px] tracking-[0.01em] align-middle text-[#0A0024] mb-8">
            Every moment is designed around your dreams—exceptional locations,
            exquisite details, and a commitment to perfection. Entrust your
            vision to our wedding specialists, and together we'll create a day
            that's authentically yours, undeniably luxurious, and utterly
            unforgettable.
          </p>
          <p className="text-xs leading-[19px] tracking-widest uppercase align-middle font-neutra text-[#FF7338]">
            BEGIN YOUR WEDDING JOURNEY{" "}
            <span className="ml-2 sm:ml-6">LEARN MORE</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Destination_wedding;
