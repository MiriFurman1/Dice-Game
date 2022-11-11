
import {winValue} from "./App"
export let gameOver=false;

function HandleWin({ player1Score, player2Score, score, activePlayer }) {
  
  if (player1Score > winValue || (score > winValue  && activePlayer === "player1")) {
    gameOver=true;
    return (
      <h4> player 2 wins</h4>
    )
  }

  else if (player2Score > winValue  || (score > winValue  && activePlayer === "player2")) {
    gameOver=true;
    return (
      <h4> player 1 wins</h4>
    )
  }
  else if (player1Score === winValue ) {
    gameOver=true;
    return (
      <h4> player 1 wins</h4>
    )
  }
  else if (player2Score === winValue ) {
    gameOver=true;
    return (
      <h4> player 2 wins</h4>
    )
  }


}

export default HandleWin;
