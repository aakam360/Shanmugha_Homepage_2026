// homepageEventsSlice.js (or homepageEventsSlice.ts)
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an asynchronous thunk for fetching event data from the API
export const fetchEvents = createAsyncThunk(
    'homepage/fetchEvents',
    async () => {
        try {
            // const response = await ActiondataRequest.GetsecondaryEvents();
            // return response.events;
            return [];
        } catch (error) {
            throw new Error('Failed to fetch events');
        }
    }
);

export const fetchnews = createAsyncThunk(
    'homepage/fetchNews',
    async () => {
        try {
            // const response = await ActiondataRequest.getallnews();
            // return response.forms;
            return [];
        } catch (error) {
            throw new Error('Failed to fetch events');
        }
    }
);

export const fetchPrimaryEvents = createAsyncThunk(
    'homepage/fetchPrimaryEvents',
    async () => {
        try {
            // const response = await ActiondataRequest.GetmajorEvents();
            // return response.events;
            return [];
        } catch (error) {
            throw new Error('Failed to fetch events');
        }
    }
);
const initialState = {
    primary_events: [],
    secondary_events: [],
    loading: false,
    error: null,
    news: [],
};

export const homepageEventsSlice = createSlice({
    name: 'homepageEvents',
    initialState,
    reducers: {
        setSecondaryEvents: (state, action) => {
            state.secondary_events = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchEvents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.secondary_events = action.payload;
            })
            .addCase(fetchPrimaryEvents.fulfilled, (state, action) => {
                state.loading = false;
                state.primary_events = action.payload;
            })
            .addCase(fetchnews.fulfilled, (state, action) => {
                state.loading = false;
                state.news = action.payload;
            })
            .addCase(fetchEvents.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export const { setSecondaryEvents } = homepageEventsSlice.actions;
export const selectPrimaryEvents = (state) => state.homepageEvents.primary_events;
export const selectSecondaryEvents = (state) => state.homepageEvents.secondary_events;

export const selectnews = (state) => state.homepageEvents.news;

export default homepageEventsSlice.reducer;
