'use client'

import React, { useState } from 'react';
import styled from 'styled-components';


const Button = styled.button`
  /* Estilos base do botão */
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
  /* Estilos da imagem do botão */
  width: 40%;
  height: 50px;
  margin-bottom: 5px;

  @media screen and (min-width: 1280px) {
    margin-left: 5em;
    width: 40%;
    height: 70px;
  }
`;

const Modal = styled.div`
  /* Estilos do pop-up */
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 999;
  font-family: Arial;
  border: 1px solid #000; 
`;

const InputStyled = styled.input`
  /* Estilos para inputs */
  margin-bottom: 10px;
  padding: 8px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SendButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background: #f0f0f0;
  cursor: pointer;
`;

function Modificacoes() {
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputType, setInputType] = useState('');

  const buttons = [
    {
      text: 'Número de eixos',
      imageSrc: 'truck 1.svg',
      link: '/Possivel_fotos',
      isInput: true,
    },
    {
      text: 'Carga',
      imageSrc: 'delivery-weighing 1.svg',
      link: '/Possivel_fotos',
      isInput: true,
    },
    {
      text: 'Tipo de carga',
      imageSrc: 'parcel 1.svg',
      link: '/Possivel_fotos',
      isInput: true,
    },
  ];

  const handleButtonClick = (buttonIndex) => {
    if (buttons[buttonIndex].isInput) {
      setShowModal(true);
      setInputType(buttons[buttonIndex].text);
    } else {
      setShowModal(false);
      // Lógica para lidar com outras opções
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendButtonClick = () => {
    setShowModal(false);
    // Lógica para enviar os dados do formulário
  };

  return (
    <div>
      {buttons.map((button, index) => (
        <div key={index}>
          <Button onClick={() => handleButtonClick(index)}>
            <ButtonImage src={button.imageSrc} alt={button.text} />
            {button.text}
          </Button>
        </div>
      ))}
      <Modal show={showModal}>
        <h2>{inputType}</h2>
        <InputStyled
          type={inputType === 'Número de eixos' ? 'number' : 'text'}
          placeholder={inputType === 'Carga' ? 'Peso da carga' : 'Tipo de carga'}
          value={inputValue}
          onChange={handleInputChange}
        />
        <SendButton onClick={handleSendButtonClick}>Enviar</SendButton>
        {/* Adicione a lógica para manipular a entrada do peso e tipo de carga */}
      </Modal>
    </div>
  );
}

export default Modificacoes;
