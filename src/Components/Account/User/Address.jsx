import React, { useState } from "react";
import axios from "axios";
import { config } from "../../../config";

const Popup = ({ onClose }) => {
  const [newAddress, setNewAddress] = useState("");

  const handleApply = async () => {
    try {
      await axios.put(`${config.base_url}/account/update-address`, {
        address: newAddress,
      });
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50 font-Poppins">
      <div className="bg-white p-4 rounded-md flex flex-col">
        <p>Enter your address:</p>
        <input
          type="text"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          className="border border-gray-300 rounded-md px-2 py-1 mt-2 w-full"
        />
        <div className="flex justify-end mt-2 gap-3">
          <button
            className="mr-2 px-4 py-2 bg-button text-white rounded-md"
            onClick={handleApply}
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

const Address = ({ address }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="flex flex-col">
      <div className="px-3 py-2 bg-button rounded-md flex justify-between items-center">
        <p>{address}</p>
        <i
          onClick={openPopup}
          className="bx bx-edit text-[24px] cursor-pointer"
        ></i>
      </div>
      {isPopupOpen && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Address;
