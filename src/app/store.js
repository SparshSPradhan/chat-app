import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '../features/chatSlice.js'; // Ensure path is correct

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
});
