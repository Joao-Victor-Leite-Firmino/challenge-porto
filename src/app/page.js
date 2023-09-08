import './globals.css'
import BotaoAssist from "./components/Botaoassistencia";
import BotaoHist from "./components/BotaoHistorico";
import Titulo from "./components/Titulo";

export default function Home() {
  return (
    <main>
      <Titulo className="titulo" text='Que tipo de assistência você está procurando?'/>
      <BotaoAssist 
      text='Estava andando e parou'
      src="/ferramentinha.svg"
      />
      <BotaoAssist 
      text='Problemas ao ligar'
      />
      <BotaoAssist 
      text='Acabou a bateria'
      />
      <BotaoAssist 
      text='Furou o pneu'
      />
      <BotaoAssist 
      text='Preciso de um chaveiro'
      />
      <BotaoAssist 
      text='Acabou o combustível'
      />
      <BotaoAssist 
      text='Acidentes'
      />
      <BotaoAssist 
      text='Problemas elétricos'
      />
    </main>
  )
}