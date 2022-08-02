import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseURL";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await fetch(baseUrl + "events");
  return response.json();
});

const eventsSlice = createSlice({
  name: "events",
  initialState: { isLoading: true, errMess: null, eventsArray: [] },
  reducers: {},
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.eventsArray = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    }
  },
});

export const eventsReducer = eventsSlice.reducer;

// export const { addEvent } = eventsSlice.actions;
