import React from 'react'
import about from "../Assets/about.jpeg"
const About = () => {
  return (
    <section  className=' bg-[#f5ebeb] pt-20 pb-20 ' id='About'>
      <div className=' flex flex-col md:flex-row justify-center px-2 md:pr-10 md:gap-10 lg:gap-0 md:pl-5 items-center md:items-center'>
        <div className='h-[520px] w-[400px] aspect-[3/2] object-contain lg:w-[452px] md:mr-10 flex justify-center items-center'>
          <img src={about} alt='About-Img' className='h-[500px] w-[400px] pr-2 object-cover object-top'/>
        </div>
        <div className=' flex flex-col gap-4 justify-center items-center'>
          <h2 className=' text-[#FF9999] meri font-bold text-xl'>About Me</h2>
          <h1 className=' text-[#1A0F0F] font-bold text-xl meriB'>SIMRAN DUDEJA</h1>
          <div className=' flex items-center justify-center'>
            <div className=' h-[2px] w-20 bg-[#FF9999]'></div>
          </div>
          <div className=' text-md text-center text-wrap w-fit pl-5 pr-5 meriR lg:w-[600px] md:w-[300px] font-semibold leading-6'>
              <p className=' pb-3'>
                Hey 🌟 I'm a Delhi-based Makeup Artist with a passion for transforming 
                faces! 💄 Under the guidance of globally recognized makeup artist Meenakshi Dutt, 
                I've honed my skills and creativity. 💫 Growing up, makeup always fascinated me, 
                and being able to turn that passion into a career is a dream come true! 💖
              </p>

              <p className=' pb-3'>
                For the past five years, I've been dedicated to this field, and I have a vision to change people's perspectives about makeup. 💄
              </p>

              <p className=' pb-3'>
                I believe it's more than just cosmetics; it's about enhancing inner beauty and confidence! 💃 When you look good, you feel good! ✨
              </p>
              <p className=' pb-0'>
                YOUR FACE 👩, MY SKILLS. 🪄
              </p>
              <p className=' pb-3'>
                Let's bring out your best look together!
              </p>
                  Simran!
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
