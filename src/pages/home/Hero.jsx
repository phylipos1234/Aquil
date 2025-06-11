<<<<<<< HEAD
import React, { useRef, useState } from 'react';
import HeroImages from '../../../public/images/Hero.jpg';
import Header from '../../components/Header';
import AUSTRIA from '../../../src/assets/AUSTRIA.svg';
import FRANCE from '../../../src/assets/FRANCE.svg';
import GERMANY from '../../../src/assets/GERMANY.svg';
import ITALY from '../../../src/assets/ITALY.svg';
import SPAIN from '../../../src/assets/Spain.svg';
import PORTUGAL from '../../../src/assets/PORTUGAL.svg';
import SWEDEN from '../../../src/assets/SWEDEN.svg';
import SWITZERLAND from '../../../src/assets/SWITZERLAND.svg';
import About_aquila from './About_aquila';
import Featured_Expriance from './Featured_Expriance';
import Trip_Planner from './Trip_Planner';
import Accessible_tourism from './Accessible_tourism';
import Destination_wedding from './Destination_wedding';
import Sustainability from './Sustainability';
import Location from './Location';
import Explore_Jornal from './Explore_Jornal';
import Footer from '../../components/Footer';
import rightArrow from '../../../public/images/SVG (1).svg';
import leftArrow from '../../../public/images/SVG.svg';
=======
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
>>>>>>> refs/remotes/origin/main

const Hero = () => {
  const scrollRef = useRef(null);
  const cityCardWidth = 120;
  const [currentIndex, setCurrentIndex] = useState(0);

  const countries = [
    { img: AUSTRIA, name: 'AUSTRIA' },
    { img: FRANCE, name: 'FRANCE' },
    { img: GERMANY, name: 'GERMANY' },
    { img: ITALY, name: 'ITALY' },
    { img: SPAIN, name: 'SPAIN' },
    { img: PORTUGAL, name: 'PORTUGAL' },
    { img: SWEDEN, name: 'SWEDEN' },
    { img: SWITZERLAND, name: 'SWITZERLAND' },
    { img: ITALY, name: 'ITALY' },
    { img: SPAIN, name: 'SPAIN' },
    { img: PORTUGAL, name: 'PORTUGAL' },
    { img: SWEDEN, name: 'SWEDEN' },
  ];

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full h-auto relative overflow-hidden">
        <img
          src={HeroImages}
          alt="Hero"
          className="w-full h-[100vh] object-cover"
        />

        <div className="absolute top-8 left-0 w-full">
          <Header />
        </div>

        <div className="absolute bottom-44 left-4 sm:left-8 w-[90%] max-w-md text-white">
          <p className="text-xl sm:text-2xl md:text-3xl leading-snug font-semibold pb-10">
            Where extraordinary journeys become your story.
          </p>
        </div>

        <div className="absolute bottom-[80px] w-full flex items-center justify-center px-4 sm:px-8 md:px-20">
          <div className="flex items-center w-full max-w-7xl mx-auto h-20 overflow-hidden">
            <button onClick={scrollLeft} className="block mr-4">
              <img src={leftArrow} alt="Scroll Left" className="w-4 h-4" />
            </button>

            <div
              ref={scrollRef}
              className="flex gap-6 sm:gap-8 items-center overflow-hidden w-full"
            >
              <div
                className="flex gap-6 sm:gap-8 items-center w-full transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * cityCardWidth}px)` }}
              >
                {countries.map((country, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-2 flex-shrink-0 w-[80px] sm:w-[100px] md:w-[120px]"
                  >
                    <img
                      src={country.img}
                      alt={country.name}
                      className="h-10 sm:h-12"
                    />
                    <p className="text-white text-[10px] sm:text-xs mt-1 tracking-wide">{country.name}</p>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={scrollRight} className="block">
              <img src={rightArrow} alt="Scroll Right" className="w-4 h-4" />
            </button>
          </div>
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
