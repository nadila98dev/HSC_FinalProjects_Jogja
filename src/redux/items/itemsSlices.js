import { createSlice } from '@reduxjs/toolkit';

const itemSlice = createSlice({
  name: 'items',
  initialState: {
    data: [],
  },
  reducers: {
    fetchItemsSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.error = null;
    },
  },
});

export const {
  fetchItemsSuccess
} = itemSlice.actions;

export default itemSlice.reducer;
