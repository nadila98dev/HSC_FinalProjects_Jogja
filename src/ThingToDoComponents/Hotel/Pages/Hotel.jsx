import React, { useEffect, useState } from "react";
import TitleHotel from "../Components/TitleHotel";
import HotelCarousel from "../Components/ListHotel/HotelCarousel";
import MapHotel from "../Components/MapHotel";

import Gambar6 from "/Assets/hotel/gambar6.jpg";
import axiosInstance from "../../../API/apiCall";

const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const callApi = async () => {
    const response = await axiosInstance.items(5)
    setHotels(response.data)
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <div className="mb-20 w-full h-screen relative">
          <img
            className="w-full h-full object-cover md:w-[1024px] lg:w-[1920px]"
            src={Gambar6}
            alt="/"
          />
        </div>
        <div className="absolute top-0 mt-[80px] lg:mt-[102px] h-screen flex flex-col space-y-10 justify-center items-center bg-[#020617] opacity-60 xl:w-1/3 sm:w-1/2 z-0">
          <div className="text-center space-y-5">
            <h3 className="text-4xl lg:text-5xl font-bold text-font1 font-lora">
              Place To Stay in Jogja
            </h3>
            <p className="mx-10 text-font1 font-poppins">
              Here are some of the many accommodation you find in Jogja
            </p>
          </div>
          <div className="space-x-4">
            <a href="#hotel-map">
              <button className="text-white border-2 hover:border-[#1D764A] py-2 px-5 rounded-md font-lora">
                Road Map
              </button>
            </a>
            <a href="#hotel-list">
              <button className="text-white border-2 hover:border-[#1D764A] py-2 px-5 font-lora">
                Read More
              </button>
            </a>
          </div>
        </div>
      </div>
      <div id="hotel-list">
        <TitleHotel />
        <HotelCarousel items={hotels} />
      </div>
      <div
        id="hotel-map"
        className="w-[100vw] bg-background1 flex justify-center items-center"
      >
        <MapHotel />
      </div>
    </div>
  );
};

export default Hotel;
