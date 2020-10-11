import React from 'react';
import Board from '../src/components/Board';
import Blackcook from './assets/images/chess-images/abc.png';


function App() {
  return (
    <div>
      <h2 className="centered-text">Mindes Chess!</h2>
      <img src={Blackcook} alt="abc" />
      <Board />
    </div>
  );
}

export default App;
