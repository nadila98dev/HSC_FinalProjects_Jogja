import React from "react";
import ReuseNav from "../Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import CartContainer from "../Components/Cart/CartContainer";
import BotButton from "../Components/Landing/Landing-bot/BotButton";

const CartPage = () => {
  return (
    <div className="w-full h-auto">
      <ReuseNav />
      <CartContainer />
      <div className="w-screen flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
