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
height: 7em;
font-size: 22px;

@media screen and (min-width: 1280px) {
  width: 99%;
  margin: auto;
  height: 8em;
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

function Modificacoes() {
    const buttons = [
      {
        text: 'Número de eixos',
        imageSrc: 'truck 1.svg',
        link: '/Possivel_fotos',
      },
      {
        text: 'Carga',
        imageSrc: 'delivery-weighing 1.svg',
        link: '/Possivel_fotos',
      },
      {
        text: 'Tipo de carga',
        imageSrc: 'parcel 1.svg',
        link: '/Possivel_fotos',
      },
    ];

  return (
    <div>
      {buttons.map((button, index) => (
        <a key={index} href={button.link}>
        <Button key={index}>
          <ButtonImage src={button.imageSrc} alt={button.text} />
          {button.text}
        </Button>
        </a>
      ))}
    </div>
  );
}

export default Modificacoes;