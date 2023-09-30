import React from "react";
import user from "/Assets/Account/user.png";

const Avatar = () => {
  return (
    <div className="flex justify-center items-center mb-4">
      <img className="w-[120px] cursor-pointer" src={user} alt="user" />
      <div className="bg-button flex justify-center items-center rounded-lg p-1 relative bottom-[-30px] right-[20px]">
        <i className="bx bx-edit text-[24px] cursor-pointer "></i>
      </div>
    </div>
  );
};

export default Avatar;
