import React, { useState, useEffect } from "react";
import FavItems from "./FavItems";
import NothingItem from "./NothingItem";
import axios from "axios";

const SavedList = () => {
  const [savedItemsExist, setSavedItemsExist] = useState(false);
  const [savedItems, setSavedItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/saved/${userId}`)
      .then((response) => {
        if (response.data.success) {
          setSavedItems(response.data.data);
          setSavedItemsExist(true);
        } else {
          setSavedItemsExist(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching saved items:", error);
        setError("Failed to fetch saved items. Please try again later.");
      });
  }, []);

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
