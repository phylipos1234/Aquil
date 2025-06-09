import React from 'react';
import amenity from '/images/professinals/amenity.png';
import landing from '@/assets/icons/professionals/landing.svg';
import bed from '@/assets/icons/professionals/bed.svg';
import checked from '@/assets/icons/professionals/checked.svg';
import IconListItem from '@/components/IconListItem';

const listItems = [
  { icon: landing, text: "AIRPORT TRANSFERS" },
  { icon: bed, text: "ROOM UPGRADES" },
  { icon: checked, text: "High Standards" }
];

const Amenities = () => {
  return (
    <div className="relative mx-12 mb-12 "> {/* Set fixed/relative height */}
      {/* Image container (full width/height) */}
      <img 
        src={amenity} 
        alt="amenity" 
        className="w-full h-full object-cover"
      />
      
      {/* Overlay content (positioned absolutely) */}
      <div className="absolute inset-0  flex items-center px-12 "> 
        <div className="w-1/3 p-10 text-[#0A0024] bg-[#fff]   "> 
          <p className="text-[#0A0024] text-[12px]  leading-[19px] font-neutra  tracking-[1.56px] uppercase">Exclusive amenities & affiliations </p>
                      <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
                      Thoughtful Amenities,
                     
                      </h1>
                      <h1 className="text-[36px] text-[#0A0024] leading-[44px] font-berlingske font-semibold">
                      Esteemed Partnerships
                      </h1>
                      <p className='text-[20px] text-[#0A0024] leading-[28px]  font-berlingske  tracking-[0.2px]  mt-10  '>
                      Provide your clients with meaningful 
amenities such as complimentary airport transfers, thoughtful room upgrades, and relaxing spa experiences, leveraging our collaboration with distinguished consortia like Virtuoso.

                         </p>
          
          
                     
          
                         <div className={`flex flex-wrap gap-6 mt-8 `}>
                {listItems.map((item, index) => (
                  <IconListItem key={index} icon={item.icon} text={item.text} />
                ))}
              </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;