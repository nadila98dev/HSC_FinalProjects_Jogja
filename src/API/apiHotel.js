const API_HOTEL = 'https://my-json-server.typicode.com/loryramadan/Hotel-API/hotel'

import React from 'react'
import axios from 'axios'

const axiosHotel = {
    hotel: async() => await axios.get(API_HOTEL).then((res) => res.data).catch((err) => {console.log(err)}),
    detail: async (id) => await axios.get(`${API_HOTEL}/${id}`).then((res) => res.data).catch((err) => {console.log(err)}),
}

export default axiosHotel