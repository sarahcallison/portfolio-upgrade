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
  // person.id = parseInt(person.id, 10)
  person.imagePath = `https://starwars-visualguide.com/assets/img/characters/${personID}.jpg`
})

const allStars = people.filter(person => {
  if (person.id <= 26) {
    return person
  }
})

const mainContainer = document.querySelector('.cardContainer')

function createCard(person) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'

  let cardFront = document.createElement('div')
  cardFront.className = 'card__face'
  let figure = document.createElement('figure')
  let name = document.createElement('figcaption')
  let image = document.createElement('img')
  image.className = "image"

  name.textContent = person.name
  image.src = person.imagePath

  figure.appendChild(image)
  figure.appendChild(name)
  cardFront.appendChild(figure)

  let cardBack = document.createElement('div')
  cardBack.className = 'card__face card__face--back'
  let imageBack = document.createElement('img')
  let height = document.createElement('p')
  let mass = document.createElement('p')

  imageBack.src = '2000px-Star_Wars_Yellow_Logo.svg.png'
  imageBack.className = 'backImg'
  height.textContent = "Height: " + person.height
  mass.textContent = "Mass: " + person.mass

  cardBack.appendChild(imageBack)
  cardBack.appendChild(height)
  cardBack.appendChild(mass)

  card.appendChild(cardFront)
  card.appendChild(cardBack)
  scene.appendChild(card)
  mainContainer.appendChild(scene)

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
}

allStars.forEach(person => {
  createCard(person);
  // let i = person.id - 1
  // console.log(i)
})



class Card {
  constructor(id) {
    this.imageSRC = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }
}


// function addNewPlayer(obj) {
//   let newCard = document.createElement('div')
//   newCard.className = 'box'
//   let newFigure = document.createElement('figure')
//   let newImage = document.createElement('img')

//   newImage.src = obj.imageSRC

//   newFigure.appendChild(newImage)
//   newCard.appendChild(newFigure)
//   mainContainer.appendChild(newCard)
// }

function addNewPlayer(obj) {
  let scene = document.createElement('div')
  scene.className = 'scene'
  let card = document.createElement('div')
  card.className = 'card'

  let newCard = document.createElement('div')
  newCard.className = 'card__face'
  let newFigure = document.createElement('figure')
  let newImage = document.createElement('img')
  newImage.className = 'image'

  newImage.src = obj.imageSRC

  newFigure.appendChild(newImage)
  newCard.appendChild(newFigure)
  card.appendChild(newCard)

  let newCardBack = document.createElement('div')
  newCardBack.className = 'card__face card__face--back'
  let newImageBack = document.createElement('img')
  newImageBack.className = "backImg"

  newImageBack.src = '2000px-Star_Wars_Yellow_Logo.svg.png'

  newCardBack.appendChild(newImageBack)
  card.appendChild(newCardBack)
  scene.appendChild(card)
  mainContainer.appendChild(scene)

  card.addEventListener('click', function () {
    card.classList.toggle('is-flipped');
  });
}

const newPlayerButton = document.querySelector('button')
newPlayerButton.addEventListener('click', function () {
  let newID = document.getElementById('enterID').value
  addNewPlayer(new Card(newID))
})



// i = person.id - 1, reference name property using i for index [i], how to reference specific object property
