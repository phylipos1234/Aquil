import React from 'react'
import authenticity from '/images/professinals/auth.png' 
import boutique from '@/assets/icons/professionals/boutique.svg'
import experience from '@/assets/icons/professionals/experience.svg'
import emerging from '@/assets/icons/professionals/emerging.svg'
import IconListItem from '@/components/IconListItem'

const listItems = [
    { icon: boutique, text: "Boutique partnership" },
    { icon: experience, text: "Authentic experiences" },
    { icon: emerging, text: "emerging destinations" }
  ];
  

  
const Experts = () => {
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


           

               <div className={`flex flex-col gap-6 mt-8 `}>
      {listItems.map((item, index) => (
        <IconListItem key={index} icon={item.icon} text={item.text} />
      ))}
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

export default Experts