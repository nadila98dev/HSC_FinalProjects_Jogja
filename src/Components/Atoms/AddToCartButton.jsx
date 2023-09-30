import React from "react";


const   AddToCartButton = ({id, onClick}) => {
 const handleAddClick = () => {
  const isIteminCart = localStorage.getItem(`cartItem_${id}`);
  if(isIteminCart === 'true'){
    alert('Pesanan sudah ada di keranjang anda');
  } else {
    localStorage.setItem(`cartItem_${id}`, 'true');
    onClick();
  }
 }
  

  return (
    <div className="flex gap-[2px] " onClick={handleAddClick}>
        <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-bl-lg rounded-tr-sm rounded-br-sm text-[22px] xl:text-[24px]"
      >
        {handleAddClick ? (
          <i className="bx bx-cart text-button"></i> // Display cart icon when the product is in the cart
        ) : (
          <i className="bx bx-cart-add text-button"></i> // Display cart-add icon when the product is not in the cart
        )}
      </button>
      <div className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 flex justify-center items-center text-button rounded-tr-lg rounded-br-lg rounded-tl-sm rounded-bl-sm cursor-pointer">
          <p>Add to Cart</p>
      </div>
    </div>
  )
}

export default AddToCartButton
