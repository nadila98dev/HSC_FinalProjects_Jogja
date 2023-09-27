import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ReuseNav from "/src/Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import AttractionContact from "../Component/AttractionContact";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import ShareButton from "../../../Components/Atoms/ShareButton";
import axiosInstance from "../../../API/apiCall";

const DetailAttraction = () => {
  const navigationToAttractionPage = useNavigate();
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  // console.log();
  const callApi = async () => {
    axiosInstance.detail(id).then((res) => {
      setDetail(res[0]);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-5 justify-center items-center">
      <ReuseNav />
      <div className="w-screen h[80px] flex justify-end items-center pt-4 gap-3 sm:pr-5">
        <div
          className="flex gap-2 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigationToAttractionPage("/things-to-do/attraction-jogja")}
        >
          <button
            id="botButton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Attraction Page</p>
        </div>  
      </div>
      <div className="flex flex-col md:flex-row mt-5 bg-background1">
        <div className="object-cover object-center flex min-w-fit lg:w-1/2 xl:items-end">
          <img className="w-full md:w-[50vw] max-w-[720px] lg:h-[500px]" src={detail.src} alt={detail.name} />
        </div>
        <div className="flex-col justify-start md:items-start w-full py-8">
          <div className="flex flex-row px-4 sm:px-6 md:px-8 justify-between space-x-4">
            <h2 className="text-2x1 text-semibold">Attraction</h2>
            <ShareButton />
          </div>
          <div className="max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <h1 className="my-4 text-5xl font-bold text-start font-lora">
              {detail.name}
            </h1>
          </div>
          <div className="flex flex-col max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <p className="mt-4 max-w-3x1 space-y-6">{detail.description}</p>
          </div>
        </div>
      </div>
      <AttractionContact map={detail.map} />
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailAttraction
