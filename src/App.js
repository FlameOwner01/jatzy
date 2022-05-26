import Dices from "./components/Dices";
import { Diceprovider } from "./components/Diceprovider";
import Scoareboard from "./components/Scoreboard";
import "./styles/style.css";
import logo from "./img/download.jfif"
import {useState} from 'react';


function App() {
  const NumberOfDices = 5;
  const [round, setRound] = useState(0);
  const [turn, setTurn] = useState(0);
  const [newRound, setNewRound] = useState(false);
  const onPress = () =>{
    setRound(round+1);
    setTurn(0);
    setNewRound(true);
  } 
  return (
    <div className="App">
      <Diceprovider NumberOfDices={NumberOfDices}>
        <h1>Yatzy</h1>
        <img src ={logo} alt="logo" className="logo"/>
        <Dices NumberOfDices={NumberOfDices} round = {round} turn={turn} setTurn={setTurn} newRound={newRound} setNewRound={setNewRound}/>
        <Scoareboard onPress={onPress}/>

      </Diceprovider>
    </div>
  );
}

export default App;