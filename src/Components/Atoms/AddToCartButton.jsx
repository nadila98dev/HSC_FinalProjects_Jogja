import React from "react";


const AddToCartButton = ({id, onClick}) => {
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
    <>
        <button onClick={handleAddClick}
        className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        {handleAddClick ? (
          <i className="bx bx-cart text-button"></i> // Display cart icon when the product is in the cart
        ) : (
          <i className="bx bx-cart-add text-button"></i> // Display cart-add icon when the product is not in the cart
        )}
      </button>
    </>
  )
}

export default AddToCartButton
