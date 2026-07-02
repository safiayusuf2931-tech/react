

import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "MenuCart",
    initialState:{
        CartItem:[]
    },
    reducers:{
        AddToCart: (state , action) => {
            const NewData = action.payload;
            state.CartItem.push(NewData)
        }
    }
})
export const {AddToCart} = Cart.actions;
export default Cart.reducer