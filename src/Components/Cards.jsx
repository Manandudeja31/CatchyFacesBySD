import React, { useEffect, useState } from 'react'
import data from "../data"
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Cards = ({services}) => {
  
  const [index,setIndex] = useState(0);
  const leftBtnHandler = () => {
    setIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    )
  }

  const rightBtnHandler = () => {
    setIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className=' flex justify-center items-center'>
      <div className=' flex flex-col justify-center items-center relative w-[1000px] h-80'>
        
        <div className=' flex flex-col w-screen h-[500px] md:w-[450px] md:h-[450px] '>
          <img src={services[index].img}  className=' md:hover:scale-90 w-screen h-[400px] md:w-[450px] md:h-[450px] object-cover px-2'/>
        </div>

        <div className=' w-[400px] md:w-[460px] text-center absolute top-72 
        pb-5 pt-5 bg-[#FF9999] text-white text-2xl font-bold'>{services[index].name}</div>

        <div className=' absolute top-24 left-5'>
          <button onClick={leftBtnHandler }><IoIosArrowDropleft className=' text-7xl hover:bg-black hover:text-white rounded-full '/></button>
        </div>

        <div className=' absolute top-24 right-5'>
          <button onClick={rightBtnHandler}><IoIosArrowDropright className=' text-7xl hover:bg-black  hover:text-white rounded-full'/></button>
        </div>
      </div>
    </div>
  )
}



export default Cards
