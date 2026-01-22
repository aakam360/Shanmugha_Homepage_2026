import { combineReducers, configureStore } from '@reduxjs/toolkit';

import eventSlice from './features/event-slice';
import filterSlice from './features/filter-slice';
import authSlice from './features/auth-slice';
import homepageEventsSlice from './features/homepageEventsSlice';

const rootReducer = combineReducers({
    auth: authSlice,
    event: eventSlice,
    filter: filterSlice,
    homepageEvents: homepageEventsSlice,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
});
