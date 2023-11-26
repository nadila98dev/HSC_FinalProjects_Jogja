import { configureStore } from '@reduxjs/toolkit';
import userReducer from './auth/userSlice'; // Corrected import statement

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;