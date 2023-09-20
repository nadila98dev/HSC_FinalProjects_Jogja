import React, { useEffect, useState } from "react";
import ArtCard from "../Art-activities/ArtCard";

import { Link } from "react-router-dom";

import "./artCardContainer.css";

// import artActivitiesData from "/src/Database/artActivitiesData.json";
import axiosInstance from "../../../../API/apiMuseum";

const ArtCardContainer = () => {
  const [art, setArt] = useState([]);
  const callApi = async () => {
    axiosInstance.items(1).then((res) => {
      setArt(res);
    });
    // axios.get("/db.json").then((res) => console.log(res.data.items));
  };
  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="w-screen h-fil bg-white font-Poppins ">
      <div className="grid md:grid-cols-2 max-w-[1240px] px-10 lg:px-[80px]">
        <div className="flex flex-col justify-center md:items-start w-full py-8">
          <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
            Art Activity
          </h1>
          <a href="#" className="flex ">
            Explore places
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="flex w-full text-[12px] text-center lg:text-[16px] md:items-center md:text-start lg:pt-6">
          <p>
            Yogyakarta have unique characteristics, and cultural attraction such
            as workshop that based on handmade stuff or paintings also any other
            art work that based on traditional way
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full bg-background1 px-5 mt-5">
        <div id="section_card" className="container3 cursor-pointer">
          {art.map((item, index) => (
            <ArtCard
              key={index}
              item={item.slug}
              pic={item.src}
              name={item.name}
              description={item.description}
              id={item.id}
            />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8 mb-8">
          <button
            type="button"
            className="bg-button font-semibold py-3 px-5 rounded-lg  hover:brightness-110 hover:text-button drop-shadow-lg"
          >
            <p className="text-white">Load More</p>
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 max-w-[1240px]  px-10 lg:px-[80px] gap-5">
        <div className="flex  flex-col justify-center md:items-start w-full py-8">
          <h1 className=" mt-5  mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1 font-lora">
            Cultures are everywhere
          </h1>
          <a href="#" className="flex ">
            Explore more
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
        </div>
        <div className="flex w-full text-[12px] text-center lg:text-[16px] md:items-center md:text-start lg:pt-6">
          <p>
            Yogyakarta have unique characteristics, and cultural attraction such
            as workshop that based on handmade stuff or paintings also any other
            art work that based on traditional way
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtCardContainer;
