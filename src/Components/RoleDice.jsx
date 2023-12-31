import React, { useState } from 'react';
import styled from 'styled-components';

const RoleDice = ({
  currentDice,
  roleDice
}) => {





  return (
    <DiseContainer>
      <div className='dice' onClick={roleDice}>
        <img src={`/images/dice/dice_${currentDice}.png`} alt='Dise 1'/>
      </div>
      <p>Click on Dice to roll</p>
    </DiseContainer>
  )
}

export default RoleDice

const DiseContainer = styled.div`

   margin-top: 48px;
   display: flex;
   flex-direction: column;
   align-items: center;

   .dice{
      cursor: pointer;  
   }

   p{
    font-size: 24px;
   }
   
`
