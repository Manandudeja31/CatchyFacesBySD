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
          <h2 className='text-xl font-semibold pb-5 text-[#FF9999]'>PRICES</h2>
          <h1 className='text-4xl font-semibold pb-5 oleoB'>PRICING PLAN</h1>
          <div className='h-[1px] w-20 bg-[#FF9999]'></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-4'> 
          <img src={PricesB} className='h-auto max-h-[350px] w-full p-5'/> 
          <img src={PricesE} className='h-auto max-h-[350px] w-full p-5'/> 
          <img src={PricesP} className='h-auto max-h-[350px] w-full p-5 aspect-[1/2] object-cover'/> 
          <img src={PricesH} className='h-auto max-h-[350px] w-full p-5 aspect-[1/2] object-cover '/> 
        </div>
      </div>
    </div>
  )
}

export default Prices
