import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ButtonLove = ({ itemId }) => {
  const [isSolid, setIsSolid] = useState(false);
  const navigate = useNavigate();

  const toggleIcon = async () => {
    try {
      const response = isSolid
        ? await axios.delete("http://localhost:3000/api/v1/saved", {
            data: { itemId: itemId },
          })
        : await axios.post("http://localhost:3000/api/v1/saved", {
            itemId: itemId,
          });

      if (response.status === 200 || response.status === 201) {
        setIsSolid(!isSolid);
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
