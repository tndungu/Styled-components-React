import React from 'react'
import styled,{ keyframes } from 'styled-components'

const rotate = keyframes`
from {transform: rotate(0deg)}
to {transform: rotate(360deg)}
`;
const Image = styled.img`
    animation: ${rotate} 5s linear infinite;
    height:300px;
    width:300px;
`;
export const Logo = () => {
  return (
    <div>
        <Image src='./sAvannah.png'/>
    </div>
  )
}
