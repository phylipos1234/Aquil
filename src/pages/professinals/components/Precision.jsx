import React from 'react'
import IconListItem from '../../../components/IconListItem'
import wedding_ring from '@/assets/icons/professionals/wedding_ring.svg'
import wheelchair_icon from '@/assets/icons/professionals/wheelchair_icon.svg'
import minimize from '@/assets/icons/professionals/minimize.svg'
import weddings from '/images/professinals/weddings.png'
import wheelchair from '/images/professinals/wheelchair.png'
import landscape from '/images/professinals/landscape.png'


const listItems = [
    { icon: wedding_ring, text: "destination weddings",imageSrc: weddings },
    { icon: wheelchair_icon, text: "accessible travel", imageSrc: wheelchair },
    { icon: minimize, text: "european relocation" , imageSrc: landscape }
  ];

const Precision = () => {
  return (
    <div className='flex flex-col gap-6 items-center text-center    py-14 '>
            
    <div className='flex flex-col items-center justify-center gap-4'>
    <h1 className='text-[12px]  text-[#0A0024] leading-[19px] font-neutra  tracking-[1.56px] uppercase '>Crafted with Precision</h1>

    </div>

   
       <div className='flex flex-col items-center justify-center mt-4' >


       <h1 className='text-[36px] text-[#0A0024] leading-[44px]   font-berlingske font-semibold'>
       Dedicated Niche Expertise
       
       </h1>
     
       </div>

       <p className='text-[20px] text-[#0A0024] leading-[24px]  font-berlingske  tracking-[0.5px]  w-[40%]'>
       Aquila specializes in crafting memorable experiences for Destination Weddings, Accessible Luxury Travel, and European Relocation & Investment, catering thoughtfully to your clients' specialized requirements.

       </p>

      

       <div className={`flex  gap-10 mt-8 `}>
             {listItems.map((item, index) => (
               <div key={index} className='flex flex-col items-center gap-8' >
                <IconListItem  icon={item.icon} text={item.text} direction='column' />
                <img src={item.imageSrc} alt="imag-1" className="" />
                </div>
             ))}
           </div>

           


</div>
  )
}

export default Precision