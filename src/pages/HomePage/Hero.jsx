import React, { useRef } from 'react';
import HeroImages from '../../../public/images/Hero.jpg';
import Header from '../../components/Header';
import country1 from '../../assets/Layer_1 (1).svg';
import country2 from '../../assets/Layer_1 (2).svg';
import country3 from '../../assets/Layer_1 (3).svg';
import country4 from '../../assets/Layer_1 (4).svg';
import country5 from '../../assets/Layer_1 (5).svg';
import country6 from '../../assets/Layer_1 (6).svg';
import country7 from '../../assets/Layer_1 (7).svg';
import country8 from '../../assets/Layer_1 (8).svg';
import About_aquila from './About_aquila';
import Featured_Expriance from './Featured_Expriance';
import Trip_Planner from './Trip_Planner';
import Accessible_tourism from './accessible_tourism';
import Destination_wedding from './Destination_wedding';
import Sustainability from './Sustainability';

const Hero = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <>
     <div className="w-full h-auto relative overflow-hidden">
      <img 
        src={HeroImages} 
        alt="Hero" 
        className="w-full h-full object-cover"
      />

      <div className="absolute top-8 left-0 w-full">
        <Header />
      </div>

      <div className="absolute bottom-36 left-8 w-[300px] h-[179px] text-white">
        <p className="text-3xl leading-snug font-semibold">
          Where extraordinary journeys become your story.
        </p>
      </div>

      {/* Country slider */}
      <div className="absolute bottom-16 w-full flex items-center justify-center px-12"> {/* Reduced the bottom position */}
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="text-white bg-black/50 p-2 rounded-full mr-8 hover:bg-black/70"
        >
          &#8592;
        </button>

        {/* Scrollable images container */}
        <div
          ref={scrollRef}
          className="flex gap-16 overflow-x-auto scrollbar-hide w-[90%]" // Increased width of the container
        >
          {/* Replicate the images for a smooth sliding experience */}
          {[...Array(2)].map((_, index) => (
            <>
              {[country1, country2, country3, country4, country5, country6, country7, country8].map((img, idx) => (
                <img
                  key={`${index}-${idx}`} // Add unique key
                  src={img}
                  alt={`Country ${idx + 1}`}
                  className="h-20 w-auto flex-shrink-0"
                />
              ))}
            </>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="text-white bg-black/50 p-2 rounded-full ml-8 hover:bg-black/70"
        >
          &#8594;
        </button>
      </div>
    </div>
    <div>
    <About_aquila/>
    </div>
    <div>
    <Featured_Expriance/>
    </div>
   <div>
    <Trip_Planner/>
   </div>
<div>
<Accessible_tourism/>
</div>
<div>
<Destination_wedding/>
</div>
<div>
    <Sustainability/>
</div>
    </>

   
  );
};

export default Hero;
