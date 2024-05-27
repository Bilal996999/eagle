import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
    name: "form",
    initialState: {
        data: [
            {key: "Pickup", value: ""},
            {key: "Return", value: ""},
            {key: "Age", value: ""},
            {key: "Coverage", value: ""},
            {key: "Vehicle", value: ""},
        ],
        payload:{
            
        },
        currentView: "duration",
        personalView: "license",
        progressBarValue: 0,
        condition: false,
    },
    reducers: {
        addFormData: (state, action) => {
            state.data = action.payload;
            state.condition = true;
        },
        updateCurrentView: (state, action)=>{
            state.currentView = action.payload;
        },
        updatePersonalView: (state, action)=>{
            state.personalView = action.payload;
        },
        updatePayload: (state, action)=>{
            state.payload = {...state.payload, ...action.payload}
        },
        changePayload: (state, action)=>{
            state.payload = action.payload;
        },
        updateProgressBarValue: (state, action)=>{
            state.progressBarValue = action.payload;
        },
    }
});

export const { addFormData, updateCurrentView, updatePersonalView,changePayload, updatePayload,updateProgressBarValue } = formSlice.actions;
export default formSlice.reducer;
