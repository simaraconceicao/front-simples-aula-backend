// consumindo dados
    fetch('https://mongo-aula-1.onrender.com')
      .then(response => response.json())
      .then(data => {
        const dataCard= document.getElementById("cards")
        let card = " "
        
        data.forEach(item => {
           card+= 
            `<div class="card">
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