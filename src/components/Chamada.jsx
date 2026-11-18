import { Link } from 'react-router-dom'

// Chamada final (azul), usada em várias páginas
export default function Chamada(props) {
  return (
    <section className="secao chamada">
      <header className="chamada-texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </header>
      <Link to="/contato" className="botao-escuro">Contate-nos</Link>
    </section>
  )
}
