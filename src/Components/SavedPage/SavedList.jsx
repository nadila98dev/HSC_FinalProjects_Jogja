import React, { useState, useEffect } from "react";
import FavItems from "./FavItems";
import NothingItem from "./NothingItem";
import axios from "axios";
import { config } from "../../config";

const SavedList = ({ userId }) => {
  const [savedItemsExist, setSavedItemsExist] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${config.base_url}/saved/${userId}`)
      .then((response) => {
        if (response.data.success) {
          const items = response.data.data;
          setSavedItems(items);
          setSavedItemsExist(items.length > 0);
        } else {
          setSavedItemsExist(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching saved items:", error);
        setError("Failed to fetch saved items. Please try again later.");
      });
  }, [userId]);

  return (
    <div>
      {error ? (
        <div>Error: {error}</div>
      ) : savedItemsExist ? (
        <FavItems savedItems={savedItems} />
      ) : (
        <NothingItem />
      )}
    </div>
  );
};

export default SavedList;
