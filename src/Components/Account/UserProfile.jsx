import React from "react";
import ButtonAccount from "./Button/ButtonAccount";
import { Link } from "react-router-dom";
import user from "/Assets/Account/user.png";

import {
  getEmailFromLocalStorage,
  getUsernameFromLocalStorage,
  removeEmailFromLocalStorage,
  removePasswordFromLocalStorage,
  removeUsernameFromLocalStorage,
} from "../../Utils/userDatas";

const UserProfile = () => {
  const userEmail = getEmailFromLocalStorage();
  const userUsername = getUsernameFromLocalStorage();

  const handleLogout = () => {
    removeEmailFromLocalStorage();
    removePasswordFromLocalStorage();
    removeUsernameFromLocalStorage();
  };

  return (
    <div className="flex justify-center min-h-screen bg-cover bg-no-repeat bg-[url('/src/assets/coverlogin.png')]">
      <div className="w-full sm:mx-10 max-w-[1000px] my-10 bg-background1 px-5 py-4 shadow-md rounded-md">
        <p className="text-center mb-2 text-button ">Welcome Back!!</p>
        <div className="flex justify-center items-center mb-2">
          <img className="w-[120px]" src={user} alt="" />
        </div>
        <h2 className="font-medium text-xl text-button flex justify-center">
          {userUsername}
        </h2>
        <h3 className="font-medium text-sm text-button mb-4 flex justify-center">
          {userEmail}
        </h3>
        <Link to={"/account/my-profile"}>
          <ButtonAccount variant="bg-button w-full flex justify-between items-center">
            <span>
              <i className="bx bxs-user-account"></i> My Account
            </span>
            <span>
              <i className="bx bx-chevron-right"></i>
            </span>
          </ButtonAccount>
        </Link>
        <Link to={"/cart-page"}>
          <ButtonAccount variant="bg-button w-full flex justify-between">
            <span>
              {" "}
              <i className="bx bx-cart"></i> My Cart{" "}
            </span>
            <span>
              <i className="bx bx-chevron-right"></i>
            </span>
          </ButtonAccount>
        </Link>
        <Link to={"/transaction"}>
          <ButtonAccount variant="bg-button w-full flex justify-between">
            <span>
              {" "}
              <i className="bx bxs-package"></i> My Orders
            </span>
            <span>
              <i className="bx bx-chevron-right"></i>
            </span>
          </ButtonAccount>
        </Link>
        <div className="flex justify-center items-center gap-2">
          <Link to={"/login"}>
            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-button text-white rounded-lg hover:brightness-110"
            >
              Logout
            </button>
          </Link>
          <Link to={"/"}>
            <button className="px-3 py-2 bg-button text-white rounded-lg hover:brightness-110">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
