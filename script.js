// consumindo dados
fetch('https://mongo-aula-1.onrender.com')
  .then((response) => response.json())
  .then((data) => {
    const dataCard = document.getElementById('cards')
    let card = ' '

    data.forEach((item) => {
      card += `<div class="card">
              <img src="${item.imagem}" alt="" width="150">
              <details>
                <summary>${item.nome}</summary>
                <p>${item.bio}</p>
                <blockquote><q>${item.citacao}</q></blockquote>
              </details>
            </div>`
    })

    console.log(dataCard)
    dataCard.innerHTML = card
  })

const campoNome = document.getElementById('nome')
const campoCitacao = document.getElementById('citacao')
const campoImagem = document.getElementById('imagem')
const campoBio = document.getElementById('bio')

const botao = document.getElementById('btn')

botao.addEventListener('click', () => {
  const createItem = {
    nome: campoNome.value,
    bio: campoBio.value,
    citacao: campoCitacao.value,
    imagem: campoImagem.value
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createItem)
  }

  fetch('https://mongo-aula-1.onrender.com', options)
    .then((data) => {
      if (!data.ok) {
        throw Error(data.status)
      }
      return data.json()
    })
    .then((update) => {
      console.log(update)
    })
    .catch((e) => {
      console.log(e)
    })
})
