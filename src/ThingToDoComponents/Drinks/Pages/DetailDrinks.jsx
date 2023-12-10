import React, { useState, useEffect } from "react";
import ReuseNav from "../../../Components/ReuseableNav/ReuseNav";
import Footer from "../../../Components/Footer/Footer";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import ShareButton from "../../../Components/Atoms/ShareButton";

import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import axiosDrinks from "../../../API/apiDrinks";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";

const DetailDrinks = () => {
  //Route
  const navigateToDrinksPage = useNavigate();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const callApi = async () => {
    const response = await axiosInstance.itemById(id);
    setDetail(response.data[0]);
  };
  useEffect(() => {
    callApi();
  }, [id]);
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
          onClick={() => navigateToDrinksPage("/things-to-do/drinks-jogja")}
        >
          <button
            id="botButton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Drinks Page</p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:flex lg:items-center lg:justify-center mb-4">
          <img
            src={`${config.host_url}/${detail.image}`}
            alt=""
            className="w-full lg:w-[50vw] lg:h-[500px] object-cover drop-shadow-xl"
          />
        </div>
        <div className="w-screen h-fit bg-[#F1F8FF] pt-5 px-5 lg:h-[500px] lg:w-[50vw] flex flex-col justify-center items-center">
          <section className="px-5 md:w-[75%] lg:w-full ">
            <div className="flex flex-1  justify-between items-center mb-5">
              <div>
                <span className="font-Poppins">Drinks</span>
              </div>
              <ShareButton />
            </div>

            <div className="mb-10">
              <h1 className="mb-5 font-bold text-4xl font-Lora">
                {detail.name}
              </h1>
              <p className="mt-2 text-[16px] text-justify">
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

export default DetailDrinks;
