import logo from './logo.svg';
import './App.css';

import React, { createContext } from 'react'
import { Route, Routes } from 'react-router-dom';

import Menu from './pages/Menu';
import BaseLayout from './layouts/BaseLayout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { ROUTES } from './constants/routes';
import Order from './pages/Order';
import Pay from './pages/Pay';
import { useState } from 'react';

export const UserContext = createContext();


const App = () => {
  const [user, setUser] = useState('Sienna');

  return (
        <UserContext.Provider value={[user, setUser]}>
          <Routes>
              <Route path={ROUTES.HOME} element={<BaseLayout/>}>
                  <Route index element={<Home/>}  />
                  <Route path={ROUTES.MENU} element={<Menu/>}  />
                  <Route path={ROUTES.ORDER} element={<Order/>}  />
                  <Route path={ROUTES.PAY} element={<Pay/>}  />
                  <Route path="*" element={<NotFound/>} />
              </Route>
          </Routes>
        </UserContext.Provider>
  )
}

export default App;
