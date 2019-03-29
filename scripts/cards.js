import { people } from '../data/people.js'

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

  const mainContainer = document.querySelector('.cardContainer')

  function createCard(person) {
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
  }

  allStars.forEach(person => {
    createCard(person);
  })

  class Card {
    constructor(id) {
    // this.id = id,
    this.imageSRC = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }
  }

function addNewPlayer(obj) {
  let newCard = document.createElement('div')
  newCard.className = 'box'
  let newFigure = document.createElement('figure')
  let newImage = document.createElement('img')

  newImage.src = obj.imageSRC
  newFigure.appendChild(newImage)
  newCard.appendChild(newFigure)
  mainContainer.appendChild(newCard)
}
  
const newPlayerButton = document.querySelector('button')

newPlayerButton.addEventListener('click', function() {
  let newID = document.getElementById('enterID').value
  addNewPlayer(new Card(newID))
})


// On the back: height and mass and species. 
// Have input content be the id, set whatever to be over 25 for the input 