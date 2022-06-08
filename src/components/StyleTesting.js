import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: Yellow;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  text-decoration:none;
`;

export const StyleTesting = () => {
  return (
      <div>
        <Button as='a' href='#'>Yellow Button</Button>
        </div>
  )
}
