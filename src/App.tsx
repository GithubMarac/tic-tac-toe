import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { loginSuccess } from "./Redux/authSlice";

import Layout from "./Components/Layout"

import Home from "./Pages/Home"
import Register from "./Pages/Register"
import Games from "./Pages/Games"

import axiosInstance from './axiosInstance';

import './App.css';

function App() {
  const dispatch = useDispatch();

  //this should be in storage service
  if(localStorage.getItem('token')){
    dispatch(loginSuccess());
  }

  return (
    <>
        <Routes>
            <Route path="*" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="games" element={<Games />} />
              <Route path="register" element={<Register />} />
            </Route>
        </Routes>
    </>
  );
}

export default App;
