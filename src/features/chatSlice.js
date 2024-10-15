import { createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
  messages: [],
};

// Create chat slice
const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
      // Add user message to messages array
      state.messages.push({
        text: action.payload.text,
        sender: 'user',
        timestamp: action.payload.timestamp,
      });
    },
    receiveMessage: (state, action) => {
      // Add server message to messages array
      state.messages.push({
        text: action.payload.text,
        sender: 'server',
        timestamp: action.payload.timestamp,
      });
    },
  },
});

// Export actions
export const { sendMessage, receiveMessage } = chatSlice.actions;

// Export reducer
export default chatSlice.reducer;
