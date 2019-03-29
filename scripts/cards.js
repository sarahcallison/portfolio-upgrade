import { people } from '../data/people.js'

// Array.forEach(item => {
// fetch('http://example.com/movies.json')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(myJson) {
//     console.log(JSON.stringify(myJson));
//     createCard(myJson)
//   });
// })

const getLastNumber = url => {
  let end = url.lastIndexOf('/')
  let start = end - 2
  if (url.charAt(start) === '/') {
      start++
  }
  return url.slice(start, end)
}

people.forEach(person => {
  let personID = getLastNumber(person.url)
  person.id = personID
  person.id = parseInt(person.id, 10)
  let imageURL = getLastNumber(person.url)
person.imagePath = `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`

})

const allStars = people.filter(person => {
  if (person.id <= 26) {
    return person
  }
})

console.log(allStars)



  const mainContainer = document.querySelector('.cardContainer')

  allStars.forEach(person => {
      let card = document.createElement('div')
      card.className = 'box'
      let figure = document.createElement('figure')
      let name = document.createElement('figcaption')
      let image = document.createElement('img')

      name.textContent = person.name
      image.src = person.imagePath

      figure.appendChild(image)
      figure.appendChild(name)
      card.appendChild(figure)
      mainContainer.appendChild(card)
  })



// class Card {
//   constructor(id-how is this the input?) {
// if (id === person.id)
// 
//   }
// }

// let newPokemon = new Pokemon(80, 'Saremon')

// const newCardButton = document.querySelector('button')

// newCardButton.addEventListener('click'), function() {
//   let newCard = prompt('Enter the name of your new pokemon')
//   createCard(newPokemon)
// }

// On the back: height and mass and species. 
// Have input content be the id, set whatever to be over 25 for the input 