import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../API/apiCall";
import { config } from "../../config";

const DetailOrder = ({ orderDetails }) => {
  console.log(orderDetails);
  // if (!orderDetails) {
  //   return <div>No order data available</div>;
  // }
  const [detail, setDetail] = useState();
  const getDetail = async (itemId) => {
    const res = await axiosInstance.detailItems(itemId);
    return res.data;
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const details = await Promise.all(
        orderDetails?.cartData?.map((item) => getDetail(item.item.id))
      );
      setDetail(details);
    };

    fetchDetails();
  }, [orderDetails?.cartData]);
  return (
    <>
      <div className="px-4 bg-background1 pb-6 font-Poppins">
        <p className="text-[20px] pt-4 ml-6 md:text-center md:ml-0">
          Order Details
        </p>
        <div className="mt-4 p-4 text-[14px] rounded-xl bg-white shadow-xl">
          <div className="flex gap-[54px] sm:gap-20">
            <p className="text-gray">Order no</p>
            <p>: {orderDetails?.trxId}</p>
          </div>
          <div className="flex gap-10 sm:gap-[66px]">
            <p className="text-gray">Order date</p>
            <p>: {orderDetails?.detetimePayment}</p>
          </div>
          <div className="flex gap-1 sm:gap-[30px]">
            <p className="text-gray">Order Summary</p>
            <p>: {orderDetails.cartData?.length} items</p>
          </div>
          <div className="mt-2">
            <p>Total: Rp. {orderDetails?.totalCartPrice}</p>
            <p>{orderDetails?.statusOrder}</p>
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
                <p>{orderDetails.statusOrder}</p>
              </div>
              <div className=" flex gap-2 items-center ">
                <i className="bx bx-alarm-exclamation text-button font-bold"></i>
                <p>Delivered on {orderDetails.detetimePayment}</p>
              </div>
              <div className="w-full px-1 py-1 mt-2 rounded-md border border-gray text-[12px]">
                <p>
                  Shipping Company: Jogja{" "}
                  <span className="text-[#f05e16]">express</span>
                </p>
              </div>
              <div className="mt-4 grid gap-4 grid-cols-2">
                {orderDetails?.cartData?.map((item, index) => {
                  return (
                    <div key={index} className="flex gap-4">
                      <div>
                        <img
                          className="rounded-md w-[100px] h-[70px]"
                          src={`${config.host_url}/${detail?.[index]?.image}`}
                          alt={item?.name}
                        />
                      </div>
                      <div className="text-[12px]">
                        <p>
                          <b>{item?.name}</b>
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 text-[14px] rounded-xl bg-white shadow-xl">
            <div className="flex gap-4 items-center">
              <i className="bx bxs-map text-button"></i>
              <p>Delivery Address</p>
            </div>
            <div className="pl-[30px] mt-4 flex flex-col gap-2 text-[14px]">
              <p>{orderDetails?.user?.name}</p>
              <p>{orderDetails?.user?.address}</p>
              <p>{orderDetails?.user?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailOrder;
