import React from 'react';
import happy_people from '/images/professinals/happy_people.png';
import landing from '@/assets/icons/professionals/landing.svg';
import bed from '@/assets/icons/professionals/bed.svg';
import checked from '@/assets/icons/professionals/checked.svg';
import IconListItem from '@/components/IconListItem';

const listItems = [
  { icon: landing, text: "AIRPORT TRANSFERS" },
  { icon: bed, text: "ROOM UPGRADES" },
  { icon: checked, text: "High Standards" }
];

const Preparation = () => {
  return (
    <div className="relative  mt-12 "> {/* Set fixed/relative height */}
      {/* Image container (full width/height) */}
      <img 
        src={happy_people} 
        alt="happy_people" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay content (positioned absolutely) */}
      {/* <div className="absolute  top-0 right-0 bg-red-400 flex items-center ">  */}
        <div className=" absolute  top-[20%] right-[5%] w-1/4 p-10 text-[#0A0024] bg-[#fff]   "> 
          <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase">Effortless Preparation </p>
                      <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
                      Accessible resources, 
                     
                      </h1>
                      <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
                      seamless planning
                      </h1>
                      <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[0.2px]  mt-10  '>
                      Easily access detailed sample
itineraries and a comprehensive 
digital knowledge hub designed 
specifically for travel professionals 
and their clients.


                         </p>
          
          
                     
          
                         <h1 className='text-[15px]  text-[#FF7338] leading-[19px] font-neutra  tracking-[1.56px] mt-8 font-semibold uppercase  '>Request Proposal</h1>
        </div>
      {/* </div> */}
    </div>
  );
};


export default Preparation