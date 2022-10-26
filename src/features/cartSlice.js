import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCartItems = createAsyncThunk("cart/getCartItems", async () => {
  // return await fetch("https://course-api.com/react-useReducer-cart-project")
  //   .then((res) => res.json())
  //   .catch((err) => console.log(err));
  return await axios
    .get("https://course-api.com/react-useReducer-cart-project")
    .then((res) => res.data);
});

const initialState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
      state.amount = 0;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount = item.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      item.amount = item.amount - 1;
    },
    calculateTotal: (state) => {
      if (!state.cartItems.length) return;
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
      state.amount = action.payload.length;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
// console.log(cartSlice);
export default cartSlice.reducer;
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
