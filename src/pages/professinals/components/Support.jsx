import React from 'react';
import flash from '@/assets/icons/professionals/flash.svg';
import bell from '@/assets/icons/professionals/bell.svg';
import sort from '@/assets/icons/professionals/sort.svg';
import timer from '@/assets/icons/professionals/timer.svg';
import IconListItem from '../../../components/IconListItem';
import left_overlap from '/images/professinals/left_overlap.png' 
import right_overlap from '/images/professinals/right_overlap.png' 


const listItems = [
    { icon: sort, text: "Efficient Messaging" },
    { icon: bell, text: "Emergency Support" },
  { icon: flash, text: "Prompt Responses" },
  { icon: timer, text: "72-Hour Proposals" }
];

const Support = () => {
  return (
      
    <div className='flex items-center justify-center py-16 bg-[#fff]'>

   


      <div className='relative flex flex-col gap-8 items-center text-center bg-[#0A0024] py-16 w-[50%]  z-10'>

         {/* Left Overlapping Image */}
      <img 
        src={left_overlap} 
        alt="Left decorative element" 
        className="absolute -left-[35%] top-1/2 -translate-y-1/2 w-[400px] h-auto z-0" 
      />
      
      {/* Right Overlapping Image */}
      <img 
        src={right_overlap} 
        alt="Right decorative element" 
        className="absolute -right-[35%] top-1/2 -translate-y-1/2 w-[400px] h-auto z-0" 
      />
        
        <h1 className='text-[12px] text-[#F2F2F2] leading-[19px] font-neutra tracking-[1.56px]'>
        Support 24/7
        </h1>

        <div className='flex flex-col items-center justify-center mt-4 '>
          <h1 className='text-[36px] text-white leading-[44px] font-berlingske font-semibold'>
          Continuous, clear
          </h1>
          <h1 className='text-[36px] text-white leading-[44px] font-berlingske font-semibold'>
          Communication
          </h1>
        </div>

        <p className='text-[20px] text-[#fff] leading-[24px]  font-berlingske  tracking-[0.5px]  w-[70%]'>
        Responsive and Efficient Support at All Times.
       </p>

       <p className='text-[20px] text-[#fff] leading-[28px]  font-berlingske  tracking-[0.2px]  w-[70%]'>
       Maintain effortless communication through Mobile,  Email,
SMS, or WhatsApp, with emergency support readily available.
       </p>

       <p className='text-[20px] text-[#fff] leading-[28px]  font-berlingske  tracking-[0.2px]  w-[70%]'>
       Proposals are typically provided within 72 hours, 
ensuring timely and dependable service.
       </p>

       <div className='flex  items-start gap-4'>
       <div className='flex flex-col gap-10 mt-8'>
          {listItems.slice(0,2).map((item, index) => (
            <IconListItem key={index} textColor='text-white' icon={item.icon} text={item.text}  />
          ))}
        </div>
        <div className='flex flex-col gap-10 mt-8'>
          {listItems.slice(2,4).map((item, index) => (
            <IconListItem key={index} textColor='text-white' icon={item.icon} text={item.text}  />
          ))}
        </div>
       </div>
       <h1 className='text-[15px]  text-[#FF7338] leading-[19px] font-neutra  tracking-[1.56px] uppercase '>Request a Personalized Proposal</h1>
      </div>
      </div>
  );
};

export default Support;