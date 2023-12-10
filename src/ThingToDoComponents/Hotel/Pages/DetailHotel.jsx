import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ContactHotel from "../Components/ContactHotel";
import ReuseNav from "/src/Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import ShareButton from "../../../Components/Atoms/ShareButton";

import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";

const DetailHotel = () => {
  const navigateToHotelPageJogja = useNavigate();
  const [detail, setDetail] = useState({});
  const { id } = useParams();

  const callApi = async () => {
    const response = await axiosInstance.itemById(id);
    console.log("res", response);
    setDetail(response.data[0]);
  };
  useEffect(() => {
    callApi();
  }, [id]);

  return (
    <div>
      <ReuseNav />
      <div
        className="w-screen h-[80px] flex justify-end items-center pl-4 gap-3
                    sm:pr-5
                "
      >
        <div
          className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToHotelPageJogja("/things-to-do/hotel-jogja")}
        >
          <button
            id="botButton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Hotel Page</p>
        </div>
      </div>
      <div className="drop-shadow-xl">
        <img src={`${config.host_url}/${detail?.image}`} className="" />
      </div>
      <div>
        <div className="bg-[#F1F8FF] pb-5 pt-10 flex flex-col justify-center items-center h-fit">
          <div className="flex justify-between gap-4 items-center md:gap-2 w-screen px-10">
            <h2 className="font-semibold text-base font-Poppins">
              Accommodation{" "}
            </h2>
            <ShareButton />
          </div>
          <div className="lg:flex lg:gap-5 lg:w-screen lg:justify-center">
            <div>
              <div className="mt-8 text-2xl font-medium font-Lora flex justify-start px-10">
                <h1>{detail?.name}</h1>
              </div>
              <div className="mt-3 px-10 text-[12px] text-justify font-normal font-Poppins md:w-[75vw] lg:w-[25rem] xl:w-[40rem] lg:text-[14px] lg:mt-6">
                <p>
                  Jogja Hotel Tampere rooms invite you to perfect rest and
                  enjoyment! Our selection of rooms offers a mystical atmosphere
                  and story all designed to make your stay more enjoyable. We
                  are happy to tell you more about the details you can find in
                  our rooms.{" "}
                </p>
              </div>
            </div>
            <ContactHotel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailHotel;
