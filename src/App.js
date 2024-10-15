import React from 'react';
import Chat from './components/Chat';
import { Container } from '@mui/material';
import './App.css';
import ChatWindow from './components/ChatWindow';

const App = () => {
  return (
    <Container maxWidth="md">
      <ChatWindow />
    </Container>
  );
};

export default App;
