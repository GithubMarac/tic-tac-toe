import Login from "../Components/Login"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess } from "../Redux/authSlice";

export default function Home() {
  const isUsertAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);


  let game_id_condition : Boolean = true;

  if(isUsertAuthenticated){
    return (
          <main>
          <div className="content-center">
            <h2>Tic Tac Toe</h2>
            <div className="flex flex-col w-[50%]">
              <input type="text" id="join" placeholder="Game ID" name="game_id"/>
              <a className={"waves-effect waves-light btn-large" + (game_id_condition ? '' : 'disabled')}>Join Game</a>
              <a className="waves-effect waves-light btn-large">New Game</a>
              <input type="button" id="join_game"/>
              <input type="button" id="create_game"/>
            </div> 
          </div>
        </main>
      );
  }else{
    return (<Login/>);
  }


};

