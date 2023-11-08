'use client'

import React from 'react';
import styled from 'styled-components';

const Button = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  color: black;
  cursor: pointer;
  width: 49.5%;
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 10px;

  @media screen and (min-width: 1280px) {
    width: 30%;
    height: 12em;
  }
`;

const ButtonImage = styled.img`
  width: 80%;
  height: 50px;
  margin: auto;
  display: block;
`;

function SeletorImagem() {
  const buttons = [
    {
      text: 'Frente',
      imageSrc: 'gallery 1.svg',
      link: '/FotoFrente',
      inputName: 'fotoFrente', 
    },
    {
      text: 'Lateral Esquerda',
      imageSrc: 'gallery 1.svg',
      link: '/FotoLateralEsquerda',
      inputName: 'fotoLateralEsquerda',
    },
    {
      text: 'Lateral Direita',
      imageSrc: 'gallery 1.svg',
      link: '/FotoLateralDireita',
      inputName: 'fotoLateralDireita',
    },
    {
      text: 'Traseira',
      imageSrc: 'gallery 1.svg',
      link: '/FotoTraseira',
      inputName: 'fotoTraseira',
    },
  ];

  const handleFileChange = (e, inputName) => {
    const file = e.target.files[0];
    console.log(`Arquivo selecionado para ${inputName}: ${file.name}`);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {buttons.map((button, index) => (
        <Button key={index} htmlFor={button.inputName}>
          <ButtonImage src={button.imageSrc} alt={button.text} />
          {button.text}
          <input
            type="file"
            id={button.inputName}
            name={button.inputName}
            style={{ display: 'none' }}
            onChange={(e) => handleFileChange(e, button.inputName)}
          />
        </Button>
      ))}
    </div>
  );
}

export default SeletorImagem;
