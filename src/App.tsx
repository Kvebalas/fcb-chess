import React from 'react';
import Board from '../src/components/Board';
import Blackcook from './assets/images/chess-images/abc1.jpg';


function App() {
  const [ open, setOpen ] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const paspaudziau = () => {
   if (inputValue==="sveiki") {
    setOpen(true);
   } else {
    console.log('va bybi');
   }
  }
  const validator = (e:any) => {
    setInputValue(e.target.value);
  }

  return (
    <div className="main"> 
      <h2 className="site-header white-text"  >Barca Chess!</h2>
        { !open&& <div className="chess-login white-text">
          <label  htmlFor="">Slaptazodis:</label>
          <br/>
          <input onChange={(e)=>validator(e)} type="text"/>
          < br/>
          <button className="button" onClick={paspaudziau} >Play!</button>
        </div>}
    
      {
        open
          ? <Board />
          : <div className="white-text chess-login">Neteisingas slaptazodis</div>
      }
      
    </div>
  );
}

export default App;
