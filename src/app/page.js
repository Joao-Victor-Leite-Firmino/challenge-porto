import BotaoAssist from "./components/Botaoassistencia";
import BotaoHist from "./components/BotaoHistorico";
import Titulo from "./components/titulo";


export default function Home() {
  return (
    <main>
      <Titulo text='Olá usuário, selecione abaixo o veículo o qual precisa de assistência'/>
        <a href="">
      <BotaoAssist 
      text='Solicitar assistência'
      />
      </a>
        <a href="">
      <BotaoHist 
      text='Histórico de assistências'
      />
      </a>
    </main>
  )
}