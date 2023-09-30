import React, { useState } from "react";

const PopupPayment = ({ total }) => {
  const [isPopupVisible, setIsPopupVisible] = useState(true);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(amount);
  };

  const sendEmail = () => {
    const email = "example@example.com";
    const subject = "Confirmation of Payment";
    const body = "Hi, I want to confirm my payment, Thank You!";

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`,
      "_blank"
    );
  };

  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    isPopupVisible && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-blur-md px-2">
        <div className="bg-background1 p-5 rounded-lg drop-shadow-lg text-center flex flex-col gap-2">
          <p>Please transfer to this bank account</p>
          <p>
            <b>1234 4567 7890 1234</b>
          </p>
          <p>
            Total price : <b>{formatCurrency(total)}</b>
          </p>
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={sendEmail}
              className="bg-button text-white text-[18px] py-3 px-2 mb-5 rounded-md hover:brightness-110"
            >
              <p>Confirm Payment</p>
            </button>
            <button onClick={handleClosePopup} className="bg-button text-white text-[18px] py-3 px-2 mb-5 rounded-md hover:brightness-110">
              <p>Close</p>
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupPayment;
