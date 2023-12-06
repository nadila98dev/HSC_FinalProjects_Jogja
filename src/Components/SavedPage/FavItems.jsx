import React from "react";
import ActivatedButtonLove from "../Atoms/ActivatedButtonLove";
import axios from "axios";

const FavItems = ({ savedItems, setSavedItems }) => {
  const handleRemoveItem = async (userId, itemId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/v1/saved`,
        {
          data: { userId, itemId },
        }
      );

      if (response.status === 200 || response.status === 204) {
        const updatedSavedItems = savedItems.filter(
          (item) => !(item.itemId === itemId && item.userId === userId)
        );

        setSavedItems(updatedSavedItems);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
      id="added-list"
      className="w-screen h-fit flex flex-col justify-center items-center p-5 gap-5 lg:py-10 lg:px-20"
    >
      {savedItems.map((favoriteItem, index) => (
        <div
          key={index}
          className="w-full h-fit cursor-pointer justify-center flex flex-col lg:flex-row"
        >
          <div className="overflow-hidden rounded-lg lg:h-[200px] lg:w-[300px]">
            <img
              className="rounded-lg hover:scale-105 duration-500 object-cover md:h-[300px] md:w-full lg:h-[200px] lg:w-[300px] xl:object-center"
              src={favoriteItem.item.image}
              alt={favoriteItem.item.name}
            />
            <div className="relative flex justify-end bottom-12 xl:bottom-16 h-0">
              <ActivatedButtonLove
                userId={favoriteItem.userId}
                itemId={favoriteItem.itemId}
                onRemove={() =>
                  handleRemoveItem(favoriteItem.userId, favoriteItem.itemId)
                }
              />
            </div>
          </div>
          <div className="p-3 lg:w-2/3 lg:ml-5">
            <h3 className="text-[22px]">{favoriteItem.item.name}</h3>
            <p className="line-clamp-2">{favoriteItem.item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FavItems;
