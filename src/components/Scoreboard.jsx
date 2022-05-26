import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DicesContext } from "./Diceprovider";
import {scoreOne, scoreTwo, scoreThree, scoreFour, scoreFive, scoreSix, trilling, poker,house, smstr, bigstr, yatzy, chance, getSum} from "./ScFunctions"

const Table = styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #dddddd;
}
`

const Scoreboard = ({onPress}) => {
  
  const { GetData, setGetData } = useContext(DicesContext);

  const  [values, setValues] = useState({
      one: null,
      two: null,
      three: null,
      four: null,
      five: null,
      six: null,
      trilling: null,
      poker: null,
      smstr: null,
      bigstr: null,
      house: null,
      yatzy: null,
      chance: null,
      sum: null
    
  }) 
 
  const setOne = () => {
    
    if(values.one === null){
      onPress();
      setValues(prev =>({
        ...prev,
        one: scoreOne(GetData)
      })
      )
    }
  }
  const setTwo = () => {

    if(values.two === null){
      onPress();
      setValues(prev =>({
        ...prev,
        two: scoreTwo(GetData)
      })
      )
    }
  }
  const setThree = () => {
    if(values.three === null){
      onPress();
      setValues(prev =>({
        ...prev,
        three: scoreThree(GetData)
      })
      )
    }
  }
  const setFour = () => {
    if(values.four === null){
      onPress();
      setValues(prev =>({
        ...prev,
        four: scoreFour(GetData)
      })
      )
    }
  }
  const setFive = () => {
    if(values.five === null){
      onPress();
      setValues(prev =>({
        ...prev,
        five: scoreFive(GetData)
      })
      )
    }
  }
  const setSix = () => {
    if(values.six === null){
      onPress();
      setValues(prev =>({
        ...prev,
        six: scoreSix(GetData)
      })
      )
    }
  }

const setTrilling = () =>{
  if(values.trilling === null){
    onPress();
    setValues(prev =>({
      ...prev,
      trilling: trilling(GetData)
    })
    )
  }
}
  const setPoker =()=>{
    if(values.poker === null){
      onPress();
      setValues(prev =>({
        ...prev,
        poker: poker(GetData)
      })
      )
    }
  }
  const setHouse =()=>{
    if(values.house === null){
      onPress();
      setValues(prev =>({
        ...prev,
        house: house(GetData)
      })
      )
    }
  }
  const setSmstr =()=>{
    if(values.smstr === null){
      onPress();
      setValues(prev =>({
        ...prev,
        smstr: smstr(GetData)
      })
      )
    }
  }
  const setBigstr =()=>{
    if(values.bigstr === null){
      onPress();
      setValues(prev =>({
        ...prev,
        bigstr: bigstr(GetData)
      })
      )
    }
  }
  const setYatzy =()=>{
    if(values.yatzy === null){
      onPress();
      setValues(prev =>({
        ...prev,
        yatzy: yatzy(GetData)
      })
      )
    }
  }
  const setChance =()=>{
    if(values.chance === null){
      onPress();
      setValues(prev =>({
        ...prev,
        chance: chance(GetData)
      })
      )
    }
  }
  useEffect(()=>{

  }, [values])

  useEffect(()=>{
   
      setValues(prev =>({
        ...prev,
        sum: values.one + values.two + values.three + values.four + values.five + values.six + values.trilling + values.poker + values.house + values.smstr + values.bigstr + values.yatzy + values.chance
      }))
    }, [values]);
    
 
  
  
  return (
    <>
      <h2>Scoreboard</h2>
      <Table>
        <thead>
          <tr>
            <th key ="Rules">Rules</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td key ="One" className='one'  onClick={()=>{
              setOne();}}>One:{values.one}</td>
          </tr>
          <tr>
            <td key ="Two" onClick={()=>{
              setTwo(); }}>Two: {values.two}</td>
          </tr>
          <tr>
            <td key ="Three" onClick={()=>{
              setThree() ;}}>Three: {values.three}</td>
          </tr>
          <tr>
            <td key ="Four" onClick={()=>{
              setFour() ;}}>Four: {values.four}</td>
          </tr>
          <tr>
            <td key ="Five" onClick={()=>{
              setFive() ;}}>Five: {values.five}</td>
          </tr>
          <tr>
            <td key ="Six" onClick={()=>{
              setSix() ;}}>Six: {values.six}</td>
          </tr>
          <tr>
            <td key ="triling" onClick={()=> {
              setTrilling() ;
            }}>3 of a kind: {values.trilling}</td>
          </tr>
          <tr>
            <td key ="poker" onClick={()=>{
              setPoker() ;}}>4 of a kind: {values.poker}</td>
          </tr>
          <tr>
            <td key ="smstr" onClick={()=>{
              setSmstr()  ;}}>Small Straight 1-2-3-4: {values.smstr}</td>
          </tr>
          <tr>
            <td key ="bigstr" onClick={()=>{
              setBigstr()  ;}}>Large Straight 1-2-3-4-5: {values.bigstr}</td>
          </tr>
          <tr>
            <td key ="House" onClick={()=>{
              setHouse();}}>Full House: {values.house}</td>
          </tr>
          <tr>
            <td key ="yatzy" onClick={()=>{
              setYatzy() ;}}>Yatzy 50 p: {values.yatzy}</td>
          </tr>
          <tr>
              <td key="Chance" onClick={()=>{
              setChance()}} >Chance: {values.chance}</td>
              <td></td>
          </tr>
          <tr>
            <td >Total Score: {values.sum}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Scoreboard;