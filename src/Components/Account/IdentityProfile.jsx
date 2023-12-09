import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { config } from "../../config";

import Name from "./User/Name";
import Email from "./User/Email";
import Address from "./User/Address";
import Telephone from "./User/Telephone";
import Avatar from "./User/Avatar";
import { useDispatch, useSelector } from "react-redux";
import { selectUserData } from "../../redux/auth/userSelector";
import axios from "axios";
import Cookies from "js-cookie";
import { fetchUsers } from "../../redux/auth/userActions";

const IdentityProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectUserData);
  const [userData, setUserData] = useState({});
  const token = Cookies.get("X-TOKEN");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${config.base_url}/account`);
        setUserData(response.data.user);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    dispatch(fetchUsers(token));
  }, []);

  return (
    <div className="flex justify-center min-h-screen bg-cover bg-no-repeat bg-[url('/src/assets/coverlogin.png')]">
      <div className="w-full sm:mx-10 max-w-[1000px] my-10 bg-background1 px-5 py-4 shadow-md rounded-md text-white">
        <Avatar avatar={data?.avatar} />
        <Name name={data?.name} />
        <Email email={data?.email} />
        <Address address={data?.address} />
        <Telephone phone={data?.phone} />
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
