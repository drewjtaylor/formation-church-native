import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../Directory/directorySlice';

export const store = configureStore({
    reducer: {
        users: usersReducer
    }
});