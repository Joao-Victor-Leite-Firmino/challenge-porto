import './globals.css'
import BotaoChamada from './components/BotaoChamada'

export default function Home() {
  return (
    <main>
      <header class='cabecalho'>
        <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
        <link></link>
      </header>
      <div class='h1'>
        <h1 class="titulo">Olá usuário, selecione abaixo o veículo que precisa de assistência</h1>
      </div>
      <div class="veiculos">
        <p class="paragrafo">Vigência de 01/01/2023 a 31/12/2024</p>
        <BotaoChamada 
        src="/ferramentinha.svg"/>
      </div>
    </main>
  )
}