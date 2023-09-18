import BotaoChamada from './components/BotaoChamada'
import Link from 'next/link'
import BotaoHist from './components/BotaoHistorico'

export default function Home() {
  return (
    <main class="home">
      <header class='cabecalho'>
      <Link class="link__logo" href="/Home">
        <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        </Link>
      </header>
      <div class='h1'>
        <h1 class="titulo">Olá usuário, selecione abaixo o veículo que precisa de assistência</h1>
      </div>
      <div class="veiculos">
        <div class="imagem__placa">
          <div class="carro">
            <img src="carros 4.svg" alt="Carro"/>
          </div>
          <img class="placa" src="License Plate.svg" alt="Placa"/>
        </div>
        <p class="paragrafo">Vigência de 01/01/2023 a 31/12/2024</p>
        <Link href="/Problemas">
        <BotaoChamada class="botao__azul"
        src="/ferramentinha.svg"/>
        </Link>
      <div class="botao__historico">
        <BotaoHist/>
      </div>
    </div>
    <div class="veiculos">
        <div class="imagem__placa">
          <div class="carro">
            <img src="carros 4.svg" alt="Carro"/>
          </div>
          <img class="placa" src="License Plate.svg" alt="Placa"/>
        </div>
        <p class="paragrafo">Vigência de 01/01/2023 a 31/12/2024</p>
        <Link href="/Problemas">
        <BotaoChamada class="botao__azul"
        src="/ferramentinha.svg"/>
        </Link>
      <div class="botao__historico">
        <BotaoHist/>
      </div>
    </div>
    <footer class="rodape">
      <p>Desenvolvido pelo grupo King of Code, 2023.</p>
      <Link class="integrantes" href="/Integrantes">
        <h2>Integrantes</h2>
      </Link>
    </footer>
    </main>
  )
}