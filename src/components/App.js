import React, { useState } from 'react';
import './App.css';
import RollDice from './RollDice';
import Counter from './Counter'
import ShowPlayerScore from './ShowPlayer1Score';
import {gameOver} from './HandleWin'
import HandleWin from './HandleWin';
export const winValue=100;






function App() {

  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
  const [activePlayer, setActivePlayer] = useState("player1")
  const [score, setScore] = useState(0)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)


  function HandleRoll() {
    if( !gameOver){
      let tempRoll1 = Math.floor(Math.random() * 6) + 1;
      setRoll1(tempRoll1)
      let tempRoll2 = Math.floor(Math.random() * 6) + 1;
      setRoll2(tempRoll2)
      setScore(score + tempRoll1 + tempRoll2)
    }

  }


  function HandleHold() {
    if(!gameOver){
      if(score!==0){
        if (activePlayer === "player1") {
          setActivePlayer("player2")
          setPlayer1Score(prev => prev + score)
        }
        else if (activePlayer === "player2") {
          setActivePlayer("player1")
          setPlayer2Score(prev => prev + score)
        }
        setScore(0)
      } 
    }
 
  }

  function newGameHandler(){
    window.location.reload();
  }
  return (
    <div className="App">
      <div className='container'>
        <div className='playerBox'>
          <img src='img/stich.png' alt=""></img> <br />
          player 1
          <ShowPlayerScore score={player1Score} />
        </div>
        <div className='gameBox'>
          <button onClick={newGameHandler}>New Game</button>
          <RollDice roll1={roll1} roll2={roll2} />
          <Counter score={score} />

          <button onClick={HandleRoll} >Roll dice</button>
          <button onClick={HandleHold}>Hold</button>
          <HandleWin player1Score={player1Score} player2Score={player2Score} score={score} activePlayer={activePlayer} />
        </div>
        <div className='playerBox'>
          <img src='img/luigi.png' alt=""></img> <br />
          player 2
          <ShowPlayerScore score={player2Score} />
        </div>

      </div>
    </div>
  );
}

export default App;
