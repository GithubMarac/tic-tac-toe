import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';
import '../CSS/ticTacToe.css';


export default function Games() {
  const loadGames = async () => {
    try {
      const response = await axiosInstance.get('/games/?limit=100');
      console.log(response);
    } catch (error: any) {
      console.log(error);
    }
  };

  loadGames();


    return (
      <>

      </>
    );
  };