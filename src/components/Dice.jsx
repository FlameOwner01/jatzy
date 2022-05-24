import styled from 'styled-components';
import { DicesContext } from "./Diceprovider";
import { useContext, useState } from 'react';


const DiceStyle = styled.div`
border:2px solid black;
display:inline-flex;
justify-content:center;
align-items:center;
border-radius:5px;
width:40px;
height:40px;
margin:5px;
cursor:pointer;
`

 const Dice = ({ rolls, hold, id, bg}) => {
    const { GetData, setGetData } = useContext(DicesContext);
    let [style, setStyle] = useState(bg);

    const setHold = (it) =>   {
        let data = GetData;
        
        
        data[it] = {
            Roll: data[it].Roll,
            hold: !data[it].hold,
            id: it,
            bg: data[it].bg === "orange" ? "green" : "orange"
        }
        setStyle(data[it].bg);
        
        setGetData(data);
    }
    
    return (
        <DiceStyle hold={hold} className={style}  onClick={() =>{
            setHold(id);
        }}>{rolls} </DiceStyle>
    )
    
}


export default Dice;