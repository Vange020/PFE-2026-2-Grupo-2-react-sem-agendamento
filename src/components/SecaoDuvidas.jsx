import Duvidas from './Duvidas.jsx'
import { Link } from 'react-router-dom'

// Seção "Antes de começar" (página Início)
export default function SecaoDuvidas() {
  return (
    <section id="duvidas" className="secao duvidas">
      <header className="duvidas-texto">
        <p className="eyebrow">Dúvidas frequentes</p>
        <h2 className="titulo-secao">Antes de começar</h2>
        <p>Não encontrou o que procurava? Fale com a gente — respondemos rapidinho.</p>
        <Link className="botao" to="/contato">Contate-nos</Link>
      </header>
      <Duvidas />
    </section>
  )
}
