import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import savedReducer from "./saved/savedSlice"; // Corrected import statement

const store = configureStore({
  reducer: {
    user: userReducer,
    saved: savedReducer,
  },
});

export default store;
