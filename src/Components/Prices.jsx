import React from 'react'
import PricesB from "../Assets/PricesB.jpg"
import PricesE from "../Assets/PricesE.jpg"
import PricesP from "../Assets/PricesP.jpg"
import PricesH from "../Assets/PricesH.jpg"

const Prices = () => {
  return (
    <div className='mb-10 lg:mb-20' id='Prices'> {/* Adjust margin bottom */}
      <div className='mt-20'>
        <div className='mb-10 flex flex-col justify-center items-center'>
          <h2 className='text-xl font-semibold pb-5 text-[#FF9999] meriR'>PRICES</h2>
          <h1 className='text-4xl font-semibold pb-5 oleoB'>PRICING PLAN</h1>
          <div className='h-[1px] w-20 bg-[#FF9999]'></div>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center flex-wrap gap-8 px-4'> 
          <img src={PricesB} className='md:h-[350px] h-[250px] object-cover md:w-[550px] w-full p-5 aspect-[1/2]'/> 
          <img src={PricesE} className='md:h-[350px] h-[250px] object-cover md:w-[550px] w-full p-5 aspect-[1/2]'/> 
          <img src={PricesP} className='md:h-[350px] h-[250px] object-cover md:w-[550px] w-full p-5 aspect-[1/2]'/> 
          <img src={PricesH} className='md:h-[350px] h-[250px] object-cover md:w-[550px] w-full p-5 aspect-[1/2] '/> 
        </div>
      </div>
    </div>
  )
}

export default Prices
