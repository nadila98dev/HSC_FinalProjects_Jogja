import React, { useState, useEffect } from "react";
import axios from "axios";
import { config } from "../../config";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ButtonLove = ({ itemId }) => {
  const [isSolid, setIsSolid] = useState(false);
  const savedStatus = useSelector((state) => state.saved.savedStatus);

  useEffect(() => {
    setIsSolid(savedStatus.some((item) => item.item.id === itemId));
  }, [savedStatus, itemId]);

  const toggleIcon = async () => {
    const token = Cookies.get("X-TOKEN");
    try {
      if (isSolid) {
        await axios.delete(`${config.base_url}/saved`, {
          data: { itemId: itemId },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setIsSolid(false);
      } else {
        await axios.post(
          `${config.base_url}/saved`,
          {
            itemId: itemId,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setIsSolid(true);
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Internal Server Error", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
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
