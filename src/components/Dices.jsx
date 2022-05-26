import React, { useContext, useEffect, useState } from 'react';
import { DicesContext } from "./Diceprovider";
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

const diceRoll = (x, setGetData, GetData, setActive, active, setTurn, turn) => {
    if(turn === 2){
        return;
    }
    let roll = [GetData];
    let one = GetData;
    for(let i = 0; i<x ; i++){
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
    setTurn(turn+1);
    
    
    
};


const Dices = ({ NumberOfDices, round, turn, setTurn, newRound, setNewRound }) => {
    const { GetData, setGetData } = useContext(DicesContext);
    const [active, setActive] = useState(false); 

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
        <>

        {GetData.map(({ Roll, hold, id, bg }) => (
          <Dice rolls={Roll} hold={hold} id={id} key= {id} bg = {bg} active = {active} newRound={newRound}/>
        ))}
       
            <button className='dice-roll' onClick={() => diceRoll(NumberOfDices, setGetData, GetData, setActive, active, setTurn, turn)}>Roll Dices
            Turn : {turn+1}</button>
            <button className='round'>
            Round: {round+1}
            </button>
        </>
    );
}

export default Dices;