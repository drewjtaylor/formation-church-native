import { configureStore } from '@reduxjs/toolkit';
import { eventsReducer } from '../Events/eventSlice';

export const store = configureStore({
    reducer: {
        events: eventsReducer,
    }
});