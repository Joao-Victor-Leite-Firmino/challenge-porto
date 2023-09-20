'use client'
import React from 'react';
import styled from 'styled-components';


const Button = styled.button`
align-items: center;
text-align: center;
background-color: white;
color: black;
cursor: pointer;
width: 49.5%;
height: 10em;
`;

const ButtonImage = styled.img`
  width: 40%;
  height: 50px;
  margin: auto;
  display: block;
`;

const InputFile = styled.input`
  display: none;
`;

function SeletorImagem() {
    const buttons = [
      {
        text: 'Seletor de imagem',
        imageSrc: 'gallery 1.svg',
        link: '/Acompanhamento',
      },
      {
        text: 'Seletor de imagem',
        imageSrc: 'gallery 1.svg',
        link: '/Acompanhamento',
      },
    ];

  return (
    <div>
      {buttons.map((button, index) => (
        <a key={index} href={button.link}>
        <Button key={index}>
          <ButtonImage src={button.imageSrc} alt={button.text} />
        </Button>
        </a>
      ))}
    </div>
  );
}

export default SeletorImagem;