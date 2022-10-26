import cartReducer from "./features/cartSlice";
import modalReducer from "./features/modalSlice";
import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});
