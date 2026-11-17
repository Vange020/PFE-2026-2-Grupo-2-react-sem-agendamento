import dadosContato from '../dados/contato.js'

// Chamada final (azul), usada em várias páginas
// whatsapp: link do WhatsApp da página (se não vier, usa o da academia)
export default function Chamada(props) {
  return (
    <section className="secao chamada">
      <header className="chamada-texto">
        <h2>{props.titulo}</h2>
        <p>{props.texto}</p>
      </header>
      <a href={props.whatsapp || dadosContato.whatsapp} className="botao-escuro" target="_blank" rel="noopener noreferrer">
        <i className="fa-brands fa-whatsapp"></i> WhatsApp
      </a>
    </section>
  )
}
