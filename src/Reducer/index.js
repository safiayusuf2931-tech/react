import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
  name: "MenuCart",
  initialState: {
    CartItem: [],
  },

  reducers: {
    AddToCart: (state, action) => {
      const NewData = action.payload;

      const existing = state.CartItem.find(
        (item) => item.id === NewData.id
      );

      if (existing) {
        existing.qty += 1;
      } else {
        state.CartItem.push({
          ...NewData,
          qty: 1,
        });
      }
    },

    RemoveFromCart: (state, action) => {
      state.CartItem = state.CartItem.filter(
        (item) => item.id !== action.payload
      );
    },

    IncreaseQty: (state, action) => {
      const item = state.CartItem.find(
        (item) => item.id === action.payload
      );

      if (item) {
        item.qty += 1;
      }
    },

    DecreaseQty: (state, action) => {
      const item = state.CartItem.find(
        (item) => item.id === action.payload
      );

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    ClearCart: (state) => {
      state.CartItem = [];
    },
  },
});

export const {
  AddToCart,
  RemoveFromCart,
  IncreaseQty,
  DecreaseQty,
  ClearCart,
} = Cart.actions;

export default Cart.reducer;