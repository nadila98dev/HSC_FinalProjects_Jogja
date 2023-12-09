import React, { useEffect, useState } from "react";
import attractionData from "/src/Database/attractionData.json";
import "./CardContainer.css";

// untuk card
import CardSection from "./CardsSection";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";

const IndexCard = () => {
  const [attractions, setAttractions] = useState([]);
  const callApi = async () => {
    try {
      const response = await axiosInstance.items(2); // Pass categoryId as a parameter
      // console.log('API Response:', response);
      setAttractions(response.data);
    } catch (error) {
      console.error('Error in callApi:', error);
    }
  };
  

  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center w-full bg-background1 px-5 mt-5 pb-10">
      <div id="section_card" className="container3 cursor-pointer">
        {attractions.map((card, i) => (
          <CardSection
            key={i}
            item={card.slug}
            imageSrc={`${config.host_url}/${card?.image}`}
            title={card.name}
            description={card.description}
            id={card.id}
            map={card.map}
          />
        ))}
      </div>
    </div>
  );
};
export default IndexCard;
