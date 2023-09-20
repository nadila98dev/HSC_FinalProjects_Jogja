import React from "react";
import ButtonLove from "../../../Components/Atoms/ButtonLove";
import { Link } from "react-router-dom";
// untuk card

const CardSection = ({ imageSrc, title, description, item , id}) => {
  return (
    // pecah card disini
    // <Link to={`/things-to-do/attraction-jogja/${item}`}> Kalo mau pake Link
    <div className="w-[280px] sm:w-[240px] md:w-[233px] lg:w-[310px] xl:w-[400px] mb-[10px] lg:mb-[30px] bg-white px-3 py-2 flex flex-col  rounded-lg justify-center break-inside-avoid">
      <div className="h-fit overflow-hidden rounded-lg mt-1">
        <img
          className="hover:scale-105 duration-300"
          src={imageSrc}
          alt="image-card"
        />
      </div>
      <div className='flex justify-end h-0 relative bottom-12 xl:bottom-[52px]'>
          <ButtonLove 
          id={id} />
      </div>
      <div className="flex flex-col pl-2 pt-2">
        <p className="font-semibold font-Poppins text-[20px]">{title}</p>
        <p className="mt-2 text-justify text-[12px] line-clamp-3">
          {description}
        </p>
      </div>
    </div>
    // </Link>
  );
};
export default CardSection;
