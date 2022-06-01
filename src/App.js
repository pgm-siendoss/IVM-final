import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './scripts/main';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  )
}

export default App
