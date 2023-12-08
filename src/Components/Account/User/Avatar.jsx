import React, { useState } from "react";
import axios from "axios";
import defaultavatar from "/Assets/Account/user.png";
import { config } from "../../../config";

const Popup = ({ onClose, onApply }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleApply = async () => {
    try {
      const formData = new FormData();
      formData.append("avatar", selectedFile);

      await axios.put(`${config.base_url}/account/update-avatar`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      onApply();
      window.location.reload();
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 font-Poppins">
      <div className="bg-white p-4 rounded-md flex flex-col justify-center items-center">
        <input type="file" onChange={handleFileChange} />
        <div className="flex mt-2 gap-3">
          <button
            className="mr-2 px-4 py-2 bg-button text-white rounded-md"
            onClick={handleApply}
            disabled={!selectedFile}
          >
            Apply
          </button>
          <button
            className="px-4 py-2 bg-button text-white rounded-md"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const Avatar = ({ avatar }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex justify-center items-center mb-4">
      <img
        className="w-[120px] cursor-pointer"
        src={avatar ? avatar : defaultavatar}
        alt="user"
      />
      <div
        onClick={openPopup}
        className="bg-button flex justify-center items-center rounded-lg p-1 relative bottom-[-30px] right-[20px] cursor-pointer"
      >
        <i className="bx bx-edit text-[24px] cursor-pointer"></i>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} onApply={closePopup} />}
    </div>
  );
};

export default Avatar;
