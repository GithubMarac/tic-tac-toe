import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout"
import Games from "./Components/Games"

import Home from "./Pages/Home"
import Register from "./Pages/Register"

import "./CSS/Navbar.css"




import './App.css';

function App() {
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
