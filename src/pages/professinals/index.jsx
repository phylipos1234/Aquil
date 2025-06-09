import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProfessinalsMain from './components/ProfessinalsMain'

const ProfessionalsPage = () => {
  return (
    <div className=" min-h-screen py-8 flex flex-col justify-between ">
        <Header textColor='text-[#000]' />
        <ProfessinalsMain />

        {/* Section Title and Content */}
        {/* <Footer/> */}
    </div>
  )
}

export default ProfessionalsPage