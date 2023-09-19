'use client'
import React from 'react';
import styled from 'styled-components';


const Button = styled.button`

align-items: center;
text-align: center;
background-color: white;
color: black;
cursor: pointer;
width: 50%;
height: 10em;
`;

const ButtonImage = styled.img`
  width: 40%;
  height: 50px;
  margin: auto;
  display: block;
`;

function SeletorImagem() {
    const buttons = [
      {
        text: 'Seletor de imagem',
        imageSrc: 'gallery 1.svg',
      },
      {
        text: 'Seletor de imagem',
        imageSrc: 'gallery 1.svg',
      },
    ];

  return (
    <div>
      {buttons.map((button, index) => (
        <Button key={index}>
          <ButtonImage src={button.imageSrc} alt={button.text} />
        </Button>
      ))}
    </div>
  );
}

export default SeletorImagem;