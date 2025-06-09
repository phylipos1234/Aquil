import React from 'react'
import authenticity from '/images/professinals/auth.png' 
import boutique from '@/assets/icons/professionals/boutique.svg'

const Authenticity = () => {
  return (
      <div className="bg-[#EDF5FC] mx-10 mb-12 font-berlingske flex flex-row ">
          
          {/* Text Section */}
          <div className="lg:w-1/2 h-full flex flex-col justify-center p-16">
            <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px]">AUTHENTICITY </p>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
            Exclusive Access & 
            </h1>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
             Premium Experiences
            </h1>
            <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[1%]  mt-10 '>
               Thoughtfully crafted journeys and premium business travel services designed specifically for your discerning clients. Aquila provides exclusive travel benefits, tailored itineraries, and meticulous execution, ensuring every journey is exceptional and effortless, reflecting your agency’s high standards.
               </p>


            {/* Lists */}
               <div className='flex flex-col gap-4 mt-6'>
                <div className='flex flex-row gap-4 items-center'>
                    <img src={boutique} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px]">AUTHENTICITY </p>
                    </div>

                    <div className='flex flex-row gap-4 items-center'>
                    <img src={boutique} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px]">AUTHENTICITY </p>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                    <img src={boutique} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px]">AUTHENTICITY </p>
                    </div>
               </div>
            
          </div>
  
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img 
              src={authenticity} 
              alt="authenticity" 
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    );
  
}

export default Authenticity