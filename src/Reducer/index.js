import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "productCart",
  initialState: {
    CartItem: [],
  },
  reducers: {
    AddToCart: (state, action) => {
      const NewData = action.payload;
      state.CartItem.push(NewData);
    },

   removeFromCart: (state, action) => {
  state.CartItem = state.CartItem.filter(
    (item) => item.id !== action.payload
  );
},

    clearCart: (state) => {
      state.CartItem = [];
    },
  },
});

export const { AddToCart, removeFromCart, clearCart } = Cart.actions;

export default Cart.reducer;