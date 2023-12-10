import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const UpdateButton = ({ itemId, updateType, onUpdate }) => {
  const handleUpdate = async () => {
    try {
      const token = Cookies.get('yourAuthToken');

      const updateData =
        updateType === 'increment'
          ? { quantity: 1 }
          : updateType === 'decrement'
          ? { quantity: -1 }
          : null;

      const response = await axios.patch(
        `http://localhost:3000/api/v1/cart/${itemId}`,
        updateData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (onUpdate) {
        onUpdate(response.data.updatedItem);
      }
    } catch (error) {
      console.error('Updating error:', error);
    }
  };

  return (
    <>
      <button
        onClick={handleUpdate}
        className="px-3 py-2 xl:px-4 xl:py-2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]"
      >
        {updateType === 'increment' ? (
          <i className="bx bx-plus text-button"></i>
        ) : (
          <i className="bx bx-minus text-button"></i>
        )}
      </button>
    </>
  );
};

export default UpdateButton;
