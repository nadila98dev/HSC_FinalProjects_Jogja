import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ReuseNav from "/src/Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import ArtContact from "../Components/Art-detail/ArtContact";
import ShareButton from "../../../Components/Atoms/ShareButton";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";

const DetailArt = () => {
  const navigationToArtActivitiesPage = useNavigate();
  const [detail, setDetail] = useState([]);
  const { id } = useParams();

  const callApi = async () => {
    try {
      const response = await axiosInstance.itemById(id);
      console.log("API Response:", response.data);
      setDetail(response.data);
    } catch (error) {
      console.error(`Failed to fetch item details: ${error.message}`);
    }
  };

  useEffect(() => {
    callApi();
  }, [id]);

  return (
    <div className="flex flex-col min-h-screen pb-5">
      <ReuseNav />
      <div className="w-screen h[80px] flex justify-end items-center py-4 gap-3 sm:pr-5 ">
        <div
          className="flex gap-2 items-center bg-button2 rounded-xl w-[280px] cursor-pointer drop-shadow-md bottom-14 pr-2 "
          onClick={() =>
            navigationToArtActivitiesPage("/things-to-do/art-activities-jogja")
          }
        >
          <button
            id="botbutton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1]"
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Art Activities Page</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 m-auto ">
        <div className="object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit">
          <img
            className="w-full h-full max-h-[540px]"
            src={`${config.host_url}/${detail.image}`}
            alt="Souvenir"
          />
        </div>
        <div className="flex-col justify-start md:items-start w-full py-8 pt-20 bg-background1">
          <div className="flex flex-row px-4 sm:px-6 md:px-8 justify-between space-x-4">
            <span className="font-Poppins">Art Activities</span>
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
      <ArtContact map={detail.map} />
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailArt;
