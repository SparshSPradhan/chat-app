import React from 'react';
import { Typography } from '@mui/material';

const Message = ({ message }) => {
  const { text, sender, timestamp } = message;
  return (
    <div className="message">
      <Typography variant="body1" gutterBottom>{sender}: {text}</Typography>
      <Typography variant="caption">{new Date(timestamp).toLocaleTimeString()}</Typography>
    </div>
  );
};

export default Message;
