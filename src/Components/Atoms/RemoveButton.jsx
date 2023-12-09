import React from "react";
import { removeFromCart } from "../../Utils/Carts";
import axiosInstance from "../../API/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/cartActions";

const RemoveButton = ({ itemId, onRemove }) => {
  const dispatch = useDispatch();
  const handleRemoveClick = async () => {
    await axiosInstance.removeCart(itemId);
    dispatch(fetchCart());
  };
  return (
    <>
      <button
        onClick={handleRemoveClick}
        className="px-3 py-2 xl:px-4 xl:py-2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        <i className="bx bx-trash text-button"></i>
      </button>
    </>
  );
};

export default RemoveButton;
