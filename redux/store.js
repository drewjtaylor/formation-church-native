
import { configureStore } from '@reduxjs/toolkit';

import {
    persistStore,
    persistCombineReducers,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { usersReducer } from '../Directory/directorySlice';
import { eventsReducer } from '../Events/eventSlice';

const config = {
    key: 'root',
    storage: AsyncStorage,
    debug: true
}

export const store = configureStore({
    reducer: persistCombineReducers(config, {
        users: usersReducer,
        events: eventsReducer
    }),
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ]
        }
    })
});

export const persistor = persistStore(store);