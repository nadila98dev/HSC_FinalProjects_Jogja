import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: [],
  },
  reducers: {
    fetchCartSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    },
  },
});

export const {
  fetchCartSuccess
} = cartSlice.actions;

export default cartSlice.reducer;
