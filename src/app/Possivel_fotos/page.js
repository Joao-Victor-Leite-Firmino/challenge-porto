'use client'
import React from 'react';
import Link from 'next/link';
import BotaoSim from '../components/BotaoSim';
import BotaoNao from '../components/BotaoNao';


export default function Possivel_fotos() {
    return(
        <div>
            <header class='cabecalho'>
        <Link href="/">
         <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        </Link>
        </header>
        <div class="titulo__tem__modificacoes">
        <h1>Fotos do veículo:</h1>
        <h2>É possível tirar fotos do veículo?</h2>
        </div>
        <div class="Botao__sim__nao">
        <Link href="/Fotos">
        <BotaoSim/>
        </Link>
        <BotaoNao/>
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