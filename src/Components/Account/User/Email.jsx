import React from "react";
import { getEmailFromLocalStorage } from "../../../Utils/userDatas";

const Email = ({ email }) => {
  // const userEmail = getEmailFromLocalStorage();
  return (
    <div className="flex flex-col">
      <div className="px-3 py-2 bg-button rounded-md flex justify-between items-center">
        <p>Email Address</p>
      </div>
      <div className="text-[#000000] px-5 py-2">
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Email;
