import { createSlice } from "@reduxjs/toolkit";

const restaurantInfo = createSlice({
    name: "resInfo",
    initialState : {
        resInfo: []
    },
    reducers: {
        addResInfo: (state, action) => {
            state.resInfo.push(action.payload)
        }
    }
})

export const { addResInfo } = restaurantInfo.actions;

export default restaurantInfo.reducer;