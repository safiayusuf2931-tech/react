import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../Reducer/index"
import Cart from "../Pages/Cart";

const store = configureStore({
    reducer: {
        Cart:CartReducer,
    }
})
export default store