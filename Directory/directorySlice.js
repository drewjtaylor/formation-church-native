import users from "../demodata/demoUsers";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await fetch(baseUrl + "users");
  return response.json();
});

const initialState = {
  usersArray: users,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: state.usersArray.length + 1,
        ...action.payload,
      };
      state.usersArray.push(newUser);
    },
    toggleIsMember: (state, action) => {
      state.usersArray[action.payload].isMember =
        !state.usersArray[action.payload].isMember; //Payload should give the id number of the user
    },
    toggleIsAdmin: (state, action) => {
      state.usersArray[action.payload].isAdmin =
        !state.usersArray[action.payload].isAdmin; //Payload should give the id number of the user
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMess = null;
      state.campsitesArray = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMess = action.error ? action.error.message : "Fetch failed";
    },
  },
});

export const usersReducer = usersSlice.reducer;

export const { addUser, toggleIsAdmin, toggleIsMember } = usersSlice.actions;

export const SelectAllUsers = (state) => state.users.usersArray;
