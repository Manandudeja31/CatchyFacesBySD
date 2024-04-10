import React, { useState } from 'react'
import {PortfolioImg} from "../data"
const Portfolio = ({items}) => {
    const tabsName = [
        "Bridal",
        "Haldi/Mehndi",
        "Engagement",
        "Party",
    ]

    const[currentTab, setCurrentTab] = useState(tabsName[0])
    const[images, setImages] = useState(PortfolioImg[0].Images)

    const handleTabsChange = (value) => {
        setCurrentTab(value)
        const result = PortfolioImg.filter((Image) => Image.tag === value)
        setImages(result[0].Images)
    }
  return (
    <div className=' w-screen h-full bg-[#f5ebeb] pt-10 pb-10 md:mt-20' id='Portfolio'>
        <div className=' flex flex-col justify-center items-center pb-10'>
            <p className=' text-xl text-[#FF9999] pb-3'>GALLERY</p>
            <p className=' text-4xl font-semibold pb-5 oleoB'>PORTFOLIO</p>
            <div className=' h-[1px] w-20 bg-[#FF9999]'></div>
        </div>

        <div className=' flex justify-center items-center'>
            <div className=' flex justify-center items-center md:gap-5 h-16 bg-black/60 text-md text-white font-bold w-[400px] md:w-fit rounded-full p-5'>
                {tabsName.map((element,index) => {
                    return(
                        <div key={index} 
                        onClick={() => handleTabsChange(element)} 
                        className={` hover:text-[#FF9999] rounded-full p-3 cursor-pointer ${currentTab === element && "bg-black hover:text-white"}`}>
                            {element}
                        </div>
                    )
                })}
            </div>
        </div>
        
        <div>
            <div className=' w-full h-full flex flex-wrap justify-center items-center mt-10'>
                {images.map((item,id) => {
                    return(
                        <div key={id} className=' w-[350px] h-[350px] aspect-[3/2]'>
                            <img src={item.img} className=' w-[350px] h-[350px] p-2 hover:scale-150 
                            aspect-[3/2] object-cover object-top'/>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
