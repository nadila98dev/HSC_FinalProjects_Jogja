import React, { useState } from "react";
import { Link } from "react-router-dom";

import SouvenirButton from "./SouvenirButton";
import ButtonLove from "../../../Components/Atoms/ButtonLove";
import { config } from "../../../config";

const SouvenirCard = ({ item, pic, title, desc, price, id }) => {
  console.log(pic);

  return (
    <div className="w-full p-4">
      <div className="bg-white rounded-lg">
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="object-cover rounded-lg w-full h-48 hover:scale-105 duration-300"
            src={`${config.host_url}/${pic}`}
            alt=""
          />{" "}
          {/* Use curly braces to interpolate the pic property */}
          <div className="flex justify-end relative bottom-12 xl:bottom-[52px] h-0">
            <ButtonLove id={id} />
          </div>
        </div>
        <div className="p-4">
          <h4 className="text-xl font-semibold text-blue-600">{title}</h4>
          <p className="mb-2 leading-normal">
            <span>Rp. </span>
            {price}
          </p>
          <Link to={`/things-to-do/souvenir-jogja/${item}`}>
            <SouvenirButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SouvenirCard;
