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
`;

const ButtonImage = styled.img`
  width: 40%;
  height: 50px;
  margin-bottom: 5px;
`;

function Modificacoes() {
    const buttons = [
      {
        text: 'Número de eixos',
        imageSrc: 'truck 1.svg',
      },
      {
        text: 'Carga',
        imageSrc: 'delivery-weighing 1.svg',
      },
      {
        text: 'Tipo de carga',
        imageSrc: 'parcel 1.svg',
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

export default Modificacoes;