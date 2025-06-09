import React from 'react'
import authenticity from '/images/professinals/auth.png' 
import boutique from '@/assets/icons/professionals/boutique.svg'
import experience from '@/assets/icons/professionals/experience.svg'
import emerging from '@/assets/icons/professionals/emerging.svg'

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
            <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[1%]  mt-10 w-[70%] '>
            Gain direct access travel to a carefully curated portfolio of unique and luxurious experiences, accommodations, and destinations. Each offering is expertly chosen to resonate deeply with sophisticated travelers seeking exclusivity, authenticity, and refined elegance.
               </p>


            {/* Lists */}
               <div className='flex flex-col gap-6 mt-8 '>
                <div className='flex flex-row gap-4 items-center'>
                    <img src={boutique} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[15px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase ">Boutique partnership </p>
                    </div>

                    <div className='flex flex-row gap-4 items-center'>
                    <img src={experience} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[15px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase ">Authentic experiences</p>
                    </div>
                    <div className='flex flex-row gap-4 items-center'>
                    <img src={emerging} alt="boutique" className="" />
                <p className="text-[#0A0024] text-[15px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase">emerging destinations</p>
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