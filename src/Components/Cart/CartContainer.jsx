import React, { useEffect, useState, useCallback } from "react";
import CartCard from "./CartCard/CartCard";
import NothingItem from "../SavedPage/NothingItem";

import { getCartItems } from "../../Utils/Carts";

const CartContainer = () => {
  const [cartData, setCartData] = useState([]);
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  // Biaya pengiriman (Shipping Fee)
  const shippingFee = 10000;
  useEffect(() => {
    const cartItems = getCartItems();
    setCartData(cartItems);
  }, []);

  const calculateSubtotal = useCallback(() => {
      return cartData.reduce((total, item) => total + item.price * item.quantity, 0);
    }, [cartData]);
  
    useEffect(() => {
      const updatedSubtotal = calculateSubtotal();
  
      const updatedTotal = updatedSubtotal + shippingFee; 
  
      setSubtotal(updatedSubtotal);
      setTotal(updatedTotal);
    }, [cartData, calculateSubtotal, shippingFee]);
  


  
  // Total
  // const subtotal = calculateSubtotal();
  // const total = subtotal + shippingFee;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };
  
  return (
    <section>
      <div className="flex flex-wrap mt-5 justify-between px-10">
        <h1 className="text-4xl">Cart</h1>
        <button className="bg-white hover:bg-button text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Clear Cart List
        </button>
      </div>
      <div className="mx-auto mt-4 border-t border-gray-300 w-[96%]"></div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col px-5">
          <CartCard cartData={cartData} setCartData={setCartData} />
        </div>
        <div className="flex flex-col justify-center mt-5 ml-5 pl-5 w-full sm:w-[90%] h-[90%]  px-5 sm:px-10 shadow-lg">
          <h3 className="font-bold">Pricing & Shipping Fee</h3>
          <hr className="w-full border-gray-100 mt-4" />
          <div className="flex flex-wrap justify-between mt-5">
            <p>Subtotal</p>
            <p>{formatCurrency(subtotal)}</p>
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            <p>Shipping Fee</p>
            <p>{formatCurrency(shippingFee)}</p>
          </div>
          <div className="flex flex-wrap justify-start mt-5 mb-5">
            <input
              type="text"
              className="w-full mt-5 sm:w-[350px] md:w-[250px] lg:w-[250px] p-2 sm:mr-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600"
            />
            <button className="w-full mt-5 sm:w-[230px] md:w-[200px] lg:w-[200px] bg-button text-white text-[18px] p-3 rounded-md">
              Apply
            </button>
          </div>
          <div className="flex flex-wrap justify-between mt-5 mb-5 font-bold">
            <p>Total</p>
            <p>{formatCurrency(total)}</p>
          </div>
          <button className="w-full bg-button text-white text-[18px] py-3 mb-5 rounded-md">
            {" "}
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
