import React from 'react'

const AddToCartButton = () => {
  return (
    <>
        <button className="w[180px] bg-button flex items-center px-4 py-2 rounded-xl">
            <p className="text-white me-1 font-Poppins">Add to Cart</p>
            <i className="bx bx-cart-alt text-[30px] text-white ml-3"></i>
        </button>
    </>
  )
}

export default AddToCartButton
