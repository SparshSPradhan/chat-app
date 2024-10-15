import { configureStore } from '@reduxjs/toolkit';
import chatReducer from 'chatSlice'; // Ensure path is correct

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
});
