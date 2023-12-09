import axiosInstance from "../../API/apiCall";
import { setSavedStatus} from './savedSlice';
import { SET_SAVED_STATUS} from './savedTypes';


export const setSavedActions = (token) => async (dispatch) => {
  // type: SET_SAVED_STATUS,
  // payload: { itemId, isSolid }
  const res = await axiosInstance.getSaved(token)
  // console.log('data',res.data)
  dispatch(setSavedStatus(res.data));
};
