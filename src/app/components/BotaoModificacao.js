'use client'
import React, { useState } from 'react';
import styled from 'styled-components';
import styles from '../globals.css';

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

const Modal = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 20px;
  border-radius: 5px;
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
        <input
          type={inputType === 'Número de eixos' ? 'number' : 'text'}
          placeholder={inputType === 'Carga' ? 'Peso da carga' : 'Tipo de carga'}
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={() => setShowModal(false)}>Fechar</button>
        {/* Adicionar lógica para manipular a entrada do peso e tipo de carga */}
      </Modal>
    </div>
  );
}

export default Modificacoes;
