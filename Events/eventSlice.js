import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseURL";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await fetch(baseUrl + "events");
  return response.json();
});

export const createEvent = createAsyncThunk(
  "events/createEvent",
  async (eventObject = {title: "func title", eventId: 999, date: new Date(), description: 'test description'}) => {
    const {eventId, date, title, description} = eventObject;
    const response = await fetch(baseUrl + "events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: eventId,
        date: date,
        title: title,
        description: description,
      }),
    });
    // console.log(`The 'response' in JSON string form is ${JSON.stringify(response, '', 2)}`)
    return response.json();
  }
);

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
    },
    [createEvent.pending]: (state) => {
      state.isLoading = true;
    },
    [createEvent.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
    //   console.log(`The "action.payload" is ${JSON.stringify(action.payload, '', 2)}`);
    },
    [createEvent.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const eventsReducer = eventsSlice.reducer;

// export const { addEvent } = eventsSlice.actions;
