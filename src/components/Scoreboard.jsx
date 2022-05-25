import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { DicesContext } from "./Diceprovider";
import {scoreOne} from "./ScFunctions"

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

const Scoreboard = () => {
  
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
  setValues({
    one: scoreOne(GetData),
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
    return null;
  }

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
              setOne()}}>One:{values.one}</td>
          </tr>
          <tr>
            <td key ="Two">Two: {values.two}</td>
          </tr>
          <tr>
            <td key ="Three">Three: {values.three}</td>
          </tr>
          <tr>
            <td key ="Four">Four: {values.four}</td>
          </tr>
          <tr>
            <td key ="Five">Five: {values.five}</td>
          </tr>
          <tr>
            <td key ="Six">Six: {values.six}</td>
          </tr>
          <tr>
            <td key ="triling">3 of a kind: {values.trilling}</td>
          </tr>
          <tr>
            <td key ="poker">4 of a kind: {values.poker}</td>
          </tr>
          <tr>
            <td key ="smstr">Small Straight 1-2-3-4-5: {values.smstr}</td>
          </tr>
          <tr>
            <td key ="bigstr">Large Straight 2-3-4-5-6: {values.bigstr}</td>
          </tr>
          <tr>
            <td key ="House">Full House: {values.house}</td>
          </tr>
          <tr>
            <td key ="yatzy">Yatzy 50 p: {values.yatzy}</td>
          </tr>
          <tr>
              <td key="Chance">Chance: {values.chance}</td>
              <td></td>
          </tr>
          <tr>
            <td>Total Score: {values.sum}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default Scoreboard;