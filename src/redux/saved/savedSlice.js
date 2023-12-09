import { createSlice } from "@reduxjs/toolkit";

const savedSlice = createSlice({
  name: "saved",
  initialState: {
    savedStatus: {},
  },
  reducers: {
    setSavedStatus(state, action) {
      const { itemId, isSolid } = action.payload;
      state.savedStatus[itemId] = isSolid;
    },
  },
});

export const { setSavedStatus } = savedSlice.actions;
export default savedSlice.reducer;
