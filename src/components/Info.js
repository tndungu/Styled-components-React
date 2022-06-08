import React from 'react'
import styled from 'styled-components'

const DivInfo = styled.div`
    display: flex;
    justify-content: center;
`;

const P = styled.p`
    width: 33.3%;
`;

export const Info = () => {
  return (
    <DivInfo>
        <P>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </P>
    </DivInfo>
  )
}
