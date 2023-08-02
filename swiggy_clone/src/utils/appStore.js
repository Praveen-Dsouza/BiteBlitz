import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cart";

const appStore = configureStore({
    reducer: {
        cart: cartReducer
        // cat reducer
    }
});

export default appStore;