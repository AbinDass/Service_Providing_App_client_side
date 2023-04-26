import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchdata: [],
};

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.searchdata.push(action.payload.searchdata);
            console.log(action.payload.searchdata, "redux post-data");
        },

        setRemoveSearch: (state) => {
            state.searchdata = [];
        },
    },
});

export const searchAction = searchSlice.actions;
export default searchSlice.reducer;
