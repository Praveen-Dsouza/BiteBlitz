import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cart";
import resInfoReducer from "./storeSlices/restaurantInfo";

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        // cat reducer
        resInfo: resInfoReducer
    }
});

export default appStore;