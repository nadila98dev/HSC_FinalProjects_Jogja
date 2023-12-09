import React from "react";
import ReuseNav from "../../Components/ReuseableNav/ReuseNav";
import { useNavigate } from "react-router-dom";
import DetailOrder from "../../Components/Transaction/DetailOrder";
import { config } from "../../config";
import Cookies from "js-cookie";
import axios from "axios";

const DetailTransaction = () => {
  const navigateToOrderPage = useNavigate();
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const token = Cookies.get("X-TOKEN");

    const fetchOrderDetails = async () => {
      try {
        const response = await axios.get(
          `${config.base_url}/orders/${orderId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrderDetails(response.data.orderDetails);
      } catch (error) {
        console.error("Error fetching order details:", error);
      }
    };

    fetchOrderDetails();
  }, []);
  return (
    <div>
      <ReuseNav />
      <div>
        <div
          className="w-screen h-[80px] flex justify-end items-center pr-4 gap-3
            sm:pr-5"
        >
          <div
            className="flex gap-2 items-center bg-button2 rounded-xl w-[220px] cursor-pointer drop-shadow-md bottom-14"
            onClick={() => navigateToOrderPage("/transaction")}
          >
            <button
              id="botButton"
              className="text-button  text-3xl px-[6px] py-[1px] w-[3rem] h-[3rem] flex justify-center items-center z-[1] "
            >
              <i className="bx bx-x"></i>
            </button>
            <p className="font-Poppins">Back to My Order</p>
          </div>
        </div>
      </div>
      <DetailOrder orderDetails={orderDetails} />
    </div>
  );
};

export default DetailTransaction;
