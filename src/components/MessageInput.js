import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { sendMessage } from 'chatSlice';

const MessageInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSend = () => {
    if (text.trim()) {
      dispatch(sendMessage({
        text,
        sender: 'You',
        timestamp: Date.now(),
      }));
      setText('');
    }
  };

  return (
    <div className="message-input">
      <TextField
        label="Type a message"
        variant="outlined"
        fullWidth
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>Send</Button>
    </div>
  );
};

export default MessageInput;
