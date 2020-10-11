import React from 'react';
import Piece from './Piece';
interface Props {
  setHighlightedSquares: any,
  currentPieces: object,
  setActiveDrag: any,
  setNewPieces: any,
  color: string,
  piece: string | null,
  id: 'string'
}
const Square = ({
  setHighlightedSquares,
  currentPieces,
  setActiveDrag,
  setNewPieces,
  color,
  piece,
  id
} : Props) => {
  return (
    <div id={`${id}`} className={`chess-square color-${color}`}>
        <div className="chess-square-coord">{id}</div>
        {piece 
          ? <Piece
              setHighlightedSquares={setHighlightedSquares}
              currentPieces={currentPieces} 
              setActiveDrag={setActiveDrag} 
              squareId={id} 
              setNewPieces={setNewPieces} 
              piece={piece} 
            />
          : null
        } 
    </div> 
  );
}
export default Square