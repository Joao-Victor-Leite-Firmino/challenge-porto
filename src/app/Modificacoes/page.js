'use client'
import React from 'react';
import Link from 'next/link';
import Modificacoes from '../components/BotaoModificacao';
import styles from '../globals.css';

export default function Pagina_modificacoes() {
  return (
    <div>
        <header class='cabecalho'>
        <Link href="/Home">
        <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      </Link>
      </header>
      <div class="titulo__modificacoes">
      <h1>Modificações</h1>
      <h2>Qual é a modificação?</h2>
      </div>
      <div>
    <Modificacoes/>
    <div class="prosseguir">
    <Link href="/Possivel_fotos">
      <input class='botao__prosseguir' type="submit" value="Prosseguir" />
      </Link>
      </div>
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


