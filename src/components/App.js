import React, { useState } from 'react';
import './App.css';
import RollDice from './RollDice';
import Counter from './Counter'
import ShowPlayerScore from './ShowPlayer1Score';
import {gameOver} from './HandleWin'
import HandleWin from './HandleWin';
import Welcome from './Welcome';
import WinsCounter from './WinsCounter';










function App() {

  const [roll1, setRoll1] = useState(0)
  const [roll2, setRoll2] = useState(0)
  const [activePlayer, setActivePlayer] = useState("player1")
  const [score, setScore] = useState(0)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)
  const [player1Wins,setPlayer1Wins]=useState(0)
  const [player2Wins,setPlayer2Wins]=useState(0)
  const [winValue,setWinValue]=useState(100)


  function handleRoll() {
    if( !gameOver){
      let tempRoll1 = Math.floor(Math.random() * 6) + 1;
      setRoll1(tempRoll1)
      let tempRoll2 = Math.floor(Math.random() * 6) + 1;
      setRoll2(tempRoll2)
      setScore(score + tempRoll1 + tempRoll2)

      if(tempRoll1===6&&tempRoll2===6){
        setScore(0)
        if (activePlayer === "player1") {
          setActivePlayer("player2")}
          else if (activePlayer === "player2") {
            setActivePlayer("player1")}
      }
    }

  }


  function handleHold() {
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
window.location.reload()
    // setRoll1(0)
    // setRoll2(0)
    // setActivePlayer("player1")
    // setScore(0)
    // setPlayer1Score(0)
    // setPlayer2Score(0)
    // ChangeGameOverFalse()
  }


  return (
  
    <div className="App">

      <Welcome setWinValue={setWinValue}/>
      <div className='container'>
        <div className='playerBox'>
          <img src='img/stich.png' alt=""></img> <br />
          player 1
          {/* <WinsCounter win={player1Wins}/> */}
          <ShowPlayerScore score={player1Score} />
        </div>
        <div className='gameBox'>
          <button onClick={newGameHandler}>New Game</button>
          <RollDice roll1={roll1} roll2={roll2} />
          <Counter score={score} />

          <button onClick={handleRoll} >Roll dice</button>
          <button onClick={handleHold}>Hold</button>
          <HandleWin winValue={winValue} player1Score={player1Score} player2Score={player2Score} score={score} activePlayer={activePlayer} setPlayer1Wins={setPlayer1Wins} setPlayer2Wins={setPlayer2Wins} player2Wins={player2Wins}/>
        </div>
        <div className='playerBox'>
          <img src='img/luigi.png' alt=""></img> <br />
          player 2
          {/* <WinsCounter win={player2Wins}/> */}
          <ShowPlayerScore score={player2Score} />
        </div>

      </div>
    </div>
  );
}

export default App;
