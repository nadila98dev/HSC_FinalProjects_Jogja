import React, { useEffect, useState } from "react";
import Navbar from "../../../Components/Landing/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

import FoodCard from "../Components/FoodCard";
import axiosInstance from "../../../API/apiCall";
import { config } from "../../../config";


const Food = () => {
  const [foods, setFoods] = useState([]);

  const callApi = async () => {
    const response = await axiosInstance.items(4)
    setFoods(response.data)
  };

  useEffect(() => {
    callApi();
  }, []);


  return (
    <div className="flex flex-col min-h-screen ">
      <div className='w-screen h-screen flex flex-col items-center bg-[url("/Assets/foods/background-food-page.png")] bg-cover bg-no-repeat bg-center bg-fixed'>
        <Navbar />
        <div className="w-screen sm:w-[70vw] h-[90vh] flex justify-center items-center px-10 pb-[7rem] flex-col">
          <h1 className="text-white text-5xl lg:text-[72px] italic text-center">
            Foods
          </h1>
          <p className="text-white text-[12px] text-center mt-5 lg:w-[50vw] lg:text-[16px]">
            The food in Jogja is a tantalizing blend of rich flavors and unique
            ingredients that create a culinary experience like no other.
          </p>
        </div>
      </div>
      <div className="bg-white shadow-lg border-spacing-3 px-5 ">
        <div className="flex flex-col md:flex-row md:px-[40px] md:justify-between lg:px-[80px] xl:px-[140px]">
          <div className="flex flex-col justify-center md:items-start w-full py-8">
            <h1 className=" mt-5 mb-4 text-4xl font-medium tracking-tight leading-none md:text-5x1 xl:text-6x1  font-lora">
              Foods
            </h1>
            <div className="flex ">
              Explore foods
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
              The food in Jogja is simply extraordinary, boasting a delightful
              blend of flavors that will tantalize your taste buds and leave you
              craving for more.
            </p>
          </div>
        </div>
        <section className="flex flex-wrap justify-center mt-10 gap-5">
          {foods.map((food, index) => (
            <FoodCard
              key={index}
              item={food.slug}
              title={food.name}
              src={`${config.host_url}/${food?.image}`}
              description={food.description}
              id = {food.id}
            />
          ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Food;
