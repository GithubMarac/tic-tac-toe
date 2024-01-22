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


  useEffect(() => {
    const interval = setInterval(async () => {
      await axiosInstance.get(`games/${props.gameId}/`).then((response) => {
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
  
    return (
      <button id={index.toString()} className="square" onClick={() => handleClick(index)}>
          {boardState.board[row][cell] == null ? '' : boardState.board[row][cell]}
      </button>
    );
  }



  return (
    <div className='m-auto text-center mt-9'>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

