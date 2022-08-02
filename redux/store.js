import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from '../Directory/directorySlice';
import { eventsReducer } from '../Events/eventSlice';

export const store = configureStore({
    reducer: {
        users: usersReducer,
        events: eventsReducer
    }
});