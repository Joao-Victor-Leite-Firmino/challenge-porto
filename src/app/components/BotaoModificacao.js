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
  font-family: Arial, sans-serif;
`;

const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const SendButton = styled.button`
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightblue;
  cursor: pointer;
  font-size: 18px;
`;



function Modificacoes() {
  const [showModalEixos, setShowModalEixos] = useState(false);
  const [showModalCarga, setShowModalCarga] = useState(false);
  const [showModalTipoCarga, setShowModalTipoCarga] = useState(false);
  const [showModalTombado, setShowModalTombado] = useState(false);

  const [inputValueEixos, setInputValueEixos] = useState('');
  const [inputValueCarga, setInputValueCarga] = useState('');
  const [inputValueTipoCarga, setInputValueTipoCarga] = useState('');

  const [isVeiculoTombado, setIsVeiculoTombado] = useState('');

  const handleEixosSubmit = () => {
    if (!isNaN(inputValueEixos)) {
      setShowModalEixos(false);
      alert(`Número de eixos: ${inputValueEixos}`);
    } else {
      alert('Por favor, insira um número válido para os eixos.');
    }
  };

  const handleCargaSubmit = () => {
    if (inputValueCarga.trim()) {
      setShowModalCarga(false);
      alert(`Peso da carga: ${inputValueCarga}`);
    } else {
      alert('Por favor, insira um valor válido para a carga.');
    }
  };

  const handleTipoCargaSubmit = () => {
    if (inputValueTipoCarga.trim()) {
      setShowModalTipoCarga(false);
      alert(`Tipo de carga: ${inputValueTipoCarga}`);
    } else {
      alert('Por favor, insira um valor válido para o tipo de carga.');
    }
  };

  const handleTombadoSubmit = () => {
    if (isVeiculoTombado) {
      setShowModalTombado(false);
      alert(`Veículo tombado? Resposta: ${isVeiculoTombado}`);
    } else {
      alert('Por favor, selecione uma opção para a condição do veículo.');
    }
  };

  return (
    <div>
      <div>
        <Button onClick={() => setShowModalEixos(true)}>
          <ButtonImage src="truck 1.svg" alt="Número de Eixos" />
          Número de Eixos
        </Button>
        <Modal show={showModalEixos}>
          <h2>Número de Eixos</h2>
          <InputStyled
            type="number"
            placeholder="Insira o número de eixos"
            value={inputValueEixos}
            onChange={e => setInputValueEixos(e.target.value)}
          />
          <SendButton onClick={handleEixosSubmit}>Enviar</SendButton>
        </Modal>
      </div>

      <div>
        <Button onClick={() => setShowModalCarga(true)}>
          <ButtonImage src="delivery-weighing 1.svg" alt="Carga" />
          Peso da Carga
        </Button>
        <Modal show={showModalCarga}>
          <h2>Peso da Carga</h2>
          <InputStyled
            type="text"  
            placeholder="Insira o valor da carga"
            value={inputValueCarga}
            onChange={e => setInputValueCarga(e.target.value)}
          />
          <SendButton onClick={handleCargaSubmit}>Enviar</SendButton>
        </Modal>
      </div>

      <div>
        <Button onClick={() => setShowModalTipoCarga(true)}>
          <ButtonImage src="parcel 1.svg" alt="Tipo de Carga" />
          Tipo de Carga
        </Button>
        <Modal show={showModalTipoCarga}>
          <h2>Tipo de Carga</h2>
          <InputStyled
            type="text"
            placeholder="Insira o tipo de carga"
            value={inputValueTipoCarga}
            onChange={e => setInputValueTipoCarga(e.target.value)}
          />
          <SendButton onClick={handleTipoCargaSubmit}>Enviar</SendButton>
        </Modal>
      </div>

      <div>
        <Button onClick={() => setShowModalTombado(true)}>
          <ButtonImage src="caminhao-_2_.svg" alt="Caminhão tombado?" />
          Veículo tombado?
        </Button>
        <Modal show={showModalTombado}>
          <h2>Veículo tombado?</h2>
          <label>
            <input
              type="radio"
              value="Sim"
              checked={isVeiculoTombado === 'Sim'}
              onChange={() => setIsVeiculoTombado('Sim')}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              value="Não"
              checked={isVeiculoTombado === 'Não'}
              onChange={() => setIsVeiculoTombado('Não')}
            />
            Não
          </label>
          <SendButton onClick={handleTombadoSubmit}>Enviar</SendButton>
        </Modal>
      </div>
    </div>
  );
}

export default Modificacoes;
