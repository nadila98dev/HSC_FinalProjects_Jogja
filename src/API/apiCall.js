import axios from "axios";
import { config } from "../config";

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
      .get("/db.json")
      .then((res) => res.data.items.filter((item) => item.category_id === id))
      .catch((err) => {
        console.log(err);
      }),
  detail: async (slug) =>
    await axios
      .get("/db.json")
      .then((res) => res.data.items.filter((item) => item.slug == slug))
      .catch((err) => {
        console.log(err);
      }),
  itemById: async (id) =>
    await axios
      .get("/db.json")
      .then((res) => {
        const item = res.data.items.find((item) => item.id === id);
        return item || null;
      })
      .catch((err) => {
        console.log(err);
      }),
};

export default axiosInstance;
