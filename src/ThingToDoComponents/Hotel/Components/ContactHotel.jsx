import React from 'react'
import Clear from '/Assets/Weather/clear.png'

import Visit from '/src/assets/visit.svg'

const ContactHotel = () => {
    return (
        <div className='flex flex-col gap-5 items-center justify-center my-8 sm:flex-row md:gap-5 lg:gap-2'>
            <div className='h-[380px] text-center bg-button2 rounded-xl  pb-5 lg:w-[200px] lg:h-[250px] flex flex-col items-center justify-center'>
                <img className='lg:w-[150px]' src={Clear} alt="" />
                <h2 className=' font-Lora font-semibold'>season</h2>
                <p className='font-poppins'>suitable all year</p>
            </div>
            <div className='h-[380px] text-center py-5 px-5 rounded-lg bg-button2 lg:w-[200px] lg:h-[250px] flex flex-col items-center justify-center'>
                <img className='w-[183px] lg:w-[100px]' src={Visit} alt="" />
                <button className=' bg-button border rounded-xl p-3 mt-3 lg:mt-2 lg:p-2 text-white font-poppins hover:brightness-110'>
                    <p className='lg:text-sm'>Visit Website</p>
                </button>
                <h2 className='mt-4 font-Lora font-semibold lg:mt-1'>contact</h2>
                <p className=' font-poppins'>jogja hotel</p>
            </div>
        </div>
      )
    }
export default ContactHotel
