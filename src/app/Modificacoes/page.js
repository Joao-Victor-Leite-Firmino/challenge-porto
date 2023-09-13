'use client'
import React from 'react';
import Link from 'next/link';
import Modificacoes from '../components/BotaoModificacao';

export default function conta_com_modificacoes() {
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
    <Link href="/Possivel_foto">
    <Modificacoes/>
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


