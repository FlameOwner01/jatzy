import React, { useContext, useEffect, useState } from 'react';
import { DicesContext } from "./Diceprovider";
import { RoundContext } from '../App';
import Dice from "./Dice";


const firstRoll= (x, setGetData, GetData) =>{


    let roll = [GetData];
    for(let i = 0; i<x ; i++){
        roll[i] = {
            Roll: Math.floor(Math.random() * 6) + 1,
            hold: false,
            id: i,
            bg: "orange"
        }
    }
    setGetData(roll);
}
const newR = (newRound) =>{

    if(newRound)
    return true;
    return false;
}
const diceRoll = (round, setGetData, GetData, setActive, active, setTurn, newRound) => {
    if(round === 12 && newR(newRound)){
        return;
    }
    let roll = [GetData];
    let one = GetData;

    for(let i = 0; i<5 ; i++){
        if(one[i].hold === true){
            roll[i] = {
                Roll: one[i].Roll,
                hold: true,
                id: i,
                bg: "green"
            }
        }else{
            roll[i] = {
                Roll: Math.floor(Math.random() * 6) + 1,
                hold: false,
                id: i,
                bg: "orange"
            }
        }
        
    }
    setActive(!active);
    setGetData(roll);
    
    
};


const Dices = ({ NumberOfDices, round, turn, setTurn, newGame }) => {
    const { GetData, setGetData } = useContext(DicesContext);
    const { newRound, setNewRound} = useContext(RoundContext);
    const [active, setActive] = useState(false); 
    const [highS, setHighS] = useState(null);
useEffect(() =>{
    setHighS(localStorage.getItem("High score"));
})

useEffect(()=>{
    setTimeout(() => {
        if (active === false) {
          setActive(true);
        }
      }, 60);
    firstRoll(NumberOfDices, setGetData, GetData);
  
}, []);
useEffect(() => {
    setTimeout(() => {
      if (active === true) {
        setActive(false);
      }
    }, 1500);
  }, [active]);
  useEffect(()=> {
    if(newRound){
        firstRoll(NumberOfDices, setGetData, GetData);
        setNewRound(false);
    }
}, [newRound])
    return (
        <div className="dices">
                <button className='highs'>High score <br/> {highS}</button>
        {GetData.map(({ Roll, hold, id, bg }) => (
          <Dice rolls={Roll} hold={hold} id={id} key= {id} bg = {bg} active = {active} newRound={newRound} />
        ))}
       
            <button className='dice-roll' onClick={() =>{
                if(turn === 2){
                    return;
                }
             diceRoll(round, setGetData, GetData, setActive, active, setTurn, newRound);
             setTurn(turn+1);
            }
            }
                
             >Roll Dices
            Turn : {turn+1}</button>
            <button className='round'>
            Round: {round+1}
            </button>
            {
                round === 13 ? <button className='newG' onClick={() =>{newGame()}}>New Game</button> : null
            }
            
        </div>
    );
}

export default Dices;