
import React from "react";
import { removeFromCart } from "../../Utils/Carts";
import axiosInstance from "../../API/apiCall";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../redux/cart/cartActions";

// import axios from 'axios';

// const RemoveButton = ({ itemId, onDelete }) => {
//   const handleDelete = async () => {
//     try {
//       const token = Cookies.get('X-Token');

//       // Replace 'your-api-endpoint' with your actual API endpoint
//       await axios.delete(`http://localhost:3000/api/v1/cart/${itemId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       if (onDelete) {
//         onDelete(itemId); // Call parent component's onDelete callback
//       }
//     } catch (error) {
//       console.error('Error deleting item:', error);
//     }
//   };
// >>>>>>> main

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
// =======
//         onClick={handleDelete}
// >>>>>>> main
        className="px-3 py-2 xl:px-4 xl:py-2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        <i className="bx bx-trash text-button"></i>
      </button>
    </>
  );
};

export default RemoveButton;
