import React from 'react';
import Board from '../src/components/Board';
import BlackRook from './assets/images/chess-images/br.png';

import './App.css';

function App() {
  return (
    <div>
      <h2>Mindes Chess!</h2>
      <img src={BlackRook} alt="black_rook" />
      <Board />
    </div>
  );
}

export default App;
