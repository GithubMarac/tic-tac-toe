import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
import { Outlet, Link } from 'react-router-dom';
import axiosInstance from '../axiosInstance';

export default function Layout() {
  const dispatch = useDispatch();
  const isUsertAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    try{
      await axiosInstance.post('/logout/')
      .then(res => {
        localStorage.removeItem('token');
        dispatch(logout());
      })
    }catch(e){
      console.log(e);
    }

  };

  return (
    <>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/games">Games</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li className="float-right">
            <p onClick={handleLogout} className={isUsertAuthenticated ? 'font-bold size-10 mr-11' : 'hidden'}>Logout</p>
          </li>
        </ul>
      </nav>
    </header>
    <Outlet />
    </>
  );
};