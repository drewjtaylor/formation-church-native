import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../baseURL";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(baseUrl + "users");
  return response.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { isLoading: true, errMess: null, usersArray: [] },
  reducers: {},
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.usersArray = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const usersReducer = usersSlice.reducer;
