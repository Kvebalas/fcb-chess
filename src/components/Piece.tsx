import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
interface Props {
  currentPieces: any,
  setActiveDrag: any,
  setNewPieces: any,
  piece: string,
  squareId: any
}


const Piece = ({currentPieces, setActiveDrag, setNewPieces, piece, squareId} : Props) => {
  const boardOffsetTop: any = document.getElementById("thechess")?.offsetTop;
  const pieceRef: any = React.createRef();
  const getDiff: any = (x: any, y: any, fromSquare: any) => {
    const letterArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    const xDiff =  Math.floor(x / 75);
    const yDiff = 8 - Math.floor(y / 75);
    return `${letterArray[xDiff]}${yDiff}`;
  }
  useEffect(() => {
    // Update the document title using the browser API
    //console.log(pieceRef);
  });
  const onStart = (e: any, position: any) => {
    setActiveDrag(true);
    const pieceName: string = pieceRef.current.id;
    const fromWhichSquare: string = position.node.offsetParent.id;
    console.log(`You currently moving ${pieceName} piece \nFrom ${fromWhichSquare} square.`);
  };
  const onStop = ({clientX, clientY}: any, position: any) => {
    console.log('end');
    const pieceName: string = pieceRef.current.id;
    const fromWhichSquare: any = position.node.offsetParent.id;
    const toWhichSquare: any = getDiff(clientX, clientY-boardOffsetTop, fromWhichSquare);
    console.log({pieceName, fromWhichSquare, toWhichSquare})
    if (currentPieces[toWhichSquare]?.startsWith(pieceName[0])) {
      console.log("Illegal move")
      setNewPieces(pieceName, fromWhichSquare, fromWhichSquare);
    } else {
      setNewPieces(pieceName, fromWhichSquare, toWhichSquare);
    }
  };
  return (
    <Draggable onStart={onStart} onStop={onStop}>
      <div id={piece} ref={pieceRef} className={`${piece ? `piece piece-${piece}` : ''}`} />
    </Draggable>
  );
}


export default Piece;