import dadosContato from '../dados/contato.js'

// Card de um treinador (completo = versão da página Equipe)
export default function CardTreinador(props) {
  const treinador = props.treinador

  return (
    <article className="card-treinador">
      {treinador.foto && <img src={treinador.foto} alt={treinador.nome} />}
      <p className={treinador.programa === 'pkz' ? 'selo selo-pkz' : 'selo selo-oto'}>
        {treinador.programa === 'pkz' ? 'PKZ' : 'One to One'}
      </p>
      <h3>{treinador.nome}</h3>
      <p className="especialidade">{treinador.especialidade}</p>

      {props.completo && (
        <>
          <p className="apresentacao">{treinador.apresentacao}</p>
          <p className="tags">{treinador.tags}</p>
          <p className="cref">{treinador.cref}</p>
          <a href={dadosContato.whatsapp} className="link-treinar" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </>
      )}
    </article>
  )
}
