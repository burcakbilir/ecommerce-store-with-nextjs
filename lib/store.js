import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import filterReducer from "./features/filters/filterSlice";

export const store = configureStore({
    reducer:{
       cart: cartReducer,
       filter: filterReducer
    }
})