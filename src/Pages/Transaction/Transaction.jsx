import React from "react";
import ReuseNav from "../../Components/ReuseableNav/ReuseNav";
import { useNavigate } from "react-router-dom";
import History from "../../Components/Transaction/History";

const Transaction = () => {
  const navigateToAccountPage = useNavigate();

  return (
    <>
      <header>
        <nav>
          <ReuseNav />
        </nav>
      </header>
      <div>
        <div
          className="w-screen h-[80px] flex justify-end items-center pr-4 gap-3
            sm:pr-5"
        >
          <div
            className="flex gap-2 items-center bg-button2 rounded-xl w-[250px] cursor-pointer drop-shadow-md bottom-14"
            onClick={() => navigateToAccountPage("/account")}
          >
            <button
              id="botButton"
              className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
            >
              <i className="bx bx-x"></i>
            </button>
            <p className="font-Poppins">Back to My Account</p>
          </div>
        </div>
      </div>
      <div className="px-4 bg-background1 pb-6">
        <p className="text-[20px] pt-4 ml-6 md:text-center md:ml-0">
          My Orders
        </p>
        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 mt-4 lg:grid-cols-3">
          <History />
          <History />
          <History />
          <History />
          <History />
          <History />
        </div>
      </div>
    </>
  );
};

export default Transaction;
