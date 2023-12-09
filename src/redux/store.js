import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/userSlice";
import savedReducer from "./saved/savedSlice"; // Corrected import statement
import itemsReducer from "./items/itemsSlices"; // Corrected import statement
import cartReducer from "./cart/cartSlices"; // Corrected import statement

const store = configureStore({
  reducer: {
    user: userReducer,
    items: itemsReducer,
    saved: savedReducer,
    cart: cartReducer
  },
});

export default store;
