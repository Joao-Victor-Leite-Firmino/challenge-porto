'use client'
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px;
  background-color: #EE2828;
  border: none;
  color: white;
  border-radius: 15px;
  margin-top: 1em;
  margin-left: 4.5em;
  margin-bottom: 1.5em;
  cursor: pointer;
  width: 60%;
  height: 3em;
  text-decoration: none;
  font-size: 20px;
`;

export default function BotaoNao(){
    return (
        <Button>
            <div>
            <p>Nao</p>
            </div>
        </Button>
    )
}