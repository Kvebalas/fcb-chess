import React, { useState } from 'react';
import Square from './Square';
// import ChessInit from './../utils/chess-init.json';
import InitialPieces from './../utils/initialPosition.json';
import './../assets/styles/board.css';
const ROW_COUNT = 8;

const Board = () => {
  const [activeDrag, setActiveDrag]: any = useState(false);
  const [currentPieces, setCurrentPieces]: any = useState(InitialPieces)
  const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const setNewPieces: any = (piece: string = 'BP', from: string = 'B1', to: string = 'C5') => {
    const pieceCopy = currentPieces;
    pieceCopy[from] = null;
    pieceCopy[to] = piece;
    if (from === to) {
      setCurrentPieces({})
    }
    setCurrentPieces({...pieceCopy});
  }

  const getColorArr: any = () => {
    let colorArray: any = [];
    let toggler = false;
    
    for (let i = 1; i <= ROW_COUNT; i++) {      
      for (let j = 0; j < letterArray.length; j++) {
        if (toggler) {
          colorArray.push(j % 2 === 1 ? "white" : "black")
        } else {
          colorArray.push(j % 2 === 1 ? "black" : "white")
        } 

      }
      toggler = !toggler;
    }

    return colorArray;
  }

  const colorArray: any = getColorArr();

  const getPieceArray: any = () => {
    const pieces: any = [];
    const coords: any = [];
      for (let i: any = ROW_COUNT; i >= 1; i--) {
        for (let j:any = 0; j < letterArray.length; j++) {      
        const coord: any = `${letterArray[j]}${i}`;
        const piece: any = currentPieces[coord];
        pieces.push(piece);
        coords.push(coord);
      }
    }

    return {pieces, coords};
  }
  console.log(currentPieces, 'ALIO');
   return (
    <div className="board-main" id="thechess">
      {colorArray.map((data: string, i: number) => {
        return (
          <Square setActiveDrag={setActiveDrag} key={i} id={getPieceArray().coords[i]} color={data} piece={getPieceArray().pieces[i]} setNewPieces={setNewPieces}/>
        )
      })}
    </div>
  )
}

export default Board;