
function RollDice({roll1,roll2}){

    return(

    <div className='dices'>   
     
        <img src={`img/dice-${roll1}.png`} alt="" width="100px"></img>
        <img src={`img/dice-${roll2}.png`} alt="" width="100px"></img> 
    </div>
    )

    }



export default RollDice;