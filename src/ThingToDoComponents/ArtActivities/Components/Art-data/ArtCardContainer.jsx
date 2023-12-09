import React, { useEffect, useState } from "react";
import ArtCard from "../Art-activities/ArtCard";

import { Link, useParams } from "react-router-dom";

import "./artCardContainer.css";

// import artActivitiesData from "/src/Database/artActivitiesData.json";
import axiosInstance from "../../../../API/apiCall";
import { config } from "../../../../config";
import { useDispatch } from "react-redux";
import { setSavedActions } from "../../../../redux/saved/savedActions";
import Cookies from "js-cookie";
const ArtCardContainer = () => {
  const slug = useParams();

  console.log(slug);
  const [art, setArt] = useState([]);
  const callApi = async () => {
    const response = await axiosInstance.items(1);
    setArt(response.data);
  };
  const dispatch = useDispatch();
  const token = Cookies.get("X-TOKEN");

  useEffect(() => {
    callApi();
    dispatch(setSavedActions(token));
  }, [dispatch]);

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
        <div id="section_card" className="container3 cursor-pointer pb-10">
          {art.map((item, index) => {
            return (
              <ArtCard
                key={index}
                item={item.slug}
                image={`${config.host_url}/${item?.image}`}
                name={item.name}
                description={item.description}
                id={item.id}
              />
            );
          })}
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
