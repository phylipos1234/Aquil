import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessinalsMain from './components/ProfessinalsMain'
import Authenticity from './components/Authenticity'
import Pricing from './components/Pricing'
import Dedication from './components/Dedication'

const ProfessionalsPage = () => {
  return (
    <div className=" min-h-screen py-8 flex flex-col justify-between ">
        <Header textColor='text-[#000]' />
        <ProfessinalsMain />
        <Authenticity />
        <Pricing />
        <Dedication />
        
        {/* <Footer/> */}
    </div>
  )
}

export default ProfessionalsPage