import { configureStore } from '@reduxjs/toolkit';
import chatReducer from '/Users/sparshs.pradhan/chat-app/src/features/chatSlice.js'; // Ensure path is correct

export const store = configureStore({
    reducer: {
        chat: chatReducer,
    },
});
