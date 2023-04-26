import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    token: null,
    name: null,
    id: null,
    imageUrl: null,
    // loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.data = action.payload.data;
            state.token = action.payload.token;
            state.name = action.payload.name;
            state.id = action.payload.id;
            state.imageUrl = action.payload.imageUrl;
            console.log(action.payload.data, "redux data");
        },
        setLogout: (state) => {
            state.data = [];
            state.token = null;
            state.name = null;
            state.id = null;
            state.imageUrl = null;
        },
    },
});

export const userAction = userSlice.actions;
export default userSlice.reducer;
