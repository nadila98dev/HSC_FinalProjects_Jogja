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
      const imageData = new FormData();
      imageData.append("avatar", selectedFile);

      await axios.post(`${config.base_url}/account/update-avatar`, imageData, {
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-md z-50 font-Poppins">
      <div className="bg-white p-4 rounded-md flex flex-col justify-center items-center drop-shadow-lg">
        <input type="file" onChange={handleFileChange} />
        <div className="flex mt-2 gap-3">
          <button
            className="mr-2 px-4 py-2 bg-button text-white rounded-md hover:brightness-110"
            onClick={handleApply}
            disabled={!selectedFile}
          >
            Apply
          </button>
          <button
            className="px-4 py-2 bg-button text-white rounded-md hover:brightness-110"
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

  const avatarPic = avatar ? `${config.image_url}/${avatar}` : defaultavatar;

  return (
    <div className="flex justify-center items-center mb-4">
      <img
        className="w-[120px] h-[120px] rounded-full cursor-pointer"
        src={avatarPic}
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
