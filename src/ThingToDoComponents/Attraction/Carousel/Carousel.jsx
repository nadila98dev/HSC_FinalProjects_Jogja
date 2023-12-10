import React from "react";
import { IoHeartOutline } from "react-icons/io5";

import ButtonLove from "../../../Components/Atoms/ButtonLove";
import { Link } from "react-router-dom";
// untuk card

const CarouselCard = ({ image, title, item }) => {
  console.log("image", image);
  return (
    // pecah card disini
    <Link to={`/things-to-do/attraction-jogja/${item}`}>
      <div className="flex justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
          <div className="rounded-lg ml-5 mr-5 mt-6">
            <img
              src={image}
              alt={title}
              className="h-[280px] w-full object-cover object-center rounded-lg"
            />
          </div>

          <div className="py-4 px-8">
            <h3>
              <p className="block mb-3 font-semibold lg:text-[18px] sm:text-sm">
                {title}
              </p>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default CarouselCard;
