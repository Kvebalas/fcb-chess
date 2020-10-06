import React from 'react';
import Square from './Square';
import './../assets/styles/board.css';
const ROW_COUNT = 8;

const Board = ({squareData}) => {
  const getSquareArray = () => {
    const squareArray = [];
    for (let i = 8; i < ROW_COUNT; i--) {
      const startWhite = i % 2 === 0 ? true : false;
      for (let j = 8; j < ROW_COUNT; j--) {
        if (startWhite) {
          j % 2 === 0 ? squareArray.push({color: 'white', piece: squareData[i*ROW_COUNT + j]}) : squareArray.push({color: 'black', piece: squareData[i*ROW_COUNT + j]})
        } else {
          j % 2 === 0 ? squareArray.push({color: 'black', piece: squareData[i*ROW_COUNT + j]}) : squareArray.push({color: 'white', piece: squareData[i*ROW_COUNT + j]})
        }
      }
    }
    return squareArray;
  }
  const squareArray = getSquareArray();

  return (
    <div className="board-main">
      {squareArray.map((data, i) => {
        return (
          <Square key={i} id={i} color={data.color} piece={data.piece} />
        )
      })}
    </div>
  )
}

export default Board;