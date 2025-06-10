import React from 'react'
import cheff from '/images/professinals/cheff.png' 
import trees from '@/assets/icons/professionals/trees.svg'
import wedding_ring from '@/assets/icons/professionals/wedding_ring.svg'
import forks from '@/assets/icons/professionals/forks.svg'
import wine_glass  from '@/assets/icons/professionals/wine_glass .svg'
import quill from '@/assets/icons/professionals/quill.svg'
import bicycle from '@/assets/icons/professionals/bicycle.svg'
import IconListItem from '@/components/IconListItem'

const listItems = [
    { icon: trees, text: "Adventure" },
    { icon: wedding_ring, text: "weddings" },
    { icon: forks, text: "gastronomy" },
    { icon: wine_glass, text: "wine tours" },
    { icon: quill, text: "culture" },
    { icon: bicycle, text: "transport options" }
  ];
  

  
const Experts = () => {
  return (
      <div className="bg-[#EDF5FC] mx-10 mb-12 font-berlingske flex flex-row ">
          
          {/* Text Section */}
          <div className="lg:w-1/2 h-full flex flex-col justify-center p-16">
            <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase ">Curated by Experts </p>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
            Expertly Selected
            </h1>
            <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
            Suppliers
            </h1>
            <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[1%]  mt-10 w-[70%] '>
            Our carefully selected partners specialize
 in adventure travel, Gastronomy & Culinary Tours, Cultural Immersion, Wedding Planning, Wine Experiences, and Rail and Private Transportation (excluding flights).

               </p>


           

               <div className={`grid grid-cols-1 sm:grid-cols-2  gap-6 mt-8 `}>
      {listItems.map((item, index) => (
        <IconListItem key={index} icon={item.icon} text={item.text} />
      ))}
    </div>
            
          </div>
  
          {/* Image Section */}
          <div className="lg:w-1/2">
            <img 
              src={cheff} 
              alt="cheff" 
              className="w-full h-full object-cover"
            />
          </div>
      </div>
    );
  
}

export default Experts