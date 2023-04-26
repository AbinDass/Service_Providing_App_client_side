import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    appointmentdata:[],
    status:null,
};

export const appointmentSlice = createSlice({
    name: "appointment",
    initialState,
    reducers: {
        setAppointment: (state, action) => {
            state.appointmentdata.push(action.payload.appointmentdata);
            state.status = action.payload.status
            // console.log(action.payload.appointmentdata, "redux appointmentdata");
            console.log(action.payload.status, "redux status");
        },

        setRemoveAppointment: (state) => {
            state.appointmentdata = [];
        },
    },
});



export const appointmentAction = appointmentSlice.actions;
export default appointmentSlice.reducer;