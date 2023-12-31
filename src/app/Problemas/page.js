import ButtonList from "../components/Botaoassistencia";
import Link from "next/link";

export default function Problemas() {
  return (
    <main>
      <header class='cabecalho'>
      <Link href="/Home">
        <img class='logo' src="porto-seguro-logo (1).png" alt="Logo Porto Seguro"/>
      </Link>
      </header>
      <div class='h1'>
      <h1 class="titulo">Que tipo de assistência você está procurando?</h1>
      </div>
      <ButtonList/>
      <div class="prosseguir">
      <Link href="/Modificacoes">
      <input class='botao__prosseguir' type="submit" value="Prosseguir" />
      </Link>
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