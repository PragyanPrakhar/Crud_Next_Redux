"use client"
import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./notesSlice";
const appStore = configureStore({
    reducer: {
        data:notesReducer,
    },
});

export default appStore;
