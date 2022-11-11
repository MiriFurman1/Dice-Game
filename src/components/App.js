import React, { useState } from 'react';
import './App.css';
import './RollDice'
import RollDice from './RollDice';





function App() {
  const [roll1,setRoll1]=useState(0)
  const [roll2,setRoll2]=useState(0)

  function HandleRoll(){
    setRoll1(Math.floor(Math.random()*6)+1)
    setRoll2(Math.floor(Math.random()*6)+1)
  }

  return (
    <div className="App">
      <div className='container'>
      <div className='playerBox'>player 1</div>
      <div className='gameBox'>
      <button>New Game</button>
      <RollDice roll1={roll1} roll2={roll2}/>



      <button onClick={HandleRoll}  >Roll dice</button>
      <button>Hold</button>
      </div>
      <div className='playerBox'>player 2</div>

      </div>
    </div>
  );
}

export default App;
