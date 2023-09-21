import React from 'react'
import {TiLocation} from 'react-icons/ti'   
import {BsFillSunFill} from 'react-icons/bs'   
import {HiOutlineMailOpen} from 'react-icons/hi'   

const ArtContact = ({map}) => {
  return (
    <div className='mt-10 mx-auto px-5 md:px-10 py-2 max-w-[1224px] min-fit font-poppins'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
      <div className='flex flex-col items-center p-5 md:p-8 bg-primarybg'>
        <TiLocation size={45} color='green' className='mb-3 w-full' />
        <h2 className='mb-3 font-semibold text-2xl font-lora'>Where in Jogja?</h2>
          <img src={map} alt='Jogja Map' className='w-full' />
      </div>
      <div className='flex flex-col gap-6 p-5 pt-0 md:p-8 md:pt-0 '>
        <div className='flex flex-col items-center p-5 md:p-8 bg-primarybg'>
          <BsFillSunFill size={45} color='green' className='mb-3 w-full' />
          <h2 className='mb-3 font-semibold text-2xl font-lora'>Seasons</h2>
          <p>Suitable experience all year</p>
        </div>
        <div className='flex flex-col items-center p-5 md:p-8 bg-green-100'>
          <HiOutlineMailOpen size={45}  color='green' className='mb-3 w-full' />
          <h2 className='mb-3 font-semibold text-2xl font-lora'>Contact</h2>
          <p>Suitable experience all year</p>
          <p className='mt-3'>Address 2</p>
          <button
            type='button'
            className='mt-5 bg-transparent border-green-600 hover:bg-button hover:text-white text-black font-semibold hover:text-btn_color py-2 px-4 border border-black hover:border-btn_color rounded'>
            Visit Website
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ArtContact
