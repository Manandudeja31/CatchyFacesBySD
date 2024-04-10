import React from 'react'
import Cards from "./Cards"
import {services} from '../data'
// import image1 from "../Assets/bg.jpg"
const Services = () => {
  
  return (
    <div className=' pt-20 mb-20 pb-20 w-screen h-full ' id='Services'>
        <section> 
            <div className=' flex flex-col justify-center items-center font-semibold pb-32 md:pb-24'>
                <h2 className=' pb-3 text-[#FF9999] text-xl meriR'>What I do</h2>
                <h1 className=' pb-5 text-4xl oleoB'>MAKEUP SERVICES</h1>
                <div className=' h-[1px] w-20 bg-[#FF9999]'></div>
            </div>
            <div >
                <Cards services = {services}/>
            </div>
        </section>
      
    </div>
  )
}

export default Services
