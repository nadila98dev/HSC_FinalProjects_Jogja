import React, { useEffect, useState } from "react";
import CartCard from "./CartCard/CartCard";
import NothingItem from "../SavedPage/NothingItem";

import { getProductsFromLocalStorage } from '../../Utils/Products'



const CartContainer = () => {

    // Inisialisasi untuk menyimpan cart items
    const [cartItems, setCartItems] = useState(false);

    // meload item cart dari penyimpanan lokal pada components
    useEffect(() => {
      const storedCartItems = getProductsFromLocalStorage();
      if(storedCartItems > 0) {
        setCartItems(true);
      }
    }, []);

    const clearCart = () => {
      localStorage.removeItem("cartItems");
      setCartItems([]);
    };

  return (
    <section>
      <div className="flex flex-wrap mt-5 justify-between px-10">
        <h1 className="text-4xl">Cart</h1>
        <button onClick={clearCart} className="bg-white hover:bg-button text-gray-800 hover:text-white font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Clear Cart List
        </button>
      </div>
      <div className="mx-auto mt-4 border-t border-gray-300 w-[96%]"></div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col px-5">
        {cartItems ? (
          <CartCard />
        ): (
         <div></div>
        )
        
        }
        </div>
        <div className="flex flex-col mt-5 w-full sm:w-[90%] h-[90%] justify-center px-5 sm:px-10 shadow-lg">
          <h3 className="font-bold">Pricing & Shipping Fee</h3>
          <hr className="w-full border-gray-100 mt-4" />
          <div className="flex flex-wrap justify-between mt-5">
            <p>Subtotal</p>
            <p>Price</p>
          </div>
          <div className="flex flex-wrap justify-between mt-5">
            <p>Shipping Fee</p>
            <p>Price</p>
          </div>
          <div className="flex flex-wrap justify-start mt-5 mb-5">
            <input
              type="text"
              className="w-full mt-5 sm:w-[350px] md:w-[250px] lg:w-[250px] p-2 sm:mr-4 text-gray-900 border border-gray-300 rounded-sm bg-gray-50 sm:text-xs focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            />
            <button className="w-full mt-5 sm:w-[230px] md:w-[200px] lg:w-[200px] bg-button text-white text-[18px] p-3 rounded-md">
              Apply
            </button>
          </div>
          <div className="flex flex-wrap justify-between mt-5 mb-5 font-bold">
            <p>Total</p>
            <p>Price</p>
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
