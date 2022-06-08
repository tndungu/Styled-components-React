import React from 'react'
import styled from 'styled-components';

const Input = styled.input`
    margin:10px;
    border-radius: 5px;
    height: 20px;
`;

const Button = styled.button`
    display: inline-block;
    width: 100px;
    padding: 5px;
    border: 2px solid teal;
    background-color: #eed4d4;
    cursor: pointer;
    font-weight: 500;
    border-radius: 5px;
`;

export const Login = () => {
  return (
    <div>
        <Input placeholder="Username"></Input>
        <Button>Login</Button>
    </div>
  )
}
