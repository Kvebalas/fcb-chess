import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

interface Props {
  setActiveDrag: any,
  setNewPieces: any,
  piece: string,
  squareId: any
}

const Piece = ({setActiveDrag, setNewPieces, piece, squareId} : Props) => {
  const [controlledPosition, setControlledPosition] = useState({x: 0, y:0})
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

  const onStart = () => {
    setActiveDrag(true);
  };

  const onControlledDrag = (e: any, position: any) => {
    // const pieceName: string = pieceRef.current.id;
    const {x, y} = position;
    console.log(x,y);
    setControlledPosition({x, y});
  };

  const onControlledDragStop = (e: any, position: any) => {
    console.log('position', position);
    const pieceName: string = pieceRef.current.id;
    onControlledDrag(e, position);
    const fromWhichSquare: any = position.node.offsetParent.id;
    const {clientX, clientY} = e;
    const {x,y} = position;
    console.log(x,y)
    const boardOffsetTop: any = document.getElementById("thechess")?.offsetTop;
    const toWhichSquare: any = getDiff(clientX, clientY-boardOffsetTop, fromWhichSquare);
    console.log({pieceName, fromWhichSquare, toWhichSquare})
    setNewPieces(pieceName, fromWhichSquare, toWhichSquare);
  };

  const onStop = (pieceName: string, fromWhichSquare: string, toWhichSquare: string) => {
  };

  const dragHandlers = {onStart, onStop};

  return (
    <Draggable position={controlledPosition} {...dragHandlers} onStop={(e, position) => onControlledDragStop(e, position)}>
      <div id={piece} ref={pieceRef} className={`${piece ? `piece piece-${piece}` : ''}`} />
    </Draggable>
  );
}



export default Piece;