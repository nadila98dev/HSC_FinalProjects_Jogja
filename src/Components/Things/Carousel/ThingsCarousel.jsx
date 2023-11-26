import React from "react";
import { useNavigate } from "react-router-dom";

import ButtonLove from "../../Atoms/ButtonLove";

import image1 from "/Assets/things-to-do/attraction-1.png";
import image2 from "/Assets/things-to-do/artactivities-1.png";
import image3 from "/Assets/things-to-do/museum-1.png";
import image4 from "/Assets/things-to-do/souvenir-1.png";
import image5 from "/Assets/things-to-do/food-1.png";
import image6 from "/Assets/things-to-do/drinks-1.png";
import image7 from "/Assets/things-to-do/hotels-1.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./thingsCarousel.css";
import { Pagination, Navigation } from "swiper/modules";

const ThingsCarousel = () => {
  const navigateToMuseumPageJogja = useNavigate();
  const navigateToHotelPageJogja = useNavigate();
  const navigateToArtActivitiesPageJogja = useNavigate();
  const navigateToSouvenirPageJogja = useNavigate();
  const navigateToFoodPageJogja = useNavigate();
  const navigateToDrinksPageJogja = useNavigate();
  const navigateToAttractionPageJogja = useNavigate();

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
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md ">
              <img
                onClick={() =>
                  navigateToAttractionPageJogja(
                    "/things-to-do/attraction-jogja"
                  )
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] xl:w-[400px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image1}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-hot text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Attraction</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Experience the awe-inspiring allure of Yogyakarta, where ancient
                temples, vibrant arts, and genuine hospitality converge to
                create an unforgettable adventure for foreign explorers.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToArtActivitiesPageJogja(
                    "/things-to-do/art-activities-jogja"
                  )
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image2}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-palette text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Art Activities</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Immerse yourself in the enchanting world of art in Yogyakarta,
                where a vibrant tapestry of creative workshops, galleries, and
                cultural experiences awaits your exploration.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToMuseumPageJogja("/things-to-do/museum-jogja")
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image3}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-landmark text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Museums</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Jogja's historical museums offer a captivating journey through
                time, unveiling the rich tapestry of the city's past and
                heritage through captivating artifacts and exhibits.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToSouvenirPageJogja("/things-to-do/souvenir-jogja")
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image4}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-package text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Souvenirs</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Bring home a piece of cherished memories from Jogja through its
                diverse range of captivating souvenirs, each encapsulating the
                city's cultural richness and artistic spirit.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToFoodPageJogja("/things-to-do/food-jogja")
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image5}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-bowl-hot text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Foods</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Indulge in an array of uniquely flavorful culinary delights in
                Jogja, where traditional ingredients and cooking methods combine
                to create a taste experience unlike any other.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToDrinksPageJogja("/things-to-do/drinks-jogja")
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image6}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-drink text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Drinks</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Quench your thirst with an enticing variety of refreshing drinks
                in Jogja, ranging from exotic tropical blends to
                locally-inspired beverages, offering a sip of the city's vibrant
                flavors.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[290px] h-[400px] sm:w-[240px] md:w-[300px] xl:w-[400px] cursor-pointer ">
            <div className="h-[240px] xl:h-[320px] xl:relative overflow-hidden rounded-lg rounded-bl-none drop-shadow-md">
              <img
                onClick={() =>
                  navigateToHotelPageJogja("/things-to-do/hotel-jogja")
                }
                className="object-cover w-full h-[240px] xl:relative xl:h-[320px] rounded-lg rounded-bl-none hover:scale-105 duration-500"
                src={image7}
                alt=""
              />
              <div className="flex justify-end relative bottom-12 xl:bottom-[52px]">
                <button className="px-3 py-2 xl:px-4 xl:py-2 bg-button2 rounded-tl-lg rounded-br-lg text-[22px] xl:text-[24px]">
                  <i className="bx bxs-hotel text-button"></i>
                </button>
              </div>
            </div>
            <div className="bg-white pr-2 py-3 pl-3 md:pl-5 w-[243px] sm:w-[195px] rounded-b-lg md:w-[254px] xl:w-[343px] drop-shadow-lg">
              <h3 className="xl:text-[26px] font-semibold">Hotels</h3>
              <p className="text-[12px] xl:text-[14px] line-clamp-3">
                Discover the perfect blend of luxury and tradition as Jogja's
                hotels offer a unique experience, where modern comforts
                harmoniously intertwine with the city's rich cultural heritage.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ThingsCarousel;
