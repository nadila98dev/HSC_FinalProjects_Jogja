import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Landing/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import BotButton from "../../../Components/Landing/Landing-bot/BotButton";

import DrinksCard from "../Components/DrinksCard";
import axiosInstance from "../../../API/apiCall";
// import DrinksData from "/src/Database/drinksData.json";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const callApi = async () => {
    axiosInstance.items(3).then((res) => {
      setDrinks(res);
    });
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <div className="flex flex-col min-h-screen ">
      <div className='w-screen h-screen flex flex-col items-center bg-[url("/Assets/drinks/background-drinks-page.jpg")] bg-cover bg-no-repeat bg-center bg-fixed'>
        <Navbar />
        <div className="w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col">
          <h1 className="text-white text-5xl lg:text-[72px] italic text-center">
            Drinks
          </h1>
          <p className="text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]">
            Jogjakarta's drinks culinary scene is a vibrant tapestry of flavors
            and traditions, reflecting the rich cultural heritage of this
            Indonesian city.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg border-spacing-3 px-5 ">
        <div className="flex flex-col md:flex-row md:px-[40px] md:justify-between lg:px-[80px] xl:px-[140px]">
          <div className="flex flex-col justify-center md:items-start w-full py-8">
            <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
              Drinks
            </h1>
            <div className="flex ">
              Explore drinks
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
              These unique and tantalizing beverages encapsulate the essence of
              Jogjakarta's culinary creativity, offering a sensory journey
              through the diverse and delightful flavors of this Indonesian
              city.
            </p>
          </div>
        </div>
        <section className="flex flex-wrap justify-center mt-10 gap-5">
          {drinks.map((drinks, index) => (
            <DrinksCard
              key={index}
              item={drinks.slug}
              title={drinks.name}
              src={drinks.src}
              description={drinks.description}
              id={drinks.id}
            />
          ))}
        </section>
      </div>
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default Drinks;
