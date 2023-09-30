import React from 'react'
import { useNavigate } from 'react-router-dom'

const PopupWarning = ({message , showWarning}) => {
    const navigateToCartPage = useNavigate()


  return (
    showWarning && (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-blur-md px-2'>
        <div className='bg-background1 p-5 rounded-lg drop-shadow-lg text-center'>
            <p>{message}</p>
            <div className="flex gap-2 justify-center items-center mt-5">
                    <div onClick={()=> navigateToCartPage('/cart-page')} className="flex justify-center items-center gap-[2px] cursor-pointer ">
                        <button className="px-3 py-2 bg-button text-white rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm">My Cart</button>
                        <i className='bx bx-cart px-3 py-2 bg-button text-white rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm text-[24px]'></i>
                    </div>
                </div>
        </div>
    </div>
    )
  )
}

export default PopupWarning
