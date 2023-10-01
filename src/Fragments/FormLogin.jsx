import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  saveCredentialsToLocalStorage,
  getEmailFromLocalStorage,
  getPasswordFromLocalStorage,
  getUsernameFromLocalStorage,
} from "../Utils/userDatas";

const FormLogin = () => {
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const usernameInputRef = useRef(null)

  const handleSubmit = () => {
    const emailValue = emailInputRef.current.value;
    const passwordValue = passwordInputRef.current.value;
    const usernameValue = usernameInputRef.current.value;

    saveCredentialsToLocalStorage(emailValue, passwordValue, usernameValue);
  };

  useEffect(() => {
    const storedEmail = getEmailFromLocalStorage();
    const storedPassword = getPasswordFromLocalStorage();
    const storedUsername = getUsernameFromLocalStorage();

    if (storedEmail) {
      emailInputRef.current.value = storedEmail;
    }

    if (storedPassword) {
      passwordInputRef.current.value = storedPassword;
    }

    if (storedPassword) {
      usernameInputRef.current.value = storedUsername;
    }
  }, []);

  return (
    <form className="flex flex-col gap-2" action="">
      <input
        className="px-2 py-2"
        ref={usernameInputRef}
        type="username"
        placeholder="Enter your username"
        name="username"
      />
      <input
        className="px-2 py-2"
        ref={emailInputRef}
        type="email"
        placeholder="example@mail.com"
        name="email"
      />
      <input
        className="px-2 py-2"
        ref={passwordInputRef}
        type="password"
        placeholder="*******"
        name="password"
      />
      <div className="flex justify-center items-center">
        <Link to={"/account"}>
          <button
            className="w-[280px] px-3 py-2 bg-button rounded-lg hover:brightness-110 cursor-pointer text-white font-Poppins"
            onClick={handleSubmit}
          >
            Login
          </button>
        </Link>
      </div>
    </form>
  );
};

export default FormLogin;
