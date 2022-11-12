import { useState } from "react"

function Welcome({setWinValue}){
    const [gameStarted,setGameStarted]=useState(false)

    function startHandle(e){
        e.preventDefault()
        setGameStarted(true)
        
    }
    function changeHandler(e){
        setWinValue(e.target.value)
    }

    if(!gameStarted){
        return(
            <div className="welcome-page">
    
            <h1>Welcome To Dice Roll</h1>
            <form>
            <h3>Please choose the winning value </h3>
            <input type="number" onChange={changeHandler}></input> <br/> <br/>
            <button onClick={startHandle}>Start Playing</button>
            </form>
            <img src="img/background.jpg" alt=""width="300px" ></img>
            </div>
    
        ) 
    }

}

export default Welcome