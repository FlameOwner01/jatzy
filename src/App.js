import Dices from "./components/Dices";
import { Diceprovider } from "./components/Diceprovider";
import Scoareboard from "./components/Scoreboard";
import "./styles/style.css";
import logo from "./img/download.jfif"


function App() {
  const NumberOfDices = 5;
  return (
    <div className="App">
      <Diceprovider NumberOfDices={NumberOfDices}>
        <h1>Yatzy</h1>
        <img src ={logo} alt="logo" className="logo"/>
        <Dices NumberOfDices={NumberOfDices} />
        <Scoareboard />

      </Diceprovider>
    </div>
  );
}

export default App;