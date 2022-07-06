import Dices from "./components/Dices";
import { Diceprovider } from "./components/Diceprovider";
import Scoareboard from "./components/Scoreboard";
import "./styles/style.css";
import logo from "./img/download.jfif"
import {createContext, useMemo, useState} from 'react';

export const RoundContext = createContext();

function App() {
  const NumberOfDices = 5;
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(0);
  const [newRound, setNewRound] = useState(false);
  const [newG, setNewG] = useState(false);
  
  const value = useMemo(() =>({newRound, setNewRound}), [newRound, setNewRound]);  

  const onPress = () =>{

      setRound(round+1);
      setTurn(0);
      setNewRound(true);  
    
  } 
  const newGame = () =>{
    setTurn(0);
    setNewRound(true);
    setRound(0);
    setNewG(true);
  }
  return (
    <div className="App">
      <Diceprovider NumberOfDices={NumberOfDices}>
      <RoundContext.Provider value={value}>
        <h1>Yatzy</h1>
        <img src ={logo} alt="logo" className="logo"/>
        <Dices NumberOfDices={NumberOfDices} round = {round} turn={turn} setTurn={setTurn} newGame={newGame} newG={newG}/>
        <Scoareboard onPress={onPress} newG={newG} setNewG={setNewG}/>   
        </RoundContext.Provider>
      </Diceprovider>
    </div>
  );
}

export default App;