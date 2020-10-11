import React from 'react';
import Board from '../src/components/Board';
import Blackcook from './assets/images/chess-images/abc.png';


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
      <h2 className="centered-text">Mindes Chess!</h2>
      <label htmlFor="">Password:</label>
      <input onChange={(e)=>validator(e)} type="text"/>
      <br/>
      <button disabled={isDisabled} onClick={()=> setOpen(true)} >Play!</button>
      <br/>
    
      <img src={Blackcook} alt="abc" />
      {
        open
          ? <Board />
          : <div>Neteisingas slaptazodis</div>
      }
      
    </div>
  );
}

export default App;
