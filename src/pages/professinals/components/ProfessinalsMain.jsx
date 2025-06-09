import React from 'react'
import d from '/images/professinals/d.png'
import v from '/images/professinals/v.png'
import e from '/images/professinals/e.png'
import design from '@/assets/icons/design.svg'


const ProfessinalsMain = () => {
  return (
    <div className='flex flex-col py-6' >

        {/* First Image row */}
        <div className='flex flex-row w-full justify-between px-1' >
        <img src={d} alt="imag-1" className="" />
        <img src={v} alt="imag-1" className="" />
        <img src={e} alt="imag-1" className="" />

       
       

        </div>

        {/* Second Image row */}
        <div className='flex flex-col justify-center items-center text-center px-4 bg-[#0A0024]'>
            <div className='flex flex-col items-center justify-center'>
            <img src={design} alt="design" className="" />
                <h1 className='text-2xl font-bold text-[white]'>Aquila Professionals</h1>
                <p className='text-sm text-[white] mt-2 font-neutra'>We are a team of highly skilled professionals dedicated to providing exceptional services and solutions.</p>

            </div>

        </div>
        
    </div>
  )
}

export default ProfessinalsMain