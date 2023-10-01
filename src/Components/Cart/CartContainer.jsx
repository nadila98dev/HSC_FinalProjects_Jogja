import React, { useEffect, useState, useCallback } from "react";
import CartCard from "./CartCard/CartCard";
import PopupPayment from "../PopUp/PopupPayment";

import { getCartItems } from "../../Utils/Carts";

const CartContainer = () => {
  const [cartData, setCartData] = useState([]);
  const [showRules, setShowRules] = useState(false);
  const [showPopupPayment, setShowPopupPayment] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

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

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const handleApplyClick = () => {
    setShowRules(true);
  };

  const handleCheckoutClick = () => {
    setShowPopupPayment(true);
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
      <div className="mt-5 flex justify-center items-center flex-col lg:grid lg:grid-cols-2 lg:justify-start lg:items-start">
        <div className="flex flex-col px-5">
          <CartCard cartData={cartData} setCartData={setCartData} />
        </div>
        <div className="flex flex-col pt-9 w-full sm:w-[90%]  px-5 sm:px-10 shadow-lg">
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
          <div className="flex justify-center items-center my-5">
            <button
              onClick={handleApplyClick}
              className="w-full mt-5  bg-button text-white text-[18px] p-3 rounded-md hover:brightness-110"
            >
              Terms of Payment
            </button>
          </div>
          {showRules && (
            <div className="flex flex-col">
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  name="rules1"
                  id="rules1"
                  required
                ></input>
                I have read and approve <b>BANK Rules</b>
              </label>
              <label>
                <input
                  className="mr-2"
                  type="radio"
                  name="rules2"
                  id="rules2"
                  required
                ></input>
                I have read and approve <b>BANK Preliminary Information Form</b>
              </label>
            </div>
          )}
          <div className="flex flex-wrap justify-between mt-5 mb-5 font-bold">
            <p>Total</p>
            <p>{formatCurrency(total)}</p>
          </div>
          <button onClick={handleCheckoutClick}
          className="w-full bg-button text-white text-[18px] py-3 mb-5 rounded-md hover:brightness-110">
            Checkout
          </button>
          {showPopupPayment && <PopupPayment total={total} setShowPopupPayment={setShowPopupPayment} />}
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
