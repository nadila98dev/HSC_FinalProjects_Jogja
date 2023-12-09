import React, { useState, useEffect } from "react";
import FavItems from "./FavItems";
import NothingItem from "./NothingItem";
import axios from "axios";
import { config } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { setSavedActions } from "../../redux/saved/savedActions";

const SavedList = ({ userId }) => {
  const dispatch = useDispatch();
  const savedStatus = useSelector((state) => state.saved.savedStatus);
  console.log("tes", savedStatus);

  useEffect(() => {
    dispatch(setSavedActions());
  }, [dispatch]);

  return (
    <div>
      {savedStatus ? <FavItems savedItems={savedStatus} /> : <NothingItem />}
    </div>
  );
};

export default SavedList;
