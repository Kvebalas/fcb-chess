import React from 'react';
import Board from '../src/components/Board';
import Blackcook from './assets/images/chess-images/abc1.jpg';


function App() {
  const [ open, setOpen ] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true)
  const validator = (e:any) => {
    const inputValue=e.target.value;
    if(inputValue==="sveiki")
    {
      setIsDisabled(false);
    }
    
    
  }
  return (
    <div className="main"> 
      <h2 className="body" >Barca Chess!</h2>
      <br/>
      <label className="body" htmlFor="">Slaptazodis:</label>
      <br/>
      <input onChange={(e)=>validator(e)} type="text"/>
      <br/>
      <button disabled={isDisabled} onClick={()=> setOpen(true)} >Play!</button>
      <br/>
    
      {
        open
          ? <Board />
          : <div className="body" >Neteisingas slaptazodis</div>
      }
      
    </div>
  );
}

export default App;
