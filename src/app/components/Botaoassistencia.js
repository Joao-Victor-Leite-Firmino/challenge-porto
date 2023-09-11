'use client'
import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: white;
  color: black;
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

function ButtonList() {
  const buttons = [
    {
      text: 'Estava andando e parou',
      imageSrc: 'caminhao.svg',
    },
    {
      text: 'Problemas ao ligar',
      imageSrc: 'carro-com-problemas-de-calor-1.svg',
    },
    {
      text: 'Acabou a bateria',
      imageSrc: 'bateria-de-carro-1.svg',
    },
    {
        text: 'Furou o pneu',
        imageSrc: 'pneu-furado-1.svg',
    },
    {
        text: 'Preciso de um chaveiro',
        imageSrc: 'chave-1.svg',
    },
    {
        text: 'Acabou o combustível',
        imageSrc: 'posto-de-gasolina-1.svg',
    },
    {
        text: 'Acidentes',
        imageSrc: 'triangulo-1.svg',
    },
    {
        text: 'Problemas elétricos',
        imageSrc: 'carro-eletrico-1.svg',
    },
  ];

  return (
    <div>
      {buttons.map((button, index) => (
        <Button key={index}>
          <ButtonImage src={button.imageSrc} alt={button.text} />
          {button.text}
        </Button>
      ))}
    </div>
  );
}

export default ButtonList;