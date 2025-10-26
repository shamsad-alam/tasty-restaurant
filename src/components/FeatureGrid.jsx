import React from 'react'
import { GiDeliveryDrone } from "react-icons/gi";
import { FaThumbsUp } from "react-icons/fa6";



function FeatureGrid() {
  return (
    <>
      <section className='rounded-4xl bg-red-800 py-12 mx-4'>
        <div className='w-7xl mx-auto px-4  '>
          <div className='flex  w-1/4 gap-12 justify-between'>
            <div className='text-white flex-1'>
              <span><GiDeliveryDrone className='w-[100px] h-[100px] text-7xl p-4 rounded-2xl bg-green-500' /></span>
              <h3 className='text-2xl font-bold'>Super Fast Order</h3>
            </div>
            <div className='text-white'>
              <span><FaThumbsUp className='w-[100px] h-[100px] text-7xl p-4 rounded-2xl bg-green-500' /></span>
              <h3 className='text-2xl font-bold'>Super Fast Order</h3>
            </div>
            <div className='text-white'>
              <span><GiDeliveryDrone className='w-[100px] h-[100px] text-7xl p-4 rounded-2xl bg-green-500' /></span>
              <h3 className='text-2xl font-bold'>Super Fast Order</h3>
            </div>
            <div className='text-white'>
              <span><GiDeliveryDrone className='w-[100px] h-[100px] text-7xl p-4 rounded-2xl bg-green-500' /></span>
              <h3 className='text-2xl font-bold'>Super Fast Order</h3>
            </div>
            <div className='text-white'>
              <span><GiDeliveryDrone className='w-[100px] h-[100px] text-7xl p-4 rounded-2xl bg-green-500' /></span>
              <h3 className='text-2xl font-bold'>Super Fast Order</h3>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default FeatureGrid
