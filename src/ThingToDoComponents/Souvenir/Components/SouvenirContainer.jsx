import React, { useEffect, useState } from "react";
import SouvenirCard from "./SouvenirCard";

// import axiosSouvenir from '/src/API/apiMuseum.js'
import SouvenirData from "/src/Database/souvenirData.json";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";
import { useDispatch } from "react-redux";
import { setSavedActions } from "../../../redux/saved/savedActions";
import Cookies from "js-cookie";

const SouvenirContainer = () => {
  const [souvenir, setSouvenir] = useState([]);
  const callApi = async () => {
    const response = await axiosInstance.items(7);
    setSouvenir(response.data);
  };
  const dispatch = useDispatch();
  const token = Cookies.get("X-TOKEN");

  useEffect(() => {
    callApi();
    dispatch(setSavedActions(token));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-10">
      {souvenir.map((item, index) => (
        <SouvenirCard
          key={index}
          item={item.slug}
          pic={item?.image}
          title={item.name}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default SouvenirContainer;
