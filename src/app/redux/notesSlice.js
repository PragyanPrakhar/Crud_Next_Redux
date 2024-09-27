import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const dataSlice = createSlice({
    name: "dataSlice",
    initialState: [],
    reducers: {
        addData: (state, action) => {
            const data = {
                id: nanoid(),
                data: action.payload,
            };
            state.push(data);
        },
        removeData: (state, action) => {
            return state.filter((note) => note.id !== action.payload);
            /* Before: action.payload assumes that the payload contains just the id.
After: action.payload.id assumes that the payload is an object containing the id property. */
        },
        editData: (state, action) => {
            const index = state.findIndex(
                (note) => note.id === action.payload.id
            );
            state[index].data = action.payload.data;
        },
    },
});
export const { addData, removeData, editData } = dataSlice.actions;
export default dataSlice.reducer;
