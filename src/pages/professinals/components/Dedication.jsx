import React from 'react'
import boat from '/images/professinals/boat.png' 
import support from '@/assets/icons/professionals/support.svg'
import local from '@/assets/icons/professionals/local.svg'
import star from '@/assets/icons/professionals/star.svg'
import IconListItem from '@/components/IconListItem'

const listItems = [
    { icon: support, text: "Concierge Support" },
    { icon: local, text: "Local Team" },
    { icon: star, text: "High Standards" }
  ];
  

  
const Dedication = () => {
  return (
      <div className="bg-[#EDF5FC] mx-10 mb-12 font-berlingske flex flex-row ">

         {/* Image Section */}
         <div className="lg:w-1/2">
            <img 
              src={boat} 
              alt="boat" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Text Section */}
          <div className="lg:w-1/2 h-full flex flex-col justify-center p-16">
            <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase">dedication & presence </p>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
            Consistent quality 
           
            </h1>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
            and reliable support.
            </h1>
            <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[0.2px]  mt-10 w-[70%] '>
            Reliability and consistency define Aquila’s approach. Our dedicated luxury travel concierge team is committed to providing dependable, high-quality support, enabling you to offer seamless, unforgettable luxury experiences without compromise. Trust Aquila to elevate your client's satisfaction and loyalty.
               </p>


           

               <div className={`flex flex-col gap-6 mt-8 `}>
      {listItems.map((item, index) => (
        <IconListItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
            
          </div>
  
         
      </div>
    );
  
}

export default Dedication