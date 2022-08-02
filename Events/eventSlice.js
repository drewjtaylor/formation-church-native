import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseURL";

export const fetchEvents = createAsyncThunk(
    "events/fetchEvents",
    async () => {
        const response = await fetch(baseUrl + 'events');
        return response.json();
    }
)


const eventsSlice = createSlice({
    name: 'events',
    initialState: { isLoading: true, errMess: null, eventsArray: [] },
    reducers: {
        // addEvent: (state, action) => {
        //     const newEvent = {
        //         id: state.eventsArray.length+1,
        //         ...action.payload
        //     };
        //     state.eventsArray.push(newEvent);
        // }
    }
})

export const eventsReducer = eventsSlice.reducer;

export const { addEvent } = eventsSlice.actions;

export const SelectAllEvents = (state) => state.events.eventsArray;