import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router';

function App() {
  console.log('App component rendered');
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
