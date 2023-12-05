import React from "react";

const ActivatedButtonLove = ({ userId, itemId, onRemove }) => {
  const handleRemoveClick = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/saved`,
        {
          data: { userId, itemId },
        }
      );

      if (response.status === 200 || response.status === 204) {
        onRemove();
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
