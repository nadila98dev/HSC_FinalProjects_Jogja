
import { config } from "../../config";
import { fetchItemsSuccess } from "./itemsSlices";
import axios from 'axios'


export const fetchItems = (keyword) => async (dispatch) => {
  const res = await axios.get(`${config.base_url}/items`,{
    params:{
      keyword: keyword
    }
  })
  dispatch(fetchItemsSuccess(res.data));
};
