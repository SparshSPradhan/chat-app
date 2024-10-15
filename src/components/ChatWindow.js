import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage, receiveMessage } from '../features/chatSlice';
import { Box, TextField, Button, Typography, Paper } from '@mui/material';

const ChatWindow = () => {
  const [input, setInput] = useState('');
  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const chatBoxRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim() === '') return; // Prevent sending empty messages

    // Dispatch sendMessage action
    dispatch(sendMessage({ text: input, timestamp: new Date().toLocaleTimeString() }));

    // Clear the input field
    setInput('');

    // Simulate server reply with delay
    setTimeout(() => {
      const serverResponse = generateResponse(input);
      dispatch(receiveMessage({ text: serverResponse, timestamp: new Date().toLocaleTimeString() }));
    }, 1000); // 1-second delay for server response
  };

  // Function to generate a sensible response based on user input
  const generateResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return "Hello! How can I assist you today?";
    } else if (lowerCaseMessage.includes('help')) {
      return "I'm here to help! What do you need assistance with?";
    } else if (lowerCaseMessage.includes('thank you')) {
      return "You're welcome! If you have more questions, feel free to ask.";
    } else if (lowerCaseMessage.includes('bye')) {
      return "Goodbye! Have a great day!";
    } else {
      return "That's interesting! Can you tell me more?";
    }
  };

  // Auto-scroll to the bottom when a new message is added
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <Box sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>Chat Window</Typography>
      <Paper ref={chatBoxRef} elevation={3} sx={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
        {messages.map((message, index) => (
          <Typography key={index} align={message.sender === 'user' ? 'right' : 'left'}>
            <strong>{message.sender === 'user' ? 'You' : 'Server'}</strong>: {message.text} <br />
            <small>{message.timestamp}</small>
          </Typography>
        ))}
      </Paper>
      <Box sx={{ marginTop: '10px', display: 'flex' }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleSendMessage();
          }}
        />
        <Button variant="contained" color="primary" onClick={handleSendMessage} sx={{ marginLeft: '10px' }}>
          Send
        </Button>
      </Box>
    </Box>
  );
};

export default ChatWindow;
