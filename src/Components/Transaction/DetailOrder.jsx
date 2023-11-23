import React from "react";
import { Link } from "react-router-dom";
import keris from "/Assets/souvenir/keris1.png";

const DetailOrder = () => {
  return (
    <>
      <div className="px-4 bg-background1 pb-6 font-Poppins">
        <p className="text-[20px] pt-4 ml-6 md:text-center md:ml-0">
          Order Details
        </p>
        <div className="mt-4 p-4 text-[14px] rounded-xl bg-white shadow-xl">
          <div className="flex gap-[54px] sm:gap-20">
            <p className="text-gray">Order no</p>
            <p>: 22334455666</p>
          </div>
          <div className="flex gap-10 sm:gap-[66px]">
            <p className="text-gray">Order date</p>
            <p>: 10 November 2023</p>
          </div>
          <div className="flex gap-1 sm:gap-[30px]">
            <p className="text-gray">Order Summary</p>
            <p>: 1 item</p>
          </div>
          <div className="mt-2">
            <p>Total: Rp. 150000</p>
            <p>1 item has been delivered</p>
          </div>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-4">
          <div className="mt-4 text-[14px] rounded-xl bg-white shadow-xl">
            <div className="p-4 border-b">
              <p>
                Seller: <b>Wonderful Jogja</b>
              </p>
              <Link to="/">
                <button className="px-3 py-1.5 rounded-md mt-2 bg-button text-white flex justify-center items-center gap-2 cursor-pointer">
                  <i className="bx bx-store"></i>Go to store
                </button>
              </Link>
            </div>
            <div className="p-4">
              <div className="text-button flex gap-2 items-center ">
                <i className="bx bx-check font-bold"></i>
                <p>Delivered</p>
              </div>
              <div className=" flex gap-2 items-center ">
                <i className="bx bx-alarm-exclamation text-button font-bold"></i>
                <p>Delivered on November 14th</p>
              </div>
              <div className="w-full px-1 py-1 mt-2 rounded-md border border-gray text-[12px]">
                <p>
                  Shipping Company: Jogja{" "}
                  <span className="text-[#f05e16]">express</span>
                </p>
              </div>
              <div className="mt-4 flex gap-4">
                <div>
                  <img
                    className="rounded-md w-[100px] h-[70px]"
                    src={keris}
                    alt=""
                  />
                </div>
                <div className="text-[12px]">
                  <p>
                    <b>Wonderful Jogja</b>
                  </p>
                  <p>Keris</p>
                  <Link to="/">
                    <button className="px-3 py-1.5 rounded-md mt-1 bg-button text-white flex justify-center items-center gap-2 cursor-pointer">
                      <i className="bx bx-store"></i>Go to item
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 text-[14px] rounded-xl bg-white shadow-xl">
            <div className="flex gap-4 items-center">
              <i className="bx bxs-map text-button"></i>
              <p>Delivery Address</p>
            </div>
            <div className="pl-[30px] mt-4 flex flex-col gap-2 text-[14px]">
              <p>Buyer: M NIZAR ALMAS S</p>
              <p>
                Dumlupinar Mah, Random Sk. Bina no 10, kat 23, Nilufer/Bursa
              </p>
              <p>552*********52</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
