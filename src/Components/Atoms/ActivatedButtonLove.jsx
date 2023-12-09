import React, { useEffect } from "react";
import axios from "axios";
import { config } from "../../config";
import Cookies from "js-cookie";

const ActivatedButtonLove = ({ userId, itemId, onRemove }) => {
  const token = Cookies.get("X-TOKEN");
  const handleRemoveClick = async () => {
    try {
      const response = await axios.delete(`${config.base_url}/saved`, {
        data: { itemId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      window.location.reload();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleRemoveClick}
        className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[32px]"
      >
        <i className="bx bxs-heart text-button  font-semibold"></i>
      </button>
    </div>
  );
};

export default ActivatedButtonLove;
