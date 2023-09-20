'use client'
import React from 'react';
import Link from 'next/link';
import SeletorImagem from '../components/SeletorFotos';


export default function Fotos() {
    return(
        <div>
            <header class='cabecalho'>
        <Link href="/">
         <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        </Link>
        </header>
        <div class="titulo__fotos">
        <h1>Selecione os lados possíveis:</h1>
        </div>
        <div class="selecao__lados">
        <img src='Selecao lados.svg' alt='Seleção de lados'></img>
        </div>
        <div class="seletores__imagem">
        <SeletorImagem/>
        <SeletorImagem/>
        </div>
        <footer class="rodape">
        <p>Desenvolvido pelo grupo King of Code, 2023.</p>
        <Link class="integrantes" href="/Integrantes">
         <h2>Integrantes</h2>
        </Link>
        </footer>
        </div>
  );
}