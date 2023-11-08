'use client'

import React, { useState } from 'react';
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
  height: 7em;

  @media screen and (min-width: 1280px) {
    width: 99%;
    margin: auto;
    height: 7em;
    font-size: 1.2em;
  }
`;

const ButtonImage = styled.img`
  width: 40%;
  height: 50px;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    margin-left: 5em;
    width: 40%;
    height: 70px;
  }
`;

function ButtonList() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const buttons = [
    {
      text: 'Estava andando e parou',
      imageSrc: 'caminhao.svg',
      link: '/Conta_com_modificacoes',
    },
    {
      text: 'Problemas ao ligar',
      imageSrc: 'carro-com-problemas-de-calor-1.svg',
      link: '/Conta_com_modificacoes',
    },
    {
      text: 'Acabou a bateria',
      imageSrc: 'bateria-de-carro-1.svg',
      link: '/Conta_com_modificacoes',
    },
    {
        text: 'Furou o pneu',
        imageSrc: 'pneu-furado-1.svg',
        link: '/Conta_com_modificacoes',
    },
    {
        text: 'Preciso de um chaveiro',
        imageSrc: 'chave-1.svg',
        link: '/Conta_com_modificacoes',
    },
    {
        text: 'Acabou o combustível',
        imageSrc: 'posto-de-gasolina-1.svg',
        link: '/Conta_com_modificacoes',
    },
    {
        text: 'Acidentes',
        imageSrc: 'triangulo-1.svg',
        link: '/Conta_com_modificacoes',
    },
    {
        text: 'Problemas elétricos',
        imageSrc: 'carro-eletrico-1.svg',
        link: '/Conta_com_modificacoes',
    },
  ];

  const handleButtonClick = (buttonIndex) => {
    // Verifica se o botão já está selecionado
    const index = selectedButtons.indexOf(buttonIndex);
    if (index > -1) {
      // Remove da lista se já estiver selecionado
      const newSelectedButtons = [...selectedButtons];
      newSelectedButtons.splice(index, 1);
      setSelectedButtons(newSelectedButtons);
    } else {
      // Adiciona à lista se não estiver selecionado
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  return (
    <div>
      {buttons.map((button, index) => (
        <Button
          key={index}
          style={{
            backgroundColor: selectedButtons.includes(index) ? 'lightblue' : 'white',
          }}
          onClick={() => handleButtonClick(index)}
        >
          <ButtonImage src={button.imageSrc} alt={button.text} />
          {button.text}
        </Button>
      ))}
    </div>
  );
}

export default ButtonList;
