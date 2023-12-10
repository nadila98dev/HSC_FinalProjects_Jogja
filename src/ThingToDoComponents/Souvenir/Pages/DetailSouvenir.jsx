import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// import axiosSouvenir from "../../../API/apiSouvenir";

// import SouvenirButton from "../Components/SouvenirButton";

import ReuseNav from "../../../Components/ReuseableNav/ReuseNav";
import BotButton from "../../../Components/Landing/Landing-bot/BotButton";
import Footer from "/src/Components/Footer/Footer";
import AddToCartButton from "../../../Components/Atoms/AddToCartButton";
import ShareButton from "../../../Components/Atoms/ShareButton";
import Popup from "../../../Components/PopUp/Popup";

import axiosInstance from "../../../API/apiCall";
import { addToCart } from "../../../Utils/Carts";
import { config } from "../../../config";

const DetailSouvenir = () => {
  const navigateToSouvenirPage = useNavigate();
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  console.log(id);

  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const callApi = async () => {
    const response = await axiosInstance.itemById(id);
    setDetail(response.data[0]);
  };

  console.log(detail);
  useEffect(() => {
    callApi();
  }, [id]);

  const handleAddClick = () => {
    const newItem = {
      id: detail.id,
      src: detail.src,
      name: detail.name,
      price: detail.price,
      quantity: detail.quantity,
    };
    addToCart(newItem);
    const message = `The ticket for ${newItem.name} has been added to the cart.`;
    setPopupMessage(message);
    setShowPopup(true);
  };

  return (
    <div className="min-h-screen">
      <ReuseNav />
      <div className="w-screen h[80px] flex justify-end items-center py-4 gap-3 sm:pr-5">
        <div
          className="flex gap-3 items-center bg-button2 rounded-xl w-[270px] cursor-pointer drop-shadow-md bottom-14"
          onClick={() => navigateToSouvenirPage("/things-to-do/souvenir-jogja")}
        >
          <button
            id="botbutton"
            className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1]"
          >
            <i className="bx bx-x"></i>
          </button>
          <p className="font-Poppins">Back to Souvenir Page</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 m-auto ">
        <div className="object-cover grid-cols-4 shrink-0 lg:grid-cols-12 min-w-fit flex justify-end items-end">
          <img
            className="w-full lg:w-[700px] lg:h-[400px]"
            src={`${config.host_url}/${detail.image}`}
            alt="Souvenir"
          />
        </div>
        <div className="flex-col justify-start md:items-start w-full py-8 lg:w-[700px]">
          <div className="flex px-4 sm:px-6 md:px-8 justify-between">
            <p>Souvenir</p>
            <ShareButton />
          </div>
          <div className="max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <h1 className="my-4 text-5xl font-bold text-start font-lora">
              {detail.name}
            </h1>
          </div>
          <div className="flex flex-col max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <p className="mt-4 max-w-3x1 space-y-6">{detail.description}</p>
            <h3 className="mt-4 text-2xl">Rp. {detail.price}</h3>
          </div>
          <div className="mt-4 max-w-7x1 nx-auto px-4 sm:px-6 md:px-8">
            <AddToCartButton id={detail.id} onClick={handleAddClick} />
          </div>
          <Popup
            message={popupMessage}
            id={detail.id}
            onClose={() => {
              setShowPopup(false);
            }}
            showPopup={showPopup}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <BotButton />
      </div>
      <Footer />
    </div>
  );
};

export default DetailSouvenir;
