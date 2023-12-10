import { startFetchingUser, fetchUserSuccess, fetchUserFailure } from './userSlice';
import axiosInstance from '../../API/apiCall';

export const fetchUsers = (token) => async (dispatch) => {
  try {
    dispatch(startFetchingUser());

    const res = await axiosInstance.detailUser(token);
    dispatch(fetchUserSuccess(res.data));
  } catch (error) {
    dispatch(fetchUserFailure(error));
  }
};
