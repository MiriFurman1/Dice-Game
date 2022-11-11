
function RollDice(props){

    


    return(
        <div className='dices'>      
        <img src={`img${props.diceRoll1}`} alt="" width="100px"></img>
        <img src={`img${props.diceRoll2}`} alt="" width="100px"></img> 
        </div>
    )

    }



export default RollDice;