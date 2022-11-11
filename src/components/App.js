import React, { useState } from 'react';
import './App.css';
import './RollDice'
import RollDice from './RollDice';

function handleClick(){
  
  let diceRoll1=Math.floor(Math.random()*6)+1
  console.log(diceRoll1);
  console.log(`img${diceRoll1}`);
  let diceRoll2=Math.floor(Math.random()*6)+1
  console.log(diceRoll2);
  console.log(`img${diceRoll2}`);


}
const img1="img/dice-1.png"
const img2="img/dice-2.png"
const img3="img/dice-3.png"
const img4="img/dice-4.png"
const img5="img/dice-5.png"
const img6="img/dice-6.png"

function App() {
  return (
    <div className="App">
      <div className='container'>
      <div className='playerBox'>player 1</div>
      <div className='gameBox'>
      <button>New Game</button>

      <div className='dices'>      
        <img src={'img1'} alt="" width="100px"></img>
        <img src={img2} alt="" width="100px"></img> 
        </div>


      <button onClick={handleClick}>Roll dice</button>
      <button>Hold</button>
      </div>
      <div className='playerBox'>player 2</div>
     <RollDice/>
      </div>
    </div>
  );
}

export default App;
