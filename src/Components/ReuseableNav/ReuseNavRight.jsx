import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "boxicons";
import {
  getEmailFromLocalStorage,
  getPasswordFromLocalStorage,
} from "../../Utils/userDatas";

function ReuseNavRight() {
  const navigateToMenuJogja = useNavigate();
  const navigateToSavedPageJogja = useNavigate();
  const navigateToSearchPageJogja = useNavigate();
  const navigateToLoginPage = useNavigate();
  const navigateToAccountPage = useNavigate();

  const [showDot, setShowDot] = useState(false);
  const storedEmail = getEmailFromLocalStorage();
  const storedPassword = getPasswordFromLocalStorage();

  // useEffect(() => {
  //   const favoriteItems = JSON.parse(localStorage.getItem("products")) || [];
  //   setShowDot(favoriteItems.length > 0);
  // }, []);

  const handleLoginClick = () => {
    // if (storedEmail && storedPassword) {
    navigateToAccountPage("/account");
    // } else {
    //   navigateToLoginPage('/login');
    // }
  };

  return (
    <div
      className="flex gap-[1rem] w-fit h-[40px] 
        max-[1023px]:hidden"
    >
      <div
        onClick={() => navigateToSearchPageJogja("/search-page")}
        className="w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer  text-[#000]"
      >
        <i className="bx bx-search-alt"></i>
      </div>

      <div
        onClick={handleLoginClick}
        className="w-[40px] p-[8px] text-2xl h-[40px] flex justify-center items-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer  text-[#000]"
      >
        <i className="bx bx-user"></i>
      </div>
      <div
        onClick={() => navigateToSavedPageJogja("/saved-page")}
        className="p-[8px] text-2xl w-[40px] flex items-center justify-center rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer text-[#000]"
      >
        <i className="bx bx-heart"></i>
        {showDot && (
          <div className="w-0 h-0 text-button text-[80px] relative bottom-[52px] right-[14px]">
            .
          </div>
        )}
      </div>
      <div
        onClick={() => navigateToMenuJogja("/menu-jogja")}
        className="p-[8px] h-[40px] flex justify-center items-center text-2xl rounded-lg hover:bg-button2 transition duration-300 ease-in-out cursor-pointer text-[#000]"
      >
        <i className="bx bx-menu"></i>
      </div>
    </div>
  );
}

export default ReuseNavRight;
