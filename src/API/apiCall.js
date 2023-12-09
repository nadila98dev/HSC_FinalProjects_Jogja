import axios from "axios";
import { config } from "../config";
import Cookies from "js-cookie";

const cookies =Cookies.get('X-TOKEN')

const axiosInstance = {
  signup: async (payload) =>
    await axios
      .post(`${config.base_url}/auth/signup`, payload)
      .then((res) => res.data)
      .catch((err) => err.response.data),
  login: async (payload) =>
    await axios
      .post(`${config.base_url}/auth/signin`, payload)
      .then((res) => res.data)
      .catch((err) => err.response.data),
  detailUser: async (token) =>
    await axios
      .get(`${config.base_url}/auth/detail`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => res.data)
      .catch((err) => err.response.data),
  getSaved: async (token) =>
    await axios
      .get(`${config.base_url}/saved`, {
        headers: { Authorization: `Bearer ${cookies}` },
      })
      .then((res) => res.data)
      .catch((err) => err.response.data),
  allitems: async (q) =>
    await axios
      .get("/db.json")
      .then((res) => {
        if (q.length < 1) {
          return res.data.items;
        } else {
          const data = res.data.items.filter((item) => {
            const name = item.name.toLowerCase();
            const keyword = q.toLowerCase();

            for (let i = 0; i < keyword.length; i++) {
              if (!name.includes(keyword[i])) {
                return false;
              }
            }
            return true;
          });
          return data;
        }
      })
      .catch((err) => console.log(err)),
  category: async (id) =>
    await axios
      .get("/db.json")
      .then((res) => res.data.category)
      .catch((err) => console.log(err)),
  items: async (id) =>
    await axios
      .get(`${config.base_url}/items`, {
        params: {
          categoryId: id,
        },
      })
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      }),
  detailItems: async (id) => {
    try {
      const response = await axios.get(`${config.base_url}/items/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch item details: ${error.message}`);
      throw error;
    }
  },
  itemById: async (id) => {
    try {
      const response = await axios.get(`${config.base_url}/items/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Failed to fetch item by ID: ${error.message}`);
      throw error;
    }
  },
};

export default axiosInstance;
