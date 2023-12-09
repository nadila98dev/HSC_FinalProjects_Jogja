import React, { useState, useEffect } from "react";

import ReuseNav from "/src/Components/ReuseableNav/ReuseNav";
import Footer from "/src/Components/Footer/Footer";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import AddToCartButton from "../../../Components/Atoms/AddToCartButton";
import ShareButton from "../../../Components/Atoms/ShareButton";
import Popup from "../../../Components/PopUp/Popup";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { json, useParams } from "react-router-dom";
import ImgSweper from "../Components/Atoms/ImgSweper";
import axiosInstance from "../../../API/apiCall";

import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../Utils/Carts";
import { config } from "../../../config";

export default function DetailMuseum() {
  // Route
  const navigateToMuseumPage = useNavigate();

  const [detail, setDetail] = useState({});
  const { id } = useParams();
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const callApi = async () => {
    const response = await axiosInstance.itemById(id)
    setDetail(response.data)
  };

  useEffect(() => {
    callApi();
  }, [id]);

  const handleAddClick = () => {
    const newItem = {
      id: detail.id,
      src: detail.src,
      name: detail.name,
      price: detail.price,
      quantity: detail.quantity
    }
    addToCart(newItem);
    const message = `The ticket for ${newItem.name} has been added to the cart.`;
    setPopupMessage(message);
    setShowPopup(true);
  }

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
        <div className="lg:flex lg:items-center lg:justify-center">
          <ImgSweper image={`${config.host_url}/${detail.image}`} />
        </div>
        <div className="w-screen h-fit bg-[#F1F8FF] py-5 px-5 lg:h-[500px] lg:w-[50vw] justify-center items-center flex">
          <section className="px-5 md:w-[75%] lg:w-full ">
            <div className="flex flex-1  justify-between items-center mb-5">
              <div>
                <span className="font-Poppins">
                  Museum
                </span>
              </div>
              <ShareButton />
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
              <div className="mt-5">
                <AddToCartButton id={detail.id}  onClick={handleAddClick}/>
              </div>
              <Popup
                  message={popupMessage}
                  onClose={() => {
                    setShowPopup(false);
                  }}
                  showPopup={showPopup}
                />
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
