import React, { useState, useEffect } from "react";
import ReuseNav from "/src/Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { json, useParams } from "react-router-dom";
import ImgSweper from "../Components/Atoms/ImgSweper";
import axiosInstance from "../../../API/apiMuseum";

import { useNavigate } from "react-router-dom";

export default function DetailMuseum() {
  // Route
  const navigateToMuseumPage = useNavigate();

  const [detail, setDetail] = useState({});
  const { slug } = useParams();

  const callApi = async () => {
    axiosInstance.detail(slug).then((res) => {
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
            sm:pr-5">
        <div
          className="flex gap-2 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToMuseumPage("/things-to-do/museum-jogja")}
        >
          <button
            id="botButton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Museum Page</p>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:flex lg:items-center lg:justify-center mb-4">
          <ImgSweper image={detail?.src} />
        </div>
        <div className="w-screen h-fit bg-[#F1F8FF] pt-5 px-5 lg:h-[450px] lg:w-[50vw]">
          <section className="px-5 md:w-[75%] lg:w-full ">
            <div className="flex flex-1  justify-between items-center mb-5">
              <div>
                <span className="font-Poppins">
                  Museum
                </span>
              </div>
              <button className="bg-button2 w-[100px] flex items-center px-4 py-2 rounded-xl">
                <p className="text-button me-1 font-Poppins">Share </p>
                <i className="bx bx-share-alt text-[20px] text-button"></i>
              </button>
            </div>

            <div>
              <h1 className="mb-5 font-bold text-4xl font-Lora">
                {detail?.name}
              </h1>
              <p className="mt-2 mb-5 text-[14px] md:text-[1rem] text-justify">
                {" "}
                {detail?.description}
              </p>
              <span className=" md:text-2xl font-semibold">
                  Ticket Price: Rp. {detail?.price}
                </span>
              <div className="flex justify-center items-center mt-5 pb-5 ">
                <button className="bg-button w-[145px] flex items-center px-4 py-2 rounded-xl">
                  <p className="text-white me-1 font-Poppins">Buy Ticket </p>
                  <i className="bx bx-cart-alt text-[22px] text-white ml-1"></i>
                </button>
              </div>
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
}
