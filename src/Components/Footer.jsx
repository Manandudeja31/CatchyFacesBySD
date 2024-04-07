import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className=' bg-[#1A0F0F] text-white h-1/2'>
      <div className=' flex pl-5 flex-col md:flex-row justify-between'>
        <div className=' pt-20'>
            <h2 className=' text-5xl pb-3 font-semibold text-[#FF9999]'>SIMRAN</h2>
            <p>Hi, it is me Simran,Unleash Your Beauty Dreams!</p>
            <p>Let's Glam Together!</p>
            <div className=' flex gap-8 pt-4 text-[#FF9999]'>
                <a href='https://www.instagram.com/simran_dudeja?igsh=bmllOHd2aThuZ2di' className=' cursor-pointer text-2xl hover:scale-125'> <FaInstagram/> </a>
                {/* <a className=' cursor-pointer text-xl hover:scale-125'> <FaFacebookF/> </a>
                <a className=' cursor-pointer text-xl hover:scale-125'> <FaTwitter/> </a> */}
            </div>
        </div>
        <div  className=' pt-20 pb-20 right-0'>
            <h2 className=' text-2xl pb-2 text-[#FF9999]'>Get In Touch</h2>
            <hr className=' opacity-50 w-80 md:w-full'></hr>
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

        </div>
      </div>
      <hr></hr>
      <div className=' flex justify-center items-center p-5'>
        <p>©2024.All rights Reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
