// Contatos da academia (número e perfis provisórios — trocar pelos reais)
const numeroWhatsapp = '55XXXXXXXXXXX'
const whatsapp = 'https://wa.me/' + numeroWhatsapp + '?text=Olá! Quero saber mais sobre a academia.'
const instagramPkz = 'pkz'
const instagramOneToOne = 'onetoone'

// Os três cards da página Contato
const canais = [
  {
    titulo: 'WhatsApp',
    texto: 'Atendimento da PKZ, da One to One e da Fisioterapia.',
    icone: 'fa-brands fa-whatsapp',
    link: whatsapp,
    botao: 'Chamar no WhatsApp',
  },
  {
    titulo: 'Instagram PKZ',
    texto: '@' + instagramPkz,
    icone: 'fa-brands fa-instagram',
    link: 'https://instagram.com/' + instagramPkz,
    botao: 'Ver Instagram',
  },
  {
    titulo: 'Instagram One to One',
    texto: '@' + instagramOneToOne,
    icone: 'fa-brands fa-instagram',
    link: 'https://instagram.com/' + instagramOneToOne,
    botao: 'Ver Instagram',
  },
]

const dadosContato = { numeroWhatsapp, whatsapp, canais }

export default dadosContato
