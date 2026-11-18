import dadosContato from '../dados/contato.js'

// Página Contato: WhatsApp geral e o Instagram de cada marca
export default function Contato() {
  return (
    <section className="secao contato">
      <header className="secao-cabecalho">
        <p className="eyebrow">Contato</p>
        <h1>Fale com a gente</h1>
        <p>Tire dúvidas, peça uma aula experimental ou acompanhe as novidades da PKZ e da One to One.</p>
      </header>

      <ul className="lista-contatos">
        {dadosContato.canais.map((canal) => (
          <li key={canal.titulo} className="card-contato">
            <i className={canal.icone} aria-hidden="true"></i>
            <h2>{canal.titulo}</h2>
            <p>{canal.texto}</p>
            <a href={canal.link} className="botao" target="_blank" rel="noopener noreferrer">{canal.botao}</a>
          </li>
        ))}
      </ul>
    </section>
  )
}
