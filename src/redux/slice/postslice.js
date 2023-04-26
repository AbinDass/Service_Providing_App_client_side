/* eslint-disable no-whitespace-before-property */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    postdata: [],
    caption: null,
    image: [],
    isDeleted: false,
    isLiked: false,
    likedUsers: [],
    userId: null,
    _id: null,
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => {
            state.postdata.push(action.payload.postdata);
            console.log(action.payload.postdata, "redux post-data");
        },

        setRemovePost: (state) => {
            state.data = [];
        },
    },
});

export const postAction = postSlice.actions;
export default postSlice.reducer;
