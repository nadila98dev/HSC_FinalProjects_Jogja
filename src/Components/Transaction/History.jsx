import React from "react";
import { Link } from "react-router-dom";

const History = ({ order }) => {
  if (!order) {
    return <div>No order data available</div>;
  }

  const renderOrderImage = (items) => {
    return items.map((item, index) => (
      <img
        key={index}
        className="rounded-lg w-[200px]"
        src={item.image}
        alt={item.name}
      />
    ));
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "SUCCESS":
        return "bx bx-check-circle";
      case "PENDING":
        return "bx bx-time";
      case "FAILED":
        return "bx bx-x-circle";
      default:
        return "bx bx-question-mark";
    }
  };
  return (
    <div className="font-Poppins">
      <div className="rounded-xl shadow-xl bg-white">
        <div className="text-[14px] p-4 border-b rounded-t-xl flex justify-between items-center">
          <div>
            <p>{order.detetimePayment}</p>
            <p>Total: Rp. {order.totalCartPrice}</p>
          </div>
          <Link to={`/transaction/detail/${order.id}`}>
            <div className="flex items-center gap-2 text-button cursor-pointer">
              <p>Detail</p>
              <i className="bx bxs-right-arrow"></i>
            </div>
          </Link>
        </div>
        <div className="p-4 rounded-b-xl">
          <div className="flex gap-2 items-center text-[14px]">
            <i className={`${getStatusIcon(order.statusPayment)}`}></i>
            <p>{order.statusOrder}</p>
          </div>
          <div className="mt-2 flex flex-col gap-2">
            <div className="grid sm:grid-cols-2 gap-4 justify-items-center">
              {renderOrderImage(order.cartData)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
