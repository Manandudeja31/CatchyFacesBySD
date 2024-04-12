import React, { useEffect, useState } from 'react'
import logo from "../Assets/logo.jpg"
import { IoReorderThreeOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
// style={{backgroundImage: `url(${bg})`}}
const NavLinks = () => {
  return(
    <div>
      <ul className='flex gap-5'>
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href='#'>Home</a>
          </li>
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href='#About'>About</a>
          </li >
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href="#Services">Services</a>
          </li>
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href='#Prices'>Prices</a>
          </li>
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href='#Portfolio'>Portfolio</a>
          </li>
          <li className='  hover:text-[#FF9999] hover:scale-125'>
            <a href='#Contact'>Contact</a>
          </li>
          <li className='  hover:text-[#FF9999] hover:scale-125 mt-[3px] text-xl'>
            <a href='https://www.instagram.com/simran_dudeja?igsh=bmllOHd2aThuZ2di'><FaInstagram/></a>
          </li>
        </ul>
    </div>
  )
}
const Navbar = () => {
  const[menu, showMenu] = useState(false)
  const openMenu = () => {
    showMenu(!menu);
  } 
  return (
    <nav className="flex z-[90] w-full relative meriB justify-between items-center text-white bg-black/20" >
      <div className='flex justify-center items-center font-bold text-2xl md:text-3xl pl-5 hover:text-[#FF9999]'>
        <img src={logo} alt='Simran' className=' h-12 w-10 object-contain'/>
        <h2>IMRAN</h2>
      </div>
    {/* Pc screen */}
      <div className=' font-semibold pr-10 hidden md:block'>
        <NavLinks/>
      </div>
    {/* Mobile Screen */}
      <div className=' flex items-center pr-5 justify-between md:hidden'>
        {
         menu && (
          <div className=''>
            <ul className='flex flex-col gap-5 justify-center items-center text-white text-2xl font-semibold basis-full
             absolute left-0 w-screen top-10 bg-black/60 transition-all duration-500'>
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#'>Home</a>
              </li>
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#About'>About</a> 
              </li > 
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#Services'>Services</a>
              </li> 
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#Prices'>Prices</a> 
              </li> 
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#Portfolio'>Portfolio</a> 
              </li> 
              <li className='  hover:text-[#FF9999] hover:scale-125'>
                <a href='#Contact'>Contact</a>
              </li>
              
            </ul>

          </div>
         )
        }
        <IoReorderThreeOutline className='text-4xl font-bold ' onClick={openMenu}/>
        <div className='  hover:text-[#FF9999] hover:scale-125 p-3 text-xl'>
          <a href='https://www.instagram.com/simran_dudeja?igsh=bmllOHd2aThuZ2di'><FaInstagram/></a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar
