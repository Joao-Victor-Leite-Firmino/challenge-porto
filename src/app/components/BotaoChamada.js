'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #1306A8;
  color: white;
  border-radius: 5px;
  margin: 5px;
  cursor: pointer;
  width: 97%;
  height: 7em
`;

const ButtonImage = styled.img`
  width: 40%;
  height: 50px;
  margin-bottom: 5px;
`;

export default function BotaoChamada(props){
    return (
        <Button class="botao-azul">
        <div>
             <Image 
             src = {props.src}
             width={25}
             height={25}
             alt = {Button.text}
             priority
             />
        </div>
        <div>
            <h1>Solicitar assistência</h1>
        </div>
        </Button>
    )
}