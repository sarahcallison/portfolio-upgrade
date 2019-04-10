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

function createCard(arrayArg) {
  arrayArg.forEach( (person) => {
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

  imageBack.src = 'images/2000px-Star_Wars_Yellow_Logo.svg.png'
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
  })

})
}

createCard(allStars)

class Card {
  constructor(id, name, height, mass) {
    this.name = name,
    this.height = height,
    this.mass = mass,
    this.imageSRC = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
  }
}


const newPlayerButton = document.querySelector('button')
newPlayerButton.addEventListener('click', function () {
  let newID = document.getElementById('enterID').value

  let newPerson = people.filter( function (person) {
    if (newID === person.id) {
      return [{
  name : person.name,
  height: person.height,
  mass : person.mass,
  imagePath: person.imagPath
    }] 
  }
   })
   console.log(newPerson)
  createCard(newPerson)
})




