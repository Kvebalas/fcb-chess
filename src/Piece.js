import React from 'react';
import ChessImages from '../utils/chess-images';

function handleDrag() {
  console.log('drag start');
}

const handleDrop = (e) => {
  e.preventDefault();
}

const handleSomething = function() {
}

function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragEnd(event) {
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
}

const Piece = ({piece}) => {
  return (
    // <img 
    //   src={ChessImages[piece]}
    //   alt="piece"
    //   onDragStart={handleDrag}
    //   onDragEnd={(e) => handleDrop(e)}
    //   onDrag={handleSomething}
    // />
    <>
      <div className="droptarget" onDragEnd={e => drop(e)} onDragOver={(e) => allowDrop(e)}>
        <p onDragStart={(e) => dragStart(e)} onDragEnd={(e) => drop(e)} draggable="true" id="dragtarget">Drag!</p>
      </div>
      <div className="droptarget" onDragEnd={(e) => drop(e)} onDragOver={(e) => allowDrop(e)}></div>
    </>
  );
}



export default Piece;