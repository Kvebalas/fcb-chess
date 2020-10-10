import React, { useState } from 'react';
import Square from './Square';
// import ChessInit from './../utils/chess-init.json';
import {colorArray, coordArray} from './../utils/coordinates';
import InitialPieces from './../utils/initialPosition.json';
import InitialAvailable from './../utils/initialAvailable.json';
import './../assets/styles/board.css';
const Board = () => {
  const [activeDrag, setActiveDrag]: any = useState(false);
  const [currentPieces, setCurrentPieces]: any = useState(InitialPieces)
  const [availableSquares, setAvailableSquares]: any = useState(InitialAvailable);
  const setNewPieces: any = (piece: string = 'BP', from: string = 'B1', to: string = 'C5') => {
    const pieceCopy = currentPieces;
    pieceCopy[from] = null;
    pieceCopy[to] = piece;
    if (from === to) {
      setCurrentPieces({})
    }
    setCurrentPieces({...pieceCopy});
  }
  const colorArr: any = colorArray();

  console.log(currentPieces)
   return (
    <div className="board-main" id="thechess">
      {colorArr.map((data: string, i: number) => {
        const currentCoord = coordArray()[i];
        debugger;
        return (
          <Square currentPieces={currentPieces} setActiveDrag={setActiveDrag} key={i} id={currentCoord} color={data} piece={currentPieces[currentCoord]} setNewPieces={setNewPieces}/>
        )
      })}
    </div>
  )
}
export default Board;