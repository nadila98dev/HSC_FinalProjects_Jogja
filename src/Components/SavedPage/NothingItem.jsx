import React from 'react'
import NothingImg from '/src/assets/nothing.svg'

const NothingItem = () => {
  return (
    <div id='nothing-list' className='w-screen h-fit flex flex-col justify-center items-center p-4'>
        <img src={NothingImg} alt="nothing" />
        <div className='mt-5'>
            <h1 className='text-[1.8rem] text-center leading-tight'>Oops, it looks quite empty here.</h1>
        </div>
        <div className='mt-4'>
            <p className='font-Poppins text-[0.8rem text-center'>Add favourites by clicking the heart on various content on the page.</p>
        </div>
    </div>
  )
}

export default NothingItem
