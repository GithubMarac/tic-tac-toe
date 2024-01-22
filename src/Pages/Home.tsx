import React, { useState } from 'react';
import Login from "../Components/Login"
import { useSelector } from 'react-redux';
import { loginSuccess } from "../Redux/authSlice";
import axiosInstance from '../axiosInstance';
import Game from '../Components/Game'

export default function Home() {
  const isUsertAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);
  const [currentGame, setCurrentGame] = useState('');

  const newGame = async () => {
    await axiosInstance.post('/games/').then((response) => {
      console.log(response);
      setCurrentGame(response.data.id);
    });
  };

  const joinGame = async () => {
    const gameId = document.getElementById('gameId') as HTMLInputElement | null;
    console.log(gameId!.value);
    await axiosInstance.post(`games/${gameId?.value}/join/`).then((response) => {
      setCurrentGame(gameId?.value!);
    });
  };

  if(isUsertAuthenticated){
    if(currentGame != ''){
      return (<Game />)
    }
    return (
        <main>
          <div className="content-center">
            <h2>Tic Tac Toe</h2>
            <div className="flex flex-col w-[50%]">
              <input type="text" id="gameId" placeholder="Game ID" />
              <a onClick={joinGame} className={"waves-effect waves-light btn-large" }>Join Game</a>
              <a onClick={newGame} className="waves-effect waves-light btn-large">New Game</a>
            </div> 
          </div>
        </main>
      );
  }else{
    return (<Login/>);
  }


};

