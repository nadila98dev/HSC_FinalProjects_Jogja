import React from "react";
import { Link } from "react-router-dom";
import keris from "/Assets/souvenir/keris1.png";

const History = () => {
  return (
    <div className="font-Poppins">
      <div className="rounded-xl shadow-xl bg-white">
        <div className="text-[14px] p-4 border-b rounded-t-xl flex justify-between items-center">
          <div>
            <p>10 November 2023</p>
            <p>Total: Rp. 150000</p>
          </div>
          <Link to={"/transaction/detail"}>
            <div className="flex items-center gap-2 text-button cursor-pointer">
              <p>Detail</p>
              <i className="bx bxs-right-arrow"></i>
            </div>
          </Link>
        </div>
        <div className="p-4 rounded-b-xl">
          <div className="text-lightgreen flex gap-2 items-center ">
            <i className="bx bx-check"></i>
            <p>Delivered</p>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <img className="rounded-lg w-[125px]" src={keris} alt="" />
            <p className="text-gray text-[12px]">1 item has been delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
