import React, { useState } from "react";
import RemoveButton from "../../Atoms/RemoveButton";

const CartCard = ({cartData, setCartData }) => {
  const [quantity, setQuantity] = useState(1);
  const removeItemFromCart = (itemId) => {
    const updatedCartData = cartData.filter((item) => item.id !== itemId);
    setCartData(updatedCartData);
  }

  const decrementQuantity = (itemId) => {
    const updateCartData = cartData.map((item) => {
      if(item.id === itemId && item.quantity > 1){
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCartData(updateCartData);
    };

  const incrementQuantity = (itemId) => {
    const updateCartData = cartData.map((item) => {
      if(item.id === itemId){
        return{
          ...item,
          quantity: item.quantity + 1, 
        };
      }
      return item;
    });
    setCartData(updateCartData);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  return (
    <div>
      {cartData.map((item) => (
        <div key={item.id} className="flex px-2 mt-1 md:px-10 shadow-lg">
        <div className="mx-auto mt-5">
          <div className="flex justify-between w-auto">
            <h3>{item.name}</h3>
            <RemoveButton itemId={item.id} onRemove={removeItemFromCart}/>
          </div>
          <hr className="w-full border-gray-100 mb-5" />
          <div className="flex flex-col items-center mb-4 bg-white rounded-lg md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-cover w-full h-30 md:h-40 md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
              src={item.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h4 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h4>
            </div>
            <div className="grid grid-cols-1 px-6 mt-4">
              <p>{formatCurrency(item.price)}</p>
              <div className="mt-2 flex justify-center items-center border-gray-100 gap-1">
                <span
                  onClick={() => decrementQuantity(item.id)}
                  className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-button hover:text-white"
                >
                  {" "}
                  -{" "}
                </span>
                <input
                className="h-9 w-[40px] border bg-white text-center text-xs flex items-center justify-center outline-none"
                type="number"
                value={item.quantity}
                min="1"
                readOnly
                />
                <span
                  onClick={() => incrementQuantity(item.id)}
                  className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-button hover:text-white"
                >
                  {" "}
                  +{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      ))}
    </div>
    
  );
};

export default CartCard;
