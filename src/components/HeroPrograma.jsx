// Hero das páginas PKZ, One to One e Fisioterapia
// whatsapp e botao: se vierem, aparece o botão do WhatsApp
export default function HeroPrograma(props) {
  return (
    <section className="secao hero hero-programa">
      <header className="hero-texto">
        <p className="eyebrow">{props.rotulo}</p>
        <h1>{props.titulo}</h1>
        <p>{props.texto}</p>
        <ul className="tags">
          {props.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <p className="botoes">
          {props.whatsapp && (
            <a href={props.whatsapp} className="botao" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-whatsapp"></i> {props.botao}
            </a>
          )}
          <a href={props.ancora || '#metodologia'} className="botao-contorno-claro">{props.textoAncora || 'Metodologia'}</a>
        </p>
      </header>
      <img className="hero-imagem" src={props.foto} alt={props.alt} />
    </section>
  )
}