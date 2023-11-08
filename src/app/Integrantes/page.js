'use client'
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import styles from '../globals.css';


const people = [
  {
    nome: "JOÃO VICTOR LEITE FIRMINO",
    RM: "RM: 97714",
    image: "/Joao Firmino.jpeg",
    linkedin: "https://www.linkedin.com/in/joao-victor-leite-firmino/"
  },
  {
    nome: "JOÃO VITOR CUNHA ASSIS",
    RM: "RM: 550668",   
    image: "Joao Cunha.jpg",
    linkedin: "https://www.linkedin.com/in/joão-vitor-cunha-assis/"
  },
  {
    nome: "LEONARDO VALENTIM",
    RM: "RM: 98660",
    image: "Leonardo Valentim.jpeg",
    linkedin: "https://www.linkedin.com/in/leonardo-valentim-53a315265/"
  },
  {
    nome: "LUCAS CAZZARO",
    RM: "RM: 551201",
    image: "Lucas Cazzaro.jpg",
    linkedin: "https://www.linkedin.com/in/lucas-cazzaro-558a24267/"
  },
  {
    nome: "RONALDO NODA",
    RM: "RM: 99219",
    image: "Ronaldo Noda.jpg",
    linkedin: "https://www.linkedin.com/in/ronaldo-noda-443306182/"
  }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Person = styled.div`
  margin: 20px;
  text-align: center;
`;

const Image = styled.img`
  max-width: 200px;
  max-height: 200px;
  border-radius: 50%;
`;

const Nome = styled.p``;

const RM = styled.p``;

const LinkedInLink = styled.a`
  text-decoration: none;
  color: #0077B5;
  display: block;
`;

function App() {
  return (
    <div>
        <header class='cabecalho'>
      <Link href="/Home">
        <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      </Link>
      </header>
      <h1 class="titulo__integrantes">Integrantes</h1>
      <Container>
        {people.map((person, index) => (
          <Person key={index}>
            <Image src={person.image} alt={person.name} />
            <Nome>{person.nome}</Nome>
            <RM>{person.RM}</RM>
            <LinkedInLink href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</LinkedInLink>
          </Person>
        ))}
      </Container>
      <footer class="rodape">
      <p>Desenvolvido pelo grupo King of Code, 2023.</p>
    </footer>
    </div>
  );
}

export default App;