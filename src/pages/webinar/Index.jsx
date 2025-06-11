import React from 'react'
import Hero from '../home/Hero'
import WebinarMain from './componets/WebinarMain'
import Designing_Luxury from './componets/Designing _Luxury '
import Matching_Right from './componets/Matching_Right'
import Selling_Soul from './componets/Selling_Soul'
import Footer from '../../components/Footer'

const WebinarPage = () => {
  return (
    <div className=" min-h-screen  flex flex-col justify-between bg-[#F5F5F5]">
         
         <WebinarMain/>
          <Designing_Luxury/>
          <Matching_Right/>
          <Selling_Soul/>
          
        </div>
  )
}

export default WebinarPage
