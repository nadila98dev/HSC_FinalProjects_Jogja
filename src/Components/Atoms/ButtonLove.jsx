import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSavedStatus } from "../../redux/saved/savedSlice";

const ButtonLove = ({ itemId }) => {
  const [isSolid, setIsSolid] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const savedStatus = useSelector((state) => state.saved.savedStatus);

  useEffect(() => {
    setIsSolid(savedStatus[itemId] || false);
  }, [savedStatus, itemId]);

  const toggleIcon = async () => {
    try {
      if (isSolid) {
        await axios.delete("http://localhost:3000/api/v1/saved", {
          data: { itemId: itemId },
        });
        setIsSolid(false);
        dispatch(setSavedStatus(itemId, false));
      } else {
        await axios.post("http://localhost:3000/api/v1/saved", {
          itemId: itemId,
        });
        setIsSolid(true);
        dispatch(setSavedStatus(itemId, true));
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      } else {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div>
      <button
        onClick={toggleIcon}
        className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        {isSolid ? (
          <i className="bx bxs-heart text-button"></i>
        ) : (
          <i className="bx bx-heart text-button"></i>
        )}
      </button>
    </div>
  );
};

export default ButtonLove;
