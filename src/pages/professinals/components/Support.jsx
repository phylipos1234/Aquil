import React from 'react';
import binocular from '@/assets/icons/professionals/binocular.svg';
import commission from '@/assets/icons/professionals/commission.svg';
import money from '@/assets/icons/professionals/money.svg';
import IconListItem from '../../../components/IconListItem';
import left_overlap from '/images/professinals/left_overlap.png' 
import right_overlap from '/images/professinals/right_overlap.png' 


const listItems = [
  { icon: binocular, text: "clear pricing" },
  { icon: commission, text: "adaptable commission" },
  { icon: money, text: "from €2500" },
  { icon: money, text: "from €2500" }
];

const Support = () => {
  return (
      
    <div className='flex items-center justify-center'>

   


      <div className='relative flex flex-col gap-4 items-center text-center bg-[#0A0024] py-8 w-[50%] h-[600px] z-10'>

         {/* Left Overlapping Image */}
      <img 
        src={left_overlap} 
        alt="Left decorative element" 
        className="absolute -left-[25%] top-1/2 -translate-y-1/2 w-[300px] h-auto z-0" 
      />
      
      {/* Right Overlapping Image */}
      <img 
        src={right_overlap} 
        alt="Right decorative element" 
        className="absolute -right-[25%] top-1/2 -translate-y-1/2 w-[300px] h-auto z-0" 
      />
        
        <h1 className='text-[12px] text-[#F2F2F2] leading-[19px] font-neutra tracking-[1.56px]'>
          TAILORED EXPERIENCE
        </h1>

        <div className='flex flex-col items-center justify-center mt-4'>
          <h1 className='text-[36px] text-white leading-[44px] font-berlingske font-semibold'>
            Curate extraordinary
          </h1>
          <h1 className='text-[36px] text-white leading-[44px] font-berlingske font-semibold'>
            Journeys.
          </h1>
        </div>

        <p className='text-[20px] text-white leading-[28px] font-berlingske tracking-[1%] w-[40%]'>
          Thoughtfully crafted journeys and premium business travel services designed specifically for your discerning clients...
        </p>

        <div className='flex gap-10 mt-8'>
          {listItems.slice(0,2).map((item, index) => (
            <IconListItem key={index} textColor='text-white' icon={item.icon} text={item.text} />
          ))}
        </div>
        <div className='flex gap-10 mt-8'>
          {listItems.slice(2,4).map((item, index) => (
            <IconListItem key={index} textColor='text-white' icon={item.icon} text={item.text} />
          ))}
        </div>
      </div>
      </div>
  );
};

export default Support;