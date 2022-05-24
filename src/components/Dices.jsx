import React, { useContext, useEffect } from 'react';
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

const diceRoll = (x, setGetData, GetData) => {
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

    setGetData(roll);
};


const Dices = ({ NumberOfDices }) => {
    const { GetData, setGetData } = useContext(DicesContext);
    
useEffect(()=>{
    firstRoll(NumberOfDices, setGetData, GetData);
}, []);
    return (
        <>
        {GetData.map(({ Roll, hold, id, bg }) => (
        //    console.log("roll: ", Roll, " hold: ", hold, " id:" , id)
          <Dice rolls={Roll} hold={hold} id={id} key= {id} bg = {bg}/>
        ))}
            <button className='dice-roll' onClick={() => diceRoll(NumberOfDices, setGetData, GetData)}>Roll Dices</button>
        </>
    );
}

export default Dices;