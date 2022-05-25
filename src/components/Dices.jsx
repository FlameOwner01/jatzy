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

const diceRoll = (x, setGetData, GetData, setActive, active) => {
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
    
};


const Dices = ({ NumberOfDices }) => {
    const { GetData, setGetData } = useContext(DicesContext);
    const [active, setActive] = useState(true); 
useEffect(()=>{
    firstRoll(NumberOfDices, setGetData, GetData);
}, []);

    return (
        <>

        {GetData.map(({ Roll, hold, id, bg }) => (
        //    console.log("roll: ", Roll, " hold: ", hold, " id:" , id)
          <Dice rolls={Roll} hold={hold} id={id} key= {id} bg = {bg} active = {active}/>
        ))}
       
            <button className='dice-roll' onClick={() => diceRoll(NumberOfDices, setGetData, GetData, setActive, active)}>Roll Dices</button>
        </>
    );
}

export default Dices;