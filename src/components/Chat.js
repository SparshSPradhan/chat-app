import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from 'chatSlice'; // Correct import of sendMessage
import { Box, TextField, Button, Typography, List, ListItem } from '@mui/material';

const Chat = () => {
  const [message, setMessage] = useState(''); // Message input state
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages); // Messages from Redux state

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      dispatch(sendMessage(message)); // Dispatch the message to Redux (also triggers server response)
      setMessage(''); // Clear the input field
    }
  };

  return (
    <Box sx={{ width: '400px', height: '500px', border: '1px solid #ccc', padding: '10px' }}>
      <Typography variant="h5">Chat Window</Typography>
      
      {/* Chat box displaying user and server messages */}
      <Box sx={{ height: '400px', overflowY: 'scroll', marginBottom: '10px' }}>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index} sx={{ textAlign: msg.type === 'user' ? 'right' : 'left' }}>
              <Typography variant="body1">
                <strong>{msg.type === 'user' ? 'You: ' : 'Server: '}</strong> {msg.text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Box>

      {/* Input field for typing messages */}
      <TextField
        fullWidth
        label="Type a message"
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
        onKeyPress={(e) => {
          if (e.key === 'Enter') handleSendMessage(); // Send message on pressing Enter
        }}
      />

      {/* Send button */}
      <Button fullWidth variant="contained" sx={{ marginTop: '10px' }} onClick={handleSendMessage}>
        Send
      </Button>
    </Box>
  );
};

export default Chat;
