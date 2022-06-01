import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BaseLayout from './layouts/BaseLayout';
import { NotFound } from './pages/NotFound';
import Home from './pages/Home';
import Selection from './pages/Selection';
import Order from './pages/Order';
import Pay from './pages/Pay';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout/>}>
        <Route index element={<Home/>} />
        <Route index element={<Selection/>} />
        <Route index element={<Order/>} />
        <Route index element={<Pay/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
