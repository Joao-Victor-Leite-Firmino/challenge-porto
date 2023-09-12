import './globals.css'
import ButtonList from "./components/Botaoassistencia";

export default function Problemas() {
  return (
    <main>
      <header class='cabecalho'>
      <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      </header>
      <div class='h1'>
      <h1 class="titulo">Que tipo de assistência você está procurando?</h1>
      </div>
      <ButtonList/>
    </main>
  )
}