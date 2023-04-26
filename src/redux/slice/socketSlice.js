import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
};

export const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        setSocket: (state, action) => {
            state.data.push(action.payload.socket);
            console.log(action.payload.data, "redux soacket-data");
        },

        setRemoveSocket: (state) => {
            state.data = [];
        },
    },
});

export const socketAction = socketSlice.actions;
export default socketSlice.reducer;
