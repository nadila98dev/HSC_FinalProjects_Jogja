import { SET_SAVED_STATUS } from "./savedTypes";

export const setSavedStatus = (itemId, isSolid) => ({
  type: SET_SAVED_STATUS,
  payload: { itemId, isSolid },
});
