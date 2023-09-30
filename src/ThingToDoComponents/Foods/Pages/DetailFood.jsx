import React, { useState, useEffect } from "react";

import ReuseNav from "../../../Components/ReuseableNav/ReuseNav";
import Footer from "../../../Components/Footer/Footer";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import ShareButton from "../../../Components/Atoms/ShareButton";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import axiosInstance from "../../../API/apiCall";

const DetailFood = () => {
  // Route
  const navigateToFoodPage = useNavigate();

  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const callApi = async () => {
    axiosInstance.detail(id).then((res) => {
      const data = res[0];
      setDetail(data);
    });
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="flex flex-col min-h-screen pb-5">
      <ReuseNav />
      <div
        className="w-screen h-[80px] flex justify-end items-center pr-4 gap-3
                sm:pr-5
            "
      >
        <div
          className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToFoodPage("/things-to-do/food-jogja")}
        >
          <button
            id="botButton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Food Page</p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:flex lg:items-center lg:justify-center mb-4">
          <img
            src={detail.src}
            alt=""
            className="w-full lg:w-[50vw] lg:h-[400px] object-cover drop-shadow-xl"
          />
        </div>
        <div className="w-screen h-fit bg-[#F1F8FF] pt-5 px-5 lg:h-[400px] lg:w-[50vw] flex flex-col justify-center items-center">
          <section className="px-5 md:w-[75%] lg:w-full ">
            <div className="flex flex-1  justify-between items-center mb-5">
              <div>
                <span className="font-Poppins">Food</span>
              </div>
              <ShareButton />
            </div>

            <div className="mb-10">
              <h1 className="mb-5 font-bold text-4xl font-Lora">{detail.name}</h1>
              <p className="mt-2 text-[18px] text-justify">
                {" "}
                {detail.description}
              </p>
            </div>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailFood;
