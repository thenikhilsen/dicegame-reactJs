import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'
import { Button, OutlineButton } from './Button'
import Rules from './Rules'



const GamePlay = () => {

  const [score, setScore] = useState(0);

  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error,setError] = useState("");
  const [isOpenRules,setIsOpenRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };

  const resetDice = () => {
    setScore(0);
  }

  const roleDice = () => {
    const randomNumber = generateRandomNumber(1,7);

    setCurrentDice((prev) => randomNumber);

    if(!selectedNumber) {
      setError("You have not selected any number");
      return;
    };
    

    if(selectedNumber === randomNumber){
      setScore(prev=>prev+randomNumber);
    }else{
      setScore(prev=>prev-2);
    }

    setSelectedNumber(undefined);
  }

  const toggleRules = () => {
    setIsOpenRules((prev)=>!prev);
  }



  return (
    <Main>
      <div className='top_section'>
      <TotalScore score={score}/>
      <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        <div className='btns'>
          <Button onClick={resetDice}>Reset</Button>
          <OutlineButton onClick={toggleRules}>Show Rules</OutlineButton>
        </div>

        {isOpenRules ? <Rules/> : <></>}
      
    </Main>
  )
}

export default GamePlay

const Main = styled.div`

max-width: 1200px;
margin: 0 auto;
padding-top: 70px;
.top_section{
    display: flex;
    justify-content: space-between;
    align-items: end;
}
.btns{
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
`