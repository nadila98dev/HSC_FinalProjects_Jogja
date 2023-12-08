import React from "react";
import { Link } from "react-router-dom";

import Name from "./User/Name";
import Email from "./User/Email";
import Address from "./User/Address";
import Telephone from "./User/Telephone";
import Avatar from "./User/Avatar";
import { useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/userSelector";

const IdentityProfile = () => {
  const data = useSelector(selectUserData);

  return (
    <div className="flex justify-center min-h-screen bg-cover bg-no-repeat bg-[url('/src/assets/coverlogin.png')]">
      <div className="w-full sm:mx-10 max-w-[1000px] my-10 bg-background1 px-5 py-4 shadow-md rounded-md text-white">
        <Avatar />
        <Name name={data?.name} />
        <Email email={data?.email} />
        <Address />
        <Telephone />
        <div className="flex flex-col gap-2 mt-5">
          <Link to={"/"}>
            <div className="w-full justify-center items-center text-center bg-button px-3 py-2 rounded-lg cursor-pointer hover:brightness-110">
              <p>Home</p>
            </div>
          </Link>
          <Link to={"/account"}>
            <div className="w-full justify-center items-center text-center bg-button px-3 py-2 rounded-lg cursor-pointer hover:brightness-110">
              <p>Account</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IdentityProfile;
