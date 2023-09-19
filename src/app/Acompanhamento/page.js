'use client'
import React from 'react';
import Link from 'next/link';


export default function Acompanhamento() {
    return(
        <div>
            <header class='cabecalho'>
        <Link href="/">
         <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        </Link>
        </header>
        <div class="titulo__fotos">
        <h1>Guincho indo ate você</h1>
        </div>
        <div class="selecao__lados">
        <img src='gps.png' alt='GPS'></img>
        </div>
        <h2 class="placa">Placa do guincho</h2>
        <div class="identificador__guincho">
        <img src='License Plate.svg' alt='Placa do guincho'></img>
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