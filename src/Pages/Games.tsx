import React, { useState,useEffect } from "react";
import SweetPagination from "sweetpagination";
import axiosInstance from '../axiosInstance';
import Game from '../Components/Game'
import '../CSS/ticTacToe.css';

let items : any = [];

axiosInstance.get('/games/?limit=30').then((response) => {
  items = response.data.results
}).catch(err => console.log(err))

export default function Games() {
  const [currentPageData, setCurrentPageData] = useState(new Array(2));

  return (
    <>
    <div className="flex flex-row flex-wrap">
      {currentPageData.map((item) => (
        <div>
          <Game key={item.id} first_player={item.first_player} second_player={item.second_player} gameId={item.id}/>
        </div>
      ))}
    </div>

    <div>
      <SweetPagination
        currentPageData={setCurrentPageData}
        dataPerPage={10}
        getData={items}
        navigation={true}
      />
    </div>
    </>
  );
}