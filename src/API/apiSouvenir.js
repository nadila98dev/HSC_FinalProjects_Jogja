const API_SOUVENIR = "https://my-json-server.typicode.com/nadila98dev/apiSouvenir"

import axios from "axios"
import React from "react"

const axiosSouvenir = {
    souvenir: async() => await axios.get(API_SOUVENIR +'/souvenir').then((res) => res.data).catch((err) => { console.log(err)}),
    detail: async (id) => await axios.get(`${API_SOUVENIR}/souvenir/${id}`).then((res) => res.data).catch((err) => { console.log(err)}),

}

export default axiosSouvenir