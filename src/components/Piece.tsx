import React, { useEffect } from 'react';
import Draggable from 'react-draggable';

interface Props {
  highlightedSquares: Array<String>
  setHighlightedSquares: any,
  currentPieces: any,
  setActiveDrag: any,
  setNewPieces: any,
  piece: string,
  squareId: any
}


const Piece = ({highlightedSquares, setHighlightedSquares, currentPieces, setActiveDrag, setNewPieces, piece, squareId} : Props) => {
  const boardOffsetTop: any = document.getElementById("thechess")?.offsetTop;
  const pieceRef: any = React.createRef();
  const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const getDiff: any = (x: any, y: any, fromSquare: any) => {
    const xDiff =  Math.floor(x / 75);
    const yDiff = 8 - Math.floor(y / 75);
    return `${letterArray[xDiff]}${yDiff}`;
  }
 

  const highlighter = (piece: string, square: string) => {
    switch(piece) {
      case "WP": 
        console.log('Moved with White pawn');
        if (square.endsWith('2')) {
          const forward1 = `${square[0]}${parseInt(square[1], 10) + 1}`
          const forward2 = `${square[0]}${parseInt(square[1], 10) + 2}`
          let squaresToHighlight: any = [forward1, forward2]
          setHighlightedSquares(squaresToHighlight);
        } else {
          const squaresToHighlight: Array<String> = [];
          const letterCharCode: number = square[0].charCodeAt(0);
          const forwardCoord: string = `${square[0]}${parseInt(square[1], 10) + 1}`
          const isForwardEmpty: boolean = currentPieces[forwardCoord] === null;
          const diagonalCoordLeft: string = String.fromCharCode(letterCharCode - 1) + (parseInt(square[1], 10) + 1);
          const diagonalCoordRight: string = String.fromCharCode(letterCharCode + 1) + (parseInt(square[1], 10) + 1);

          const isDiagonalAvailable = (coord: string, color: String) => {
            if(currentPieces[coord] === null || currentPieces[coord][0].startsWith(color)){
              return false;
            } else {
              return true;
            }
          }

          if(isForwardEmpty) squaresToHighlight.push(forwardCoord);
          if(isDiagonalAvailable(diagonalCoordLeft, piece[0])) {
            squaresToHighlight.push(diagonalCoordLeft)
          }
          if(isDiagonalAvailable(diagonalCoordRight, piece[0])){
            squaresToHighlight.push(diagonalCoordRight)
          } 

          setHighlightedSquares(squaresToHighlight);
        }
        break;
      case "WR": 
        console.log('Moved with White rook');
        break;
      case "BP": 
        console.log('Moved with Black pawn');
        break;
      default: 
        console.log('Moved with other piece, coming soon')
        break;
    }
  }

  useEffect(() => {
    // Update the document title using the browser API
  });
  const onStart = (e: any, position: any) => {
    setActiveDrag(true);
    const pieceName: string = pieceRef.current.id;
    const fromWhichSquare: string = position.node.offsetParent.id;
    highlighter(piece, fromWhichSquare);
    console.log(`You currently moving ${pieceName} piece \nFrom ${fromWhichSquare} square.`);
  };

  const onStop = ({clientX, clientY}: any, position: any) => {
    debugger;
    const pieceName: string = pieceRef.current.id;
    const fromWhichSquare: any = position.node.offsetParent.id;
    const toWhichSquare: any = getDiff(clientX, clientY-boardOffsetTop, fromWhichSquare);
    const isLegalStep: any = highlightedSquares.find(element => element === toWhichSquare);
    console.log(isLegalStep);
    if (currentPieces[toWhichSquare]?.startsWith(pieceName[0])) {
      console.log("You try capturing your own piece")
      setNewPieces(pieceName, fromWhichSquare, fromWhichSquare);
    } else if(isLegalStep) {
      setNewPieces(pieceName, fromWhichSquare, toWhichSquare);
    } else {
      console.log("You moved illegaly")
      setNewPieces(pieceName, fromWhichSquare, fromWhichSquare);
    }
    setHighlightedSquares([]);
  };
  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <div id={piece} ref={pieceRef} className={`${piece ? `piece piece-${piece}` : ''}`} />
    </Draggable>
  );
}


export default Piece;