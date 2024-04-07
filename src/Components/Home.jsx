import React from 'react'
import bg from '../Assets/Cover.jpg'
import Navbar from './Navbar'
const Home = () => {
    return (
        <section id='Home' className=' h-[400px] w-screen scroll-smooth object-contain md:w-screen md:h-screen 
        bg-no-repeat bg-cover bg-black/50' style={{backgroundImage: `url(${bg})`}}>
            <Navbar/>
            <div className=' relative'>
                <div className='absolute right-6 top-52 lg:right-[450px] flex flex-col 
                lg:top-0 md:right-[250px] md:top-0 gap-2 justify-center items-center'>
                    <h2 className=' h-22 w-168 text-[#FF9999] text-3xl font-semibold oleoB'>MAKEUP ARTIST</h2>
                    <p className=' pb-0 text-white text-xl md:text-black font-semibold berk pl-10'>
                        YOUR FACE 👩, MY SKILLS. 🪄
                    </p>
                    <div className=' h-[2px] w-28 bg-[#FF9999] text-transparent'>.</div>
                    {/* <h1 className=' md:text-5xl text-2xl font-semibold  text-white'>SIMRAN DUDEJA</h1> */}
                    <a href='#Contact' className=' animate-scale  focus:animate-none hover:animate-none 
                    inline-flex text-lg bg-[#FF9999] text-nowrap h-18 w-56 font-bold mt-2 p-5 rounded-lg tracking-wide
                     text-white'>Book Appointment → </a>
                </div>
            </div>
        </section>
  )
}

export default Home
