import React from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSavedStatus } from "../../redux/saved/savedSlice";
import { config } from "../../config";

const ActivatedButtonLove = ({ userId, itemId, onRemove }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = async () => {
    try {
      const response = await axios.delete(`${config.base_url}/saved`, {
        data: { userId, itemId },
      });

      if (response.status === 200 || response.status === 204) {
        dispatch(setSavedStatus(itemId, false));
        if (typeof onRemove === "function") {
          onRemove();
        }
      }
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
