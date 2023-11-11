import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  saveCredentialsToLocalStorage,
  getEmailFromLocalStorage,
  getPasswordFromLocalStorage,
  getUsernameFromLocalStorage,
} from "../Utils/userDatas";
import { useState } from "react";
import axiosInstance from "../API/apiCall";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const FormLogin = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  console.log(form);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const payload = {
      email: form.email,
      password: form.password,
    };

    const res = await axiosInstance.login(payload);
    // console.log(res);

    if (res?.error === false) {
      toast.success(res.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      navigate("/");
      Cookies.set("X-TOKEN", res.token, { expires: 2 });
    } else {
      const msg = res.message || "Internal Server Error";
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    // const emailValue = emailInputRef.current.value;
    // const passwordValue = passwordInputRef.current.value;
    // const usernameValue = usernameInputRef.current.value;
    // saveCredentialsToLocalStorage(emailValue, passwordValue, usernameValue);
  };

  // useEffect(() => {
  //   // const storedEmail = getEmailFromLocalStorage();
  //   // const storedPassword = getPasswordFromLocalStorage();
  //   // const storedUsername = getUsernameFromLocalStorage();
  //   // if (storedEmail) {
  //   //   emailInputRef.current.value = storedEmail;
  //   // }
  //   // if (storedPassword) {
  //   //   passwordInputRef.current.value = storedPassword;
  //   // }
  //   // if (storedPassword) {
  //   //   usernameInputRef.current.value = storedUsername;
  //   // }
  // }, []);

  return (
    <>
      <div className="flex flex-col gap-2">
        {/* <input
        className="px-2 py-2"
        ref={usernameInputRef}
        type="username"
        placeholder="Enter your username"
        name="username"
      /> */}
        <input
          className="px-2 py-2"
          type="email"
          placeholder="example@mail.com"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          className="px-2 py-2"
          type="password"
          placeholder="*******"
          name="password"
          value={form.password}
          onChange={handleChange}
        />

        <div className="flex justify-center items-center">
          <button
            className="w-[280px] px-3 py-2 bg-button rounded-lg hover:brightness-110 cursor-pointer text-white font-Poppins"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default FormLogin;
