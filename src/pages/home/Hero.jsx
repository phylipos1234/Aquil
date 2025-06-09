import React, { useRef } from "react";
import HeroImages from "../../../public/images/Hero.jpg";
import country1 from "../../assets/Layer_1 (1).svg";
import country2 from "../../assets/Layer_1 (2).svg";
import country3 from "../../assets/Layer_1 (3).svg";
import country4 from "../../assets/Layer_1 (4).svg";
import country5 from "../../assets/Layer_1 (5).svg";
import country6 from "../../assets/Layer_1 (6).svg";
import country7 from "../../assets/Layer_1 (7).svg";
import country8 from "../../assets/Layer_1 (8).svg";
import About_aquila from "./About_aquila";
import Featured_Expriance from "./Featured_Expriance";
import Trip_Planner from "./Trip_Planner";
import Accessible_tourism from "./Accessible_tourism";
import Destination_wedding from "./Destination_wedding";
import Sustainability from "./Sustainability";
import Location from "./Location";
import Explore_Jornal from "./Explore_Jornal";

const Hero = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-auto relative overflow-hidden">
        {/* Background Image */}
        <img
          src={HeroImages}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Hero Text - moved up by 30px */}
        <div className="absolute bottom-[162px] left-8 w-[300px] text-white">
          <p className="text-3xl leading-snug font-semibold pb-14">
            Where extraordinary journeys become your story.
          </p>
        </div>

        {/* Country Slider with arrows - moved up by 30px */}
        <div className="absolute bottom-[46px] w-full flex items-center justify-center px-20 pb-24">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="text-white bg-black/50 p-2 rounded-full mr-4 hover:bg-black/70"
          >
            &#8592;
          </button>

          {/* Scrollable country icons */}
          <div
            ref={scrollRef}
            className="flex gap-20 overflow-hidden w-[90%]" // Changed 'overflow-x-auto' to 'overflow-hidden'
            style={{ scrollBehavior: "smooth" }}
          >
            {[...Array(2)].map((_, index) => (
              <React.Fragment key={index}>
                {[
                  country1,
                  country2,
                  country3,
                  country4,
                  country5,
                  country6,
                  country7,
                  country8,
                ].map((img, idx) => (
                  <img
                    key={`${index}-${idx}`}
                    src={img}
                    alt={`Country ${idx + 1}`}
                    className="h-12 w-auto flex-shrink-0"
                  />
                ))}
              </React.Fragment>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="text-white bg-black/50 p-2 rounded-full ml-4 hover:bg-black/70"
          >
            &#8594;
          </button>
        </div>
      </div>

      {/* Sections below hero */}
      <div>
        <About_aquila />
      </div>
      <div>
        <Featured_Expriance />
      </div>
      <div>
        <Trip_Planner />
      </div>
      <div>
        <Accessible_tourism />
      </div>
      <div>
        <Destination_wedding />
      </div>
      <div>
        <Sustainability />
      </div>
      <div>
        <Location />
      </div>
      <Explore_Jornal />
    </>
  );
};

export default Hero;
