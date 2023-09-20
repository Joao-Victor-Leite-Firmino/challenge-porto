'use client'
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #3A42FF;
  border: none;
  color: white;
  border-radius: 15px;
  margin-left: 4.5em;
  margin-bottom: 1.5em;
  cursor: pointer;
  width: 70%;
  height: 5.5em;
  text-decoration: none;

  @media screen and (min-width: 1280px) {
    margin: 0 auto 2em auto;
    width: 30%;
  }
`;


export default function BotaoChamada(props){
    return (
        <Button class="botao-azul">
        <div>
             <Image class="imagem__botao__azul"
             src = "consertar 3.svg"
             width={60}
             height={50}
             alt = {Button.text}
             priority
             />
        </div>
        <div>
            <h2>Solicitar assistência</h2>
        </div>
        </Button>
    )
}