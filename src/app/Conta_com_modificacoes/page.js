'use client'
import React from 'react';
import Link from 'next/link';
import BotaoSim from '../components/BotaoSim';
import BotaoNao from '../components/BotaoNao';
import styles from '../globals.css';


export default function Conta_com_modificacoes() {
    return(
        <div>
            <header class='cabecalho'>
            <Link href="/Home">
         <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        </Link>
        </header>
        <div class="titulo__tem__modificacoes">
        <h1>Modificações</h1>
        <h2>Seu veículo conta com modificações?</h2>
        </div>
        <div class="Botao__sim__nao">
        <Link href="/Modificacoes">
        <BotaoSim/>
        </Link>
        <Link href="/Possivel_fotos">
        <BotaoNao/>
        </Link>
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
