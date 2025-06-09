import React from 'react'
import d from '/images/professinals/d.png'
import v from '/images/professinals/v.png'
import e from '/images/professinals/e.png'


const ProfessinalsMain = () => {
  return (
    <div className='flex flex-col py-6' >

        {/* First Image row */}
        <div className='flex flex-row w-full justify-between px-1' >
        <img src={d} alt="imag-1" className="" />
        <img src={v} alt="imag-1" className="" />
        <img src={e} alt="imag-1" className="" />
       

        </div>
        
    </div>
  )
}

export default ProfessinalsMain