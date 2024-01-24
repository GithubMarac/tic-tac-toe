import '../CSS/ticTacToe.css';
import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

export default function Game(props : any) {
  const [boardState, setBoardState] = useState({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
  });

  const [playersState, setPlayersState] = useState({
    first_player: {
      "id": null,
      "username": null
    },
    second_player: {
      "id": null,
      "username": null
    },
  });

  useEffect(() => {
    const interval = setInterval(async () => {
      await axiosInstance.get(`games/${props.gameId}/`).then((response) => {
        setPlayersState({ first_player: response.data.first_player, second_player: response.data.second_player});
        setBoardState({board : response.data.board});
      }).catch(err => console.log(err));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  async function handleClick(index: number): Promise<void> {
    const row = Math.floor(index / 3);
    const cell = index % 3;

    await axiosInstance.post(`games/${props.gameId}/move/`, {
      "row": row,
      "col": cell
    }).then((response) => {
    }).catch((err) => console.log(err));
  }

  function renderSquare(index: number) {
    const row = Math.floor(index / 3);
    const cell = index % 3;

    let cell_output;

    if(boardState.board[row][cell] == playersState.first_player?.id){
      cell_output = playersState.first_player?.username
    }else if(boardState.board[row][cell] == playersState.second_player?.id){
      cell_output = playersState.second_player?.username
    }else{
      cell_output = '';
    }

  
    return (
      <button id={index.toString()} className="square" onClick={() => handleClick(index)}>
          {boardState.board[row][cell] ? cell_output : ''}
      </button>
    );
  }

  return (
    <div className='m-auto text-center mt-9 p-5'>
      <div className="board-row flex flex-nowrap">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row flex flex-nowrap">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row flex flex-nowrap">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

