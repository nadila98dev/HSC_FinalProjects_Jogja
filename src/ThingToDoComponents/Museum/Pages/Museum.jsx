import React, { useState, useEffect } from "react";
import CardList from "../Components/CardList";
import Navbar from "../../../Components/Landing/Navbar/Navbar";
// import axios from 'axios'

import axiosInstance from "/src/API/apiCall.js";
import { config } from "../../../config";
import Cookies from "js-cookie";
import { setSavedActions } from "../../../redux/saved/savedActions";
import { useDispatch } from "react-redux";

export default function Museum() {
  const [museum, setMuseum] = useState([]);
  const callApi = async () => {
    const response = await axiosInstance.items(6);
    setMuseum(response.data);
  };
  const dispatch = useDispatch();
  const token = Cookies.get("X-TOKEN");

  useEffect(() => {
    callApi();
    dispatch(setSavedActions(token));
  }, [dispatch]);
  return (
    <div className="flex flex-col min-h-screen ">
      <div className="bg-[#f1f8ff]  h-full flex flex-col justify-center mx-auto">
        <div className='bg-[url("/Assets/museum/background-museum.png")] bg-cover bg-center bg-no-repeat bg-fixed flex flex-col justify-center items-center '>
          <Navbar />
          <div className="w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col">
            <h1 className="text-white text-5xl lg:text-[72px] italic text-center">
              Museums
            </h1>
            <p className="text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]">
              Discover Yogyakarta's museums, where history and culture
              intertwine in a memorable and captivating journey.
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg border-spacing-3 px-5 ">
          <div className="flex flex-col md:flex-row md:px-[40px] md:justify-between lg:px-[80px] xl:px-[140px]">
            <div className="flex flex-col justify-center md:items-start w-full py-8">
              <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
                Museums
              </h1>
              <div className="flex ">
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
              </div>
            </div>
            <div className="flex w-full md:w-[400px] lg:w-[500px] xl:w-[600px]  text-[12px] lg:text-[16px] md:items-center md:text-start lg:pt-6">
              <p>
                Embark on an enriching adventure through Yogyakarta's
                fascinating museums and delve into the captivating tapestry of
                history and culture that awaits your exploration.
              </p>
            </div>
          </div>
          <section className="flex flex-wrap justify-center mt-10 gap-5">
            {museum ? (
              museum.map((item, index) => {
                return (
                  <CardList
                    key={index}
                    id={item.id}
                    item={item.slug}
                    title={item?.name}
                    src={`${config.host_url}/${item?.image}`}
                    address={item?.address}
                  />
                );
              })
            ) : (
              <div className="mx-auto">
                {" "}
                <h1>Data Not Found</h1>{" "}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
