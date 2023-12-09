import React, { useEffect, useState } from "react";
import SouvenirCard from "./SouvenirCard";

// import axiosSouvenir from '/src/API/apiMuseum.js'
import SouvenirData from "/src/Database/souvenirData.json";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";

const SouvenirContainer = () => {
  const [souvenir, setSouvenir] = useState([]);
  const callApi = async () => {
    const response = await axiosInstance.items(9)
    setSouvenir(response.data)
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-10">
      {souvenir.map((item, index) => (
        <SouvenirCard
          key={index}
          item={item.slug}
          pic={`${config.host_url}/${item?.image}`}
          title={item.name}
          price={item.price}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default SouvenirContainer;
