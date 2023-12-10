
import Cookies from "js-cookie";
import { config } from "../../config";
import { fetchCartSuccess } from "./cartSlices";
import axios from 'axios'

const token = Cookies.get('X-TOKEN')

export const fetchCart = () => async (dispatch) => {
  const res = await axios.get(`${config.base_url}/cart`,{headers:{Authorization: `Bearer ${token}`}})
  dispatch(fetchCartSuccess(res.data));
};
