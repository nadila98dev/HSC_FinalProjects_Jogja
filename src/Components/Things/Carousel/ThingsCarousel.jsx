import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ButtonLove from "../../Atoms/ButtonLove";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./thingsCarousel.css";
import { Pagination, Navigation } from "swiper/modules";

const ThingsCarousel = () => {

  const fetchCategory = async () => {
    try{
      const data = await axios.get("http://localhost:5000/api/v1/categories")

      setCategory(data.data.data)
    }
    catch(error) {
      console.error(error)
    }
  }
  useEffect(() => {
    
    fetchCategory()
  }, [])
  
  const [category, setCategory] = useState([]);

const navigateToPageJogja = useNavigate()

  return (
    <div className="w-screen mt-10 bg-background1 flex thingSwiper ">
      <Swiper
        className="pt-20"
        slidesPerView={1}
        spaceBetween={25}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        navigation={true}
        breakpoints={{
          500: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2.3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1100: {
            slidesPerView: 3.3,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 3.5,
            spaceBetween: 30,
          },
          1700: {
            slidesPerView: 3.8,
            spaceBetween: 30,
          },
          1900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          2000: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
          2150: {
            slidesPerView: 4.8,
            spaceBetween: 30,
          },
          2400: {
            slidesPerView: 5.2,
            spaceBetween: 30,
          },
        }}
      >
        {category.map((item) => (
                    <>
                <SwiperSlide>
                    <div className='w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer '>
                        <div className='h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md '>
                            <img onClick={() => navigateToPageJogja(`/things-to-do/${item.slug}`)}
                            className='object-cover w-full h-[240px] xl:relative xl:h-[320px] xl:w-[400px] rounded-lg rounded-bl-none hover:scale-105 duration-500' src={item.image} alt='' />
                            <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                                    <i className='bx bxs-hot text-button'></i>
                                </button>
                            </div>
                        </div>
                        <div className='bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg'>
                            <h3 className='xl:text-[26px] font-semibold'>{item.name}</h3>
                        </div>
                    </div>
                </SwiperSlide>
                </>
                ))}
      </Swiper>
    </div>
  );
};

export default ThingsCarousel;
