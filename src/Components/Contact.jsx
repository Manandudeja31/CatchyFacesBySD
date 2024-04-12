import React, { useState } from 'react'
import Form from './Form'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  
  return (
    <div className=' mt-10 bg-[#f5ebeb] pb-10 pt-10 pl-5 pr-5 flex flex-col md:flex-row gap-10 justify-center items-center' id='Contact'>
      <div className=' mt-10 font-semibold meriB'>
        <h2 className=' text-4xl font-bold pb-5 oleoB'>CONTACT ME</h2>
        <div className=' h-[2px] w-20 bg-[#FF9999] mb-5'></div>
        <p className=' text-xl'>Hi, it is me SIMRAN, Unleash Your Beauty Dreams!</p>
        <p className=' text-xl'>Contact Me for a Transformation that Speaks Louder than Words.</p>
        <p className=' text-xl'>Let's Glam Together!</p>
        <div className=' flex gap-3'>

                <div className='flex flex-col gap-5 pt-4 text-[#FF9999]'>
                    <FaPhone/>
                    <IoMdMail />
                    <FaLocationDot /> 
                </div>
                <div>
                    <p className=' pb-2 pt-4 flex gap-3'>  +91 8447306494</p>
                    <p className=' pb-2 flex gap-3'> Simrandudeja0011@gmail.com</p>
                    <p className=' pb-2 flex gap-3'>  Pitampura,Delhi</p>
                </div>
            </div>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default Contact
