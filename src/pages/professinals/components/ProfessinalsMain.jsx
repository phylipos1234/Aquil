import React from 'react'
import a from '/images/professinals/a.png'
import b from '/images/professinals/b.png'
import c from '/images/professinals/c.png'
import spain from '/images/professinals/spain.png'
import italy from '/images/professinals/italy.png'
import france from '/images/professinals/france.png'
import design from '@/assets/icons/design.svg'
import DestinationCard from './DestinationCard'


const ProfessinalsMain = () => {
  return (
    <div className='flex flex-col py-6 gap-6' >

        {/* First Image row */}
        <div className='flex flex-row w-full  justify-center   mt-5 gap-8  overflow-x-auto' >
        <DestinationCard source={a}  />
        <DestinationCard source={b}  />
        <DestinationCard source={c}  />

       
       

        </div>

        {/* Second Image row Continer */}
        <div className='flex flex-col gap-4  items-center text-center  bg-[#0A0024]  py-8 '>
            
            <div className='flex flex-col items-center justify-center gap-4'>
            <img src={design} alt="design" className="" />
            <h1 className='text-[12px]  text-[#F2F2F2] leading-[19px] font-neutra  tracking-[1.56px] '>TAILORED EXPERIENCE</h1>

            </div>

           
               <div className='flex flex-col items-center justify-center mt-4' >


               <h1 className='text-[36px] text-[white] leading-[44px] font-berlingske font-semibold'>Curate extraordinary
              </h1>
               <h1 className='text-[36px] text-[white] leading-[44px]  font-berlingske font-semibold'>
               Journeys.</h1>
               </div>


               <p className='text-[20px] text-[#fff] leading-[28px]  font-berlingske  tracking-[1%]  w-[40%]'>
               Thoughtfully crafted journeys and premium business travel services designed specifically for your discerning clients. Aquila provides exclusive travel benefits, tailored itineraries, and meticulous execution, ensuring every journey is exceptional and effortless, reflecting your agency’s high standards.
               </p>

        {/* Second image row */}

        <div className='flex flex-col  w-full justify-center py-6 mt-6 gap-8'>
        <h1 className='text-[15px]  text-[#FF7338] leading-[19px] font-neutra  tracking-[1.56px] '>REQUEST A PERSONALIZED PROPOSAL</h1>
        
        <div className='flex flex-row w-full  justify-center   mt-5 gap-8  overflow-x-auto hide-scrollbar ' >
        <DestinationCard source={spain} label="SPAIN" />
        <DestinationCard source={italy} label="ITALY"  />
        <DestinationCard source={france} label="FRANCE" />
       
        </div>

            </div>

        </div>
        
    </div>
  )
}

export default ProfessinalsMain