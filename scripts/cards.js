import { # } from '../data/cards.js'

Array.forEach(item => {
fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    createCard(myJson)
  });
})

  const mainContainer = document.querySelector('.container')

  function createCard(data) {
      let card = document.createElement('div')
      let name = document.createElement('p')
      let image = document.createElement('img')

      name.textContent = data.name
      image.src = #
      card.appendChild(name)
      card.append(img)
      mainContainer.appendChild(card)
  }

